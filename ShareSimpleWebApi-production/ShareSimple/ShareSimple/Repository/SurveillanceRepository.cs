using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using ShareSimple.Common;
using ShareSimple.Common.Enums;
using ShareSimple.Interface;
using ShareSimple.Models;
using ShareSimple.ViewModels;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;

namespace ShareSimple.Repository
{
    public class SurveillanceRepository : ISurveillanceRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        private readonly ShareSimpleConfiguration _configuration;
        private readonly IEmailService _emailService;
        private readonly string _env;
        public SurveillanceRepository(SharesimpleContext sharesimpleContext, ShareSimpleConfiguration configuration, IEmailService emailService)
        {
            _context = sharesimpleContext;
            this._configuration = configuration;
            _emailService = emailService;
            _env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
        }
        public void Log(HttpContext context = null, Guid? userId = null, string logMessage = null, MessageType messageType = MessageType.Info, Severity serverity = Severity.NotSet, object result = null, ActionType actionName = ActionType.NotSet, string entityName = null, object oldObject = null, object newObject = null, string moduleName = null, string submoduleName = null)
        {
            try
            {
                var jsonFormatter = new JsonSerializerSettings()
                {
                    MaxDepth = 2,
                    Formatting = Formatting.Indented
                };
                var surveillanceBase = new SurveillanceBase(context);
                var log = new Surveillance()
                {
                    Id = Guid.NewGuid(),
                    LogTime = DateTime.UtcNow,
                    UserId = userId ?? surveillanceBase.UserId,
                    LogMessage = logMessage,
                    MessageType = messageType.ToString(),
                    Severity = (int)serverity,
                    ActionName = actionName.ToString(),
                    EntityName = entityName,
                    ModuleName = moduleName,
                    SubModuleName = submoduleName,
                    MachineIP = surveillanceBase.MachineIP,
                    MachineName = surveillanceBase.MachineName,
                    UserAgent = surveillanceBase.UserAgent,
                    AppVersion = surveillanceBase.AppVersion
                };
                if (result != null)
                {
                    log.Result = JsonConvert.SerializeObject(result);
                }
                if (oldObject != null)
                {
                    log.OldObject = JsonConvert.SerializeObject(oldObject, jsonFormatter);
                }
                if (newObject != null)
                {
                    log.NewObject = JsonConvert.SerializeObject(newObject, jsonFormatter);
                }
                _context.Surveillance.Add(log);
                _context.SaveChanges();
                if (_emailService.SurveillanceSettings?.MailSeverities == null)
                {
                    _emailService.SurveillanceSettings.MailSeverities = new List<int>() { (int)Severity.High, (int)Severity.Medium };
                }
                if (_emailService.SurveillanceSettings.MailSeverities.Contains(log.Severity))
                {
                    if (_emailService.SurveillanceSettings.ErrorMailReceivers.Count > 0)
                    {
                        var logDetail = Get(log.Id);
                        if (logDetail != null)
                        {
                            var emailBody = GetMsgBody(MailTemplate.ERROR_MAIL_BODY, logDetail.Id.ToString(), logDetail.LogTime.ToString(), $"{logDetail.CompanyName} {logDetail.CompanyDomain}", $"{logDetail.UserName} {logDetail.UserEmail}", logDetail.ActionName, logDetail.LogMessage, logDetail.Result, logDetail.UserAgent, logDetail.MachineIP, logDetail.AppVersion, DateTime.UtcNow.ToString("yyyy"), _env);
                            _emailService.Send(_emailService.SurveillanceSettings.ErrorMailSender,
                                string.Join(";", _emailService.SurveillanceSettings.ErrorMailReceivers),
                                $"({_env}) {_emailService.SurveillanceSettings.ErrorMailSubject}",
                                emailBody
                                );
                        }
                    }
                    else
                    {
                        var anotherLog = new Surveillance()
                        {
                            Id = Guid.NewGuid(),
                            LogTime = DateTime.UtcNow,
                            UserId = userId ?? surveillanceBase.UserId,
                            LogMessage = "Surveillance error mail receivers isn't set in configuration",
                            MessageType = MessageType.Warning.ToString(),
                            Severity = (int)Severity.NotSet,
                            ActionName = ActionType.MailSend.ToString(),
                            MachineIP = surveillanceBase.MachineIP,
                            MachineName = surveillanceBase.MachineName,
                            UserAgent = surveillanceBase.UserAgent,
                            AppVersion = surveillanceBase.AppVersion
                        };
                        _context.Surveillance.Add(anotherLog);
                        _context.SaveChanges();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
        public void Error(HttpContext context = null, Guid? userId = null, string logMessage = null, Severity serverity = Severity.NotSet, object result = null, ActionType actionName = ActionType.NotSet, string entityName = null, object oldObject = null, object newObject = null, string moduleName = null, string submoduleName = null)
        {
            Log(context, userId, logMessage, MessageType.Error, serverity, result, actionName, entityName, oldObject, newObject, moduleName, submoduleName);
        }
        public void Debug(HttpContext context = null, Guid? userId = null, string logMessage = null, Severity serverity = Severity.NotSet, object result = null, ActionType actionName = ActionType.NotSet, string entityName = null, object oldObject = null, object newObject = null, string moduleName = null, string submoduleName = null)
        {
#if DEBUG
            Log(context, userId, logMessage, MessageType.Debug, serverity, result, actionName, entityName, oldObject, newObject, moduleName, submoduleName);
#endif
        }
        public void Info(HttpContext context = null, Guid? userId = null, ActionType actionType = ActionType.NotSet, string logMessage = null, string moduleName = null, string submoduleName = null)
        {
            Log(context, userId, logMessage, MessageType.Info, Severity.NotSet, null, actionType, null, null, null, moduleName, submoduleName);
        }
        public void Warning(HttpContext context = null, Guid? userId = null, ActionType actionType = ActionType.NotSet, string logMessage = null, string moduleName = null, string submoduleName = null)
        {
            Log(context, userId, logMessage, MessageType.Warning, Severity.NotSet, null, actionType, null, null, null, moduleName, submoduleName);
        }
        public void EntityAdded(HttpContext context = null, Guid? userId = null, string entityName = null, object newObject = null, string logMessage = null, string moduleName = null, string submoduleName = null)
        {
            Log(context, userId, logMessage, MessageType.Info, Severity.NotSet, null, ActionType.EntityAdd, entityName, null, newObject, moduleName, submoduleName);
        }
        public void EntityUpdated(HttpContext context = null, Guid? userId = null, string entityName = null, object oldObject = null, object newObject = null, string logMessage = null, string moduleName = null, string submoduleName = null)
        {
            Log(context, userId, logMessage, MessageType.Info, Severity.NotSet, null, ActionType.EntityUpdate, entityName, oldObject, newObject, moduleName, submoduleName);
        }
        public void EntityDeleted(HttpContext context = null, Guid? userId = null, string entityName = null, object oldObject = null, string logMessage = null, string moduleName = null, string submoduleName = null)
        {
            Log(context, userId, logMessage, MessageType.Info, Severity.NotSet, null, ActionType.EntityDelete, entityName, oldObject, null, moduleName, submoduleName);
        }
        public IEnumerable<SurveillanceModel> Get(SearchSurveillanceRequest request)
        {
            var logLifeTime = _configuration.SurveillanceLifeTimeMonths ?? 2;
            var top = request.MaxResultCount.HasValue ? $"TOP({ request.MaxResultCount})" : "";
            var parameters = new List<SqlParameter>();
            var filters = new List<string>();
            if (!request.MaxResultCount.HasValue)
            {
                filters.Add("CAST(LogTime AS DATE) >= @DateAfter");
                parameters.Add(new SqlParameter("@DateAfter", DateTime.UtcNow.AddMonths(-logLifeTime).Date));
            }
            var query = $@"SELECT {top} Surveillance.Id,LogTime,ActionName,MessageType,LogMessage,NULL AS Result,Severity,EntityName,NULL AS OldObject,NULL AS NewObject,ModuleName,SubModuleName,MachineName,MachineIP,UserAgent,AppVersion,UserId,
                        [User].Name AS UserName, [User].Email AS UserEmail, [User].CompanyId,Company.Name AS CompanyName, Company.Domain AS CompanyDomain FROM Surveillance LEFT JOIN [User] ON Surveillance.UserId = [User].Id LEFT JOIN Company ON [User].CompanyId=Company.Id ";

            if (request.LogTimeFrom.HasValue && request.LogTimeTo.HasValue)
            {
                filters.Add("(CAST(LogTime AS DATE) BETWEEN @StartDate AND @EndDate)");
                parameters.Add(new SqlParameter("@StartDate", request.LogTimeFrom.Value.Date));
                parameters.Add(new SqlParameter("@EndDate", request.LogTimeTo.Value.Date));
            }
            if (!string.IsNullOrWhiteSpace(request.MessageType))
            {
                filters.Add("MessageType = @MessageType");
                parameters.Add(new SqlParameter("@MessageType", request.MessageType));
            }
            if (!string.IsNullOrWhiteSpace(request.ActionName))
            {
                filters.Add("ActionName = @ActionName");
                parameters.Add(new SqlParameter("@ActionName", request.ActionName));
            }
            if (request.Severity.HasValue)
            {
                filters.Add("Severity = @Severity");
                parameters.Add(new SqlParameter("@Severity", request.Severity));
            }
            if (request.UserId.HasValue)
            {
                filters.Add("UserId = @UserId");
                parameters.Add(new SqlParameter("@UserId", request.UserId));
            }
            if (request.CompanyId.HasValue)
            {
                filters.Add("[User].CompanyId = @CompanyId");
                parameters.Add(new SqlParameter("@CompanyId", request.CompanyId));
            }
            if (filters.Count > 0)
            {
                query += " WHERE " + string.Join(" AND ", filters);
            }

            query += " ORDER BY LogTime DESC";
            var logs = _context.SurveillanceModels.FromSql(query, parameters.ToArray());
            return logs;
        }
        public SurveillanceModel Get(Guid id)
        {
            var query = $@"SELECT Surveillance.*, [User].Name AS UserName, [User].Email AS UserEmail, [User].CompanyId,Company.Name AS CompanyName, Company.Domain AS CompanyDomain FROM Surveillance LEFT JOIN [User] ON Surveillance.UserId = [User].Id LEFT JOIN Company ON [User].CompanyId=Company.Id ";
            query += " WHERE Surveillance.Id = @Id";
            var log = _context.SurveillanceModels.FromSql(query, new SqlParameter("@Id", id)).FirstOrDefaultAsync();
            return log.Result;
        }
        public bool CleanSurveillances()
        {
            try
            {
                var logLifeTime = _configuration.SurveillanceLifeTimeMonths ?? 2;
                var dateBefore = DateTime.UtcNow.AddMonths(-logLifeTime).Date;
                var parameters = new List<SqlParameter>() {
                    new SqlParameter("@DateBefore", dateBefore)
                    };
                var nRows = _context.Database.ExecuteSqlCommand("DELETE FROM Surveillance WHERE CAST(LogTime AS DATE) < @DateBefore", parameters);
                Log(null, null, $"{nRows} surveillance logs (before {dateBefore}) are cleaned successfully", MessageType.Info, Severity.NotSet, null, ActionType.Job);
            }
            catch (Exception ex)
            {
                Error(null, null, $"Surveillance clean failed. Error: {ex.Message}", Severity.High, null, ActionType.Job);
                return false;
            }
            return true;
        }
        private bool _disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            _disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        private string GetMsgBody(string template, params string[] parameters)
        {
            var basePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", HostingDirectory.EMAIL_TEMPLATES, "en-US");
            string messageBody = string.Empty;
            if (!string.IsNullOrEmpty(template))
            {
                using (StreamReader SourceReader = File.OpenText(basePath + Path.DirectorySeparatorChar.ToString() + template))
                {
                    try
                    {
                        var htmlMail = SourceReader.ReadToEnd();
                        if (htmlMail.Contains("__LOGO_URL__"))
                        {
                            var logoUrl = string.IsNullOrWhiteSpace(_configuration.LinkConfig.LogoUrl) ? "https://sharesimple.azurewebsites.net/emailtemplates/images/ss_logo.png" : _configuration.LinkConfig.LogoUrl;
                            htmlMail = htmlMail.Replace("__LOGO_URL__", logoUrl);
                        }
                        messageBody = string.Format(htmlMail, parameters);
                    }
                    catch (Exception ex)
                    {
                        var exp = ex.Message;
                    }
                }
            }
            return messageBody;
        }
    }
}
