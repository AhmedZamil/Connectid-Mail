using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShareSimple.Common;
using ShareSimple.Common.eConomic;
using ShareSimple.Common.Enums;
using ShareSimple.Common.WebCRM;
using ShareSimple.Filters;
using ShareSimple.Interface;
using ShareSimple.Models;
using ShareSimple.ViewModels;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Controllers
{
    [Produces("application/json")]
    [Route("api/company")]
    public class CompanyController : Controller
    {
        private readonly IHostingEnvironment _env;
        private readonly ICompanyRepository _companyRepository;
        private readonly IUserRepository _userRepository;
        private readonly IUserHistoryRepository _userHistoryRepository;
        private readonly IPackageRepository _packageRepository;
        private readonly IPriceCompanyRepository _priceCompanyRepository;
        private readonly IConsentRepository _consentRepository;
        private readonly EmailManager _emailManager;
        private readonly IWebCrmService _webCrmService;
        private readonly IEconomicService _economicService;
        private readonly IInvoiceRepository _invoiceRepository;
        private readonly IScheduledJobRepository _scheduledJobRepository;
        private readonly ShareSimpleConfiguration _configuration;
        private readonly ISurveillanceRepository _surveillanceRepository;
        private readonly ICompanyHistoryRepository _companyHistoryRepository;
        private string _copyRightYear = DateTime.UtcNow.ToString("yyyy");
        private string _logTimeFormat = "yyyy-MM-dd HH:mm:ss";
        public CompanyController(
            IHostingEnvironment env,
            ICompanyRepository companyRepository,
              IUserRepository userRepository,
              IUserHistoryRepository userHistoryRepository,
              IPackageRepository packageRepository,
              IPriceCompanyRepository priceCompanyRepository,
              IConsentRepository consentRepository,
              EmailManager emailManager,
              IWebCrmService webCrmService,
              IEconomicService economicService,
              IInvoiceRepository invoiceRepository,
              IScheduledJobRepository scheduledJobRepository,
              ShareSimpleConfiguration shareSimpleConfiguration,
              ISurveillanceRepository surveillanceRepository,
              ICompanyHistoryRepository companyHistoryRepository
            )
        {
            _env = env;
            _companyRepository = companyRepository;
            _userRepository = userRepository;
            _userHistoryRepository = userHistoryRepository;
            _packageRepository = packageRepository;
            _priceCompanyRepository = priceCompanyRepository;
            _consentRepository = consentRepository;
            _emailManager = emailManager;
            _webCrmService = webCrmService;
            _economicService = economicService;
            _invoiceRepository = invoiceRepository;
            _scheduledJobRepository = scheduledJobRepository;
            _configuration = shareSimpleConfiguration;
            _surveillanceRepository = surveillanceRepository;
            _companyHistoryRepository = companyHistoryRepository;
        }

        // GET: api/Company
        [HttpGet]
        public async Task<IEnumerable<Company>> Get()
        {
            return await _companyRepository.GetCompanies();
        }

        // GET: api/Company/5
        [HttpGet("{id}")]
        public async Task<Company> Get(Guid id)
        {
            return await _companyRepository.GetCompanyById(id);
        }

        // POST: api/Company
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Company company)
        {
            var dbuser = await _userRepository.GetUserByEmail(company.User.FirstOrDefault().Email);
            if (dbuser != null)
            {
                return BadRequest(new { Error = "Already Exist", Message = "The user is already exist." });
            }

            bool IsNewCompany = false;
            var contactPerson = new User();

            if (company.Id == Guid.Empty || company.Id == null)
            {
                company.Id = Guid.NewGuid();
                company.Created = DateTime.UtcNow;
                company.SubscriptionType = CompanyStatus.Trial;
                company.IsActive = true;
                company.AutoRenewal = true;
                IsNewCompany = true;
                contactPerson = company.User.FirstOrDefault();

                int trialWarningDays = _configuration.TrialWarningDays ?? 0;
                int trialDays = _configuration.TrialDays ?? 0;
                company.ScheduledJobs = new List<ScheduledJob>();
                company.ScheduledJobs.Add(new ScheduledJob { CreatedOn = DateTime.UtcNow, ExecuteOn = DateTime.UtcNow.AddDays(trialDays - trialWarningDays).Date, JobType = (int)JobTypes.Trial_Warning });
                company.ScheduledJobs.Add(new ScheduledJob { CreatedOn = DateTime.UtcNow, ExecuteOn = DateTime.UtcNow.AddDays(trialDays + 1).Date, JobType = (int)JobTypes.Upgrade_To_Paid_Subscription });
            }

            //Make the user list empty
            //company.User = new List<User>();
            var user = company.User.FirstOrDefault();
            user.Id = Guid.NewGuid();
            user.CreateDate = DateTime.UtcNow;
            user.UpdateDate = DateTime.UtcNow;
            user.ExtendedExpiresOn = user.ExpiresOn != null ? ((DateTime)user.ExpiresOn).AddDays(3) : DateTime.UtcNow.AddDays(3);
            user.ShareSimpleToken = Guid.NewGuid().ToString();

            company.IsOtpRequestdataView = true;
            company.Updated = DateTime.UtcNow;
            _companyRepository.InsertCompany(company);
            _companyHistoryRepository.InsertCompanyHistory(new CompanyHistory { CompanyId = company.Id, PrevStatus = string.Empty, StatusDate = company.Created, Status = CompanyStatus.Trial, Comment = "Created" });
            await _companyRepository.Save();
            _surveillanceRepository.EntityAdded(HttpContext, user?.Id, "Company", company, $"New company '{company?.Name}' added successfully");
            await _userRepository.Save();
            _surveillanceRepository.EntityAdded(HttpContext, user?.Id, "User", user, $"New user '{user?.Email}' added successfully");
            var userHistory = new UserHistory
            {
                UserId = user.Id,
                CompanyId = company.Id,
                ActivateDate = DateTime.UtcNow,
                IsActive = true
            };

            _userHistoryRepository.InsertUserHistory(userHistory);
            await _userHistoryRepository.Save();
            _surveillanceRepository.Info(HttpContext, null, ActionType.UserStatusChanged, $"User {user?.Email} status set to Active");
            var packegId = _configuration.OnDemandDataConfig.DefaultCompanyPackageId;
            var package = await _packageRepository.GetPackageById(packegId.Value);

            var priceCompany = new PriceCompany();
            priceCompany.Id = Guid.NewGuid();
            priceCompany.CompanyId = company.Id;
            priceCompany.TransactionPrice = package.TransactionPrice;
            priceCompany.Price = package.Price;
            priceCompany.PriceUnit = package.PriceUnit;
            priceCompany.Created = DateTime.UtcNow;
            priceCompany.IsActive = true;

            _priceCompanyRepository.InsertPriceCompany(priceCompany);
            await _priceCompanyRepository.Save();
            _surveillanceRepository.EntityAdded(HttpContext, user?.Id, "PriceCompany", priceCompany, $"Package is added for company '{company?.Name}'");
            // share data
            var consentId = _configuration.OnDemandDataConfig.SharedConsentId;
            var consent = await _consentRepository.GetConsentById(consentId.Value);

            var consentEntity = new Consent();
            consentEntity.Id = Guid.NewGuid();
            consentEntity.Name = consent.Name;
            consentEntity.ConsentText = string.Format(consent.ConsentText, company.Name, company.Name, String.IsNullOrEmpty(company.WebSite) ? "www.yourcompanyurl.com" : company.WebSite);
            consentEntity.Type = consent.Type;
            consentEntity.IsActive = true;
            consentEntity.CompanyId = company.Id;
            consentEntity.Created = DateTime.UtcNow;
            _consentRepository.InsertConsent(consentEntity);
            await _consentRepository.Save();
            _surveillanceRepository.Log(HttpContext, user?.Id, $"User '{user?.Email}' has given consent for {consent?.Type}", MessageType.Info, Severity.NotSet, null, ActionType.Consent, "Consent", null, consent);
            // request data
            consentId = _configuration.OnDemandDataConfig.RequestConsentId;
            consent = await _consentRepository.GetConsentById(consentId.Value);

            consentEntity = new Consent();
            consentEntity.Id = Guid.NewGuid();
            consentEntity.Name = consent.Name;
            consentEntity.ConsentText = string.Format(consent.ConsentText, company.Name, company.Name, String.IsNullOrEmpty(company.WebSite) ? "www.yourcompanyurl.com" : company.WebSite);
            consentEntity.Type = consent.Type;
            consentEntity.IsActive = true;
            consentEntity.CompanyId = company.Id;
            consentEntity.Created = DateTime.UtcNow;
            _consentRepository.InsertConsent(consentEntity);
            await _consentRepository.Save();
            _surveillanceRepository.Log(HttpContext, user?.Id, $"User '{user?.Email}' has given consent for {consent?.Type}", MessageType.Info, Severity.NotSet, null, ActionType.Consent, "Consent", null, consent);
            if (IsNewCompany)
            {
                var orgId = _webCrmService.AddOrganisation(company, HttpContext, user?.Id);
                if (orgId.HasValue)
                    company.CrmId = orgId.ToString();
                company.Updated = DateTime.UtcNow;
                _companyRepository.UpdateCompany(company);
                await _companyRepository.Save();
                if (orgId.HasValue && orgId.Value > 0)
                {
                    _webCrmService.AddPerson(orgId.Value, user, HttpContext);
                }
                var userLang = string.IsNullOrWhiteSpace(user.Language) ? "en-US" : user.Language;
                await _emailManager.Send(
                        _configuration.EmailConfig.SenderEmail,
                        _configuration.EmailConfig.ComplianceEmail,
                        MailTemplate.CUSTOMER_SIGNUP_NOTIFICATION_TO_COMPLIANCE_SUBJECT,
                        MailTemplate.CUSTOMER_SIGNUP_NOTIFICATION_TO_COMPLIANCE_BODY,
                        userLang,
                        HttpContext,
                        user?.Id,
                        "Customer signup",
                        company.Name,
                        contactPerson.Name,
                        contactPerson.Email,
                        DateTime.UtcNow.ToString(MailTemplate.DATE_FORMAT),
                        _copyRightYear,
                        _configuration.LinkConfig.ContactSupport);
                var trialPeriod = _configuration.TrialDays;
                var companyCreationDate = company.Created.Value.ToString("dd MMM yyyy", new System.Globalization.CultureInfo(userLang));
                var trialInfo = string.Format(
                    Utils.GetLanguageTranslation(
                        _env.WebRootPath, userLang, "Thank you for signing up. Your {0}-days free trial begins from {1}."),
                        trialPeriod, companyCreationDate);

                await _emailManager.Send(
                    _configuration.EmailConfig.SenderEmail,
                    user.Email,
                    Utils.GetLanguageTranslation(_env.WebRootPath, userLang, MailTemplate.USER_REGISTRATION_SUBJECT),
                    MailTemplate.USER_REGISTRATION_BODY,
                    userLang,
                    HttpContext,
                    user.Id,
                    "User registration",
                    user.Name, //0
                    trialInfo, //1
                    _configuration.LinkConfig.VideoTutorial,//2
                    _configuration.LinkConfig.OverViewPersonal //3
                    );

            }
            // Clear for json serialize circular nav properties
            var retCompany = (Company)company.Clone();
            retCompany.ScheduledJobs = new List<ScheduledJob>();
            retCompany.User = new List<User>();
            if (user != null)
            {
                retCompany.User.Add(new User
                {
                    Id = user.Id,
                    Name = user.Name,
                    Type = user.Type,
                    Email = user.Email,
                    CreatedBy = user.CreatedBy,
                    IsActive = user.IsActive,
                    IsDeleted = user.IsDeleted,
                    IsContactPerson = user.IsContactPerson,
                    IsSuperAdmin = user.IsSuperAdmin,
                    Language = user.Language,
                    ShareSimpleToken = user.ShareSimpleToken
                });
            }

            return Json(retCompany);
        }

        // PUT: api/Company/5
        [HttpPut("{id}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> Put(Guid id, [FromBody]Company company)
        {
            var dbCompany = await _companyRepository.GetCompanyById(id);
            if (dbCompany != null && company != null)
            {
                var prevStatus = dbCompany.SubscriptionType;
                dbCompany.Address = company.Address;
                dbCompany.AutoRenewal = company.AutoRenewal;
                dbCompany.BillingStartDate = company.BillingStartDate;
                dbCompany.City = company.City;
                dbCompany.Country = company.Country;
                dbCompany.CountryCode = company.CountryCode;
                dbCompany.Cvr = company.Cvr;
                dbCompany.Domain = company.Domain;
                dbCompany.IsActive = company.IsActive;
                dbCompany.IsOtpRequestdataView = company.IsOtpRequestdataView;
                dbCompany.LogoUrl = company.LogoUrl;
                dbCompany.Name = company.Name;
                dbCompany.PackageId = company.PackageId;
                dbCompany.Phone = company.Phone;
                dbCompany.PostalCode = company.PostalCode;
                dbCompany.WebSite = company.WebSite;
                #region eConomic customer update
                var companyUsers = await _userRepository.GetUsersByCompanyId(id);
                var contactUser = companyUsers.FirstOrDefault(x => x.IsContactPerson == true);
                var companyAge = ((TimeSpan)(DateTime.UtcNow - dbCompany.Created)).TotalDays;
                var trialPeriod = _configuration.TrialDays;
                if (companyAge > trialPeriod)
                {
                    var companyPackage = _priceCompanyRepository.GetPriceCompanyByCompanyId(company.Id).FirstOrDefault(x => x.IsActive == true);
                    var eCustomer = _economicService.SaveCustomer(company, companyPackage?.PriceUnit, contactUser, HttpContext);
                    if (eCustomer != null)
                    {
                        dbCompany.EconomicId = eCustomer.CustomerNumber;
                    }
                }
                #endregion
                #region WebCRM
                int? orgId = _webCrmService.UpdateOrganisation(company, HttpContext);
                if (orgId.HasValue)
                    dbCompany.CrmId = orgId.ToString();
                #endregion
                dbCompany.Updated = DateTime.UtcNow;
                if (company.IsActive != dbCompany.IsActive)
                {
                    dbCompany.SubscriptionType = company.IsActive != true ? CompanyStatus.Inactive : (companyAge > trialPeriod ? CompanyStatus.Paid : CompanyStatus.Trial);
                }
                _companyRepository.UpdateCompany(dbCompany);
                if (prevStatus != dbCompany.SubscriptionType)
                {
                    _companyHistoryRepository.InsertCompanyHistory(new CompanyHistory { CompanyId = dbCompany.Id, PrevStatus = prevStatus, StatusDate = dbCompany.Updated, Status = dbCompany.SubscriptionType, Comment = "Updated" });
                }
                await _companyRepository.Save();
                _surveillanceRepository.EntityUpdated(HttpContext, null, "Company", dbCompany, company, "Company information updated successfully");
            }
            return Ok("Update succesfully");
        }

        // PUT: api/Company/5
        [HttpPut("companyprice/{id}")]
        public async Task<IActionResult> UpdateCompanyInfo(Guid id, [FromBody]CompanyPackageModel companypackage)
        {
            var company = await _companyRepository.GetCompanyById(companypackage.Id);
            var companyOldValue = new CompanyModel(company);
            var shouldEmailForDeactivation = company.IsActive != companypackage.IsActive && companypackage.IsActive != true;
            company.Name = companypackage.Name;
            company.Domain = companypackage.Domain;
            company.Address = companypackage.Address;
            company.IsActive = companypackage.IsActive ?? true;
            company.PromotionCode = companypackage.PromotionCode;
            company.Updated = DateTime.UtcNow;
            #region eConomic customer update
            var companyUsers = await _userRepository.GetUsersByCompanyId(companypackage.Id);
            var contactUser = companyUsers.FirstOrDefault(x => x.IsContactPerson == true);
            var companyAge = ((TimeSpan)(DateTime.UtcNow - company.Created)).TotalDays;
            var trialPeriod = _configuration.TrialDays;
            if (companyAge > trialPeriod)
            {
                var companyPrice = _priceCompanyRepository.GetPriceCompanyByCompanyId(company.Id).FirstOrDefault(x => x.IsActive == true);
                var eCustomer = _economicService.SaveCustomer(company, companyPrice?.PriceUnit, contactUser, HttpContext);
                if (eCustomer != null)
                {
                    company.EconomicId = eCustomer.CustomerNumber;
                }
            }
            #endregion
            #region WebCRM
            int? orgId = _webCrmService.UpdateOrganisation(company, HttpContext);
            if (orgId.HasValue)
                company.CrmId = orgId.ToString();
            #endregion
            if (company.IsActive != companyOldValue.IsActive)
            {
                company.SubscriptionType = company.IsActive != true ? CompanyStatus.Inactive : (companyAge > trialPeriod ? CompanyStatus.Paid : CompanyStatus.Trial);
            }
            _companyRepository.UpdateCompany(company);
            if (companyOldValue.SubscriptionType != company.SubscriptionType)
            {
                _companyHistoryRepository.InsertCompanyHistory(new CompanyHistory { CompanyId = company.Id, PrevStatus = companyOldValue.SubscriptionType, StatusDate = company.Updated, Status = company.SubscriptionType, Comment = "Updated" });
            }
            await _companyRepository.Save();
            _surveillanceRepository.EntityUpdated(HttpContext, null, "Company", companyOldValue, company, "Company information updated successfully");

            var priceCompany = await _priceCompanyRepository.GetPriceCompanyById(companypackage.PackageId);
            priceCompany.TransactionPrice = companypackage.TransactionPrice;
            priceCompany.Price = companypackage.Price;
            priceCompany.PriceUnit = companypackage.PriceUnit;
            priceCompany.Updated = DateTime.UtcNow;
            _priceCompanyRepository.UpdatePriceCompany(priceCompany);
            await _priceCompanyRepository.Save();

            if (shouldEmailForDeactivation)
            {
                var contactUserLang = string.IsNullOrWhiteSpace(contactUser.Language) ? "en-US" : contactUser.Language;
                await _emailManager.Send(
                    _configuration.EmailConfig.SenderEmail,
                    contactUser.Email,
                    Utils.GetLanguageTranslation(_env.WebRootPath, contactUserLang, MailTemplate.COMPANY_INACTIVATION_CUSTOMER_SUBJECT),
                    MailTemplate.COMPANY_INACTIVATION_CUSTOMER_BODY,
                    contactUserLang,
                    HttpContext,
                    null,
                    "Company inactivation",
                    contactUser.Name,//0
                    DateTime.UtcNow.ToString(MailTemplate.DATE_LONG_FORMAT, new System.Globalization.CultureInfo(contactUserLang)),//1
                    _copyRightYear,//2
                    _configuration.LinkConfig.ContactSupport//3
                    );
                await _emailManager.Send(
                    _configuration.EmailConfig.SenderEmail,
                    _configuration.EmailConfig.ComplianceEmail,
                    MailTemplate.COMPANY_INACTIVATION_COMPLIANCE_SUBJECT,
                    MailTemplate.COMPANY_INACTIVATION_COMPLIANCE_BODY,
                    contactUserLang,
                    HttpContext,
                    null,
                    "Company inactivation notification to compliance",
                    company.Name,//0
                    contactUser.Name, //1
                    contactUser.Email, //2
                    company.Created.Value.ToString(MailTemplate.DATE_FORMAT), //3
                    DateTime.UtcNow.ToString(MailTemplate.DATE_FORMAT), //4
                    _copyRightYear,//5
                    _configuration.LinkConfig.ContactSupport //6
                    );
                _surveillanceRepository.EntityUpdated(HttpContext, null, "Company", new { company?.Id, IsActive = true }, new { company?.Id, IsActive = false }, $" Company '{company?.Name}' has been inactivated");
            }
            return Ok("Update succesfully");
        }
        [ServiceFilter(typeof(SchedulerJobAttribute))]
        [HttpGet("CheckStatus")]
        public async Task<ActionResult> CheckScheduleJobs()
        {
            var logText = "";
            var pendingJobs = await _scheduledJobRepository.GetAllPending();
            var jobCount = pendingJobs.Count();
            if (jobCount == 0)
            {
                logText += $"{DateTime.UtcNow.ToString(_logTimeFormat)}: No pending job found";
                _surveillanceRepository.Info(HttpContext, null, ActionType.Job, "No pending job found");
            }
            else
            {
                logText += $"{DateTime.UtcNow.ToString(_logTimeFormat)}: {jobCount} pending jobs found";
                _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"{jobCount} pending jobs found");
            }
            int trialEndingMailSent = 0;
            int upgradedToPaid = 0;
            int invoiceGenerated = 0;

            foreach (var job in pendingJobs)
            {
                string jobLog = "";
                switch (job.JobType)
                {
                    case (int)JobTypes.Trial_Warning:
                        jobLog = await ProcessTrialWarning(job);
                        trialEndingMailSent++;
                        break;
                    case (int)JobTypes.Upgrade_To_Paid_Subscription:
                        jobLog = await UpgradeToPaidSubscription(job);
                        upgradedToPaid++;
                        break;
                    case (int)JobTypes.Monthly_Billing:
                        jobLog = await ProcessMonthlyBill(job);
                        invoiceGenerated++;
                        break;
                    default:
                        break;
                }
                logText += $"{Environment.NewLine}{jobLog}";
            }
            return Json(new { TrialEndingMailSent = trialEndingMailSent, UpgradedToPaid = upgradedToPaid, InvoiceGenerated = invoiceGenerated, JobLog = logText });
        }

        [HttpGet("UnSubscribe/{id}")]
        public async Task<IActionResult> UnSubscribe(Guid id)
        {
            if (id == Guid.Empty)
            {
                return BadRequest(new { Error = "Null Parameter", Message = "Invalid Argument." });
            }

            var company = await _companyRepository.GetCompanyById(id);
            var companyOldValue = new CompanyModel(company);
            company.IsActive = false;
            company.AutoRenewal = false;
            company.IsDeleted = true;
            company.DeletedTime = DateTime.UtcNow;
            company.Updated = DateTime.UtcNow;
            company.SubscriptionType = CompanyStatus.Unsubscribed;
            _companyRepository.UpdateCompany(company);
            _companyHistoryRepository.InsertCompanyHistory(new CompanyHistory { CompanyId = company.Id, PrevStatus = companyOldValue.SubscriptionType, StatusDate = company.Updated, Status = CompanyStatus.Inactive, Comment = "UnSubscribe" });
            await _companyRepository.Save();
            _surveillanceRepository.EntityUpdated(HttpContext, null, "Company", companyOldValue, company, $"Company '{company?.Name}' is unsubscribed successfully");

            var scheduledJobs = await _scheduledJobRepository.GetByCompanyId(id);

            foreach (var job in scheduledJobs)
            {
                if (job.JobStatus == (int)JobStatus.Pending || job.JobStatus == (int)JobStatus.Failed)
                {
                    job.JobStatus = (int)JobStatus.Canceled;
                    job.ExecutedTime = DateTime.UtcNow;
                    job.ExecutionResult = "Cancelled due to unsubscribe";
                    _scheduledJobRepository.Update(job);
                }
            }
            await _scheduledJobRepository.Save();
            _surveillanceRepository.EntityUpdated(HttpContext, null, "ScheduledJob", null, scheduledJobs, $"Scheduled jobs of Company '{company?.Name}'' is cancelled due to unsubscribe");
            var companyUsers = await _userRepository.GetUsersByCompanyId(company.Id);
            //Send Termination email to clompliance
            var contactPerson = companyUsers.FirstOrDefault(x => x.IsContactPerson == true);
            await _emailManager.Send(
                _configuration.EmailConfig.SenderEmail,
                _configuration.EmailConfig.ComplianceEmail,
                MailTemplate.USER_TERMINATED_TRIAL_SUBSCRIPTION_SUBJECT,
                MailTemplate.USER_TERMINATED_TRIAL_SUBSCRIPTION_BODY,
                contactPerson.Language,
                HttpContext,
                null,
                null,
                company.Name, //0
                contactPerson?.Name, //1
                contactPerson?.Email, //2
                company.Created.Value.ToString(MailTemplate.DATE_FORMAT), //3
                _copyRightYear, //4
                _configuration.LinkConfig.ContactSupport //5
                );

            _webCrmService.UpdateOrganisationStatus(company, _configuration.WebCrmSettings.InactiveStatus, HttpContext);

            return Ok("Unsubscribed succesfully");
        }
        [HttpGet("ReSubscribe/{id}")]
        public async Task<IActionResult> ReSubscribe(Guid id)
        {
            if (id == Guid.Empty)
            {
                return BadRequest(new { Error = "Null Parameter", Message = "Invalid Argument." });
            }

            var company = await _companyRepository.GetCompanyById(id);
            var companyOldValue = new CompanyModel(company);
            company.IsActive = true;
            company.AutoRenewal = true;
            company.IsDeleted = false;
            company.DeletedTime = null;
            company.Updated = DateTime.UtcNow;
            var companyAge = ((TimeSpan)(DateTime.UtcNow - company.Created)).TotalDays;
            var trialPeriod = _configuration.TrialDays;
            company.SubscriptionType = company.IsActive != true ? CompanyStatus.Inactive : (companyAge > trialPeriod ? CompanyStatus.Paid : CompanyStatus.Trial);
            _companyRepository.UpdateCompany(company);
            _companyHistoryRepository.InsertCompanyHistory(new CompanyHistory { CompanyId = company.Id, PrevStatus = companyOldValue.SubscriptionType, StatusDate = company.Updated, Status = company.SubscriptionType, Comment = "ReSubscribe" });
            await _companyRepository.Save();
            _surveillanceRepository.EntityUpdated(HttpContext, null, "Company", companyOldValue, company, $"Company '{company?.Name}' is resubscribed/activated successfully");

            var scheduledJobs = await _scheduledJobRepository.GetByCompanyId(id);

            foreach (var job in scheduledJobs)
            {
                if (job.JobStatus == (int)JobStatus.Canceled)
                {
                    job.JobStatus = (int)JobStatus.Pending;
                    job.ExecutedTime = null;
                    job.ExecutionResult = "Pending again due to re-subscribe";
                    _scheduledJobRepository.Update(job);
                }
            }
            await _scheduledJobRepository.Save();
            _surveillanceRepository.EntityUpdated(HttpContext, null, "ScheduledJob", null, scheduledJobs, $"Scheduled jobs of Company '{company?.Name}'' is made pending due to re-subscribe");
            /*
            var companyUsers = await _userRepository.GetUsersByCompanyId(company.Id);
            //Send Termination email to clompliance
            var contactPerson = companyUsers.FirstOrDefault(x => x.IsContactPerson == true);
            await _emailManager.Send(
                _configuration.EmailConfig.SenderEmail,
                _configuration.EmailConfig.ComplianceEmail,
                MailTemplate.USER_TERMINATED_TRIAL_SUBSCRIPTION_SUBJECT,
                MailTemplate.USER_TERMINATED_TRIAL_SUBSCRIPTION_BODY,
                contactPerson.Language,
                HttpContext,
                null,
                null,
                company.Name, //0
                contactPerson?.Name, //1
                contactPerson?.Email, //2
                company.Created.Value.ToString(MailTemplate.DATE_FORMAT), //3
                _copyRightYear, //4
                _configuration.ContactSupport //5
                );
            */
            _webCrmService.UpdateOrganisationStatus(company, _configuration.WebCrmSettings.ActiveStatus, HttpContext);

            return Ok("Re-subscribed succesfully");
        }
        // DELETE: api/Company/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var dbCompany = await _companyRepository.GetCompanyById(id);
            if (dbCompany != null)
            {
                _companyRepository.DeleteCompany(id);
                _companyHistoryRepository.InsertCompanyHistory(new CompanyHistory { CompanyId = dbCompany.Id, PrevStatus = dbCompany.SubscriptionType, StatusDate = DateTime.UtcNow, Status = CompanyStatus.Inactive, Comment = "Delete" });
                await _companyRepository.Save();
                _surveillanceRepository.EntityDeleted(HttpContext, null, "Company", dbCompany, $"Company '{dbCompany.Name}' deleted successfully");
            }
            return Ok("Deleted succesfully");
        }

        // POST: api/file
        [HttpPost, Route("logo/{id}")]
        public async Task<IActionResult> UploadLogo(IFormFile file, Guid id)
        {
            var company = await _companyRepository.GetCompanyById(id);
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", HostingDirectory.COMPANY_LOGO, id.ToString());

            var filePath = Path.Combine(path, file.FileName);

            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            else
            {
                try
                {
                    Directory.Delete(filePath);
                }
                catch (Exception ex)
                {

                }
                Directory.CreateDirectory(path);
            }

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }
            var oldLogo = company.LogoUrl;
            company.LogoUrl = $"/{HostingDirectory.COMPANY_LOGO}/{id.ToString()}/{file.FileName}";
            _companyRepository.UpdateCompany(company);
            await _companyRepository.Save();
            _surveillanceRepository.EntityUpdated(HttpContext, null, "Company", new { company?.Id, LogoUrl = oldLogo }, new { company?.Id, company?.LogoUrl }, $"Logo of company '{company?.Name}' changed successfully");
            return Json(company);
        }

        [HttpPost(), Route("senddemanddata/{contactname}/{contactemail}/{integrationtype}/{emailfrom}")]
        public async Task<IActionResult> SendDemandData([FromBody]Company data, string contactname, string contactemail, string integrationtype, string emailfrom)
        {

            var user = await _userRepository.GetUserByEmail(contactemail);
            var language = user == null ? "en-US" : user.Language;
            await _emailManager.Send(
                emailfrom,
                _configuration.EmailConfig.OnDemandEmail,
                string.Format(MailTemplate.ONDEMAND_INTEGRATION_SUBJECT, integrationtype),
                MailTemplate.ONDEMAND_INTEGRATION_BODY,
                language,
                new EmailModel
                {
                    companyname = data.Name,
                    phone = data.Phone,
                    username = contactname,
                    useremail = contactemail,
                    Integrationname = integrationtype
                },
                HttpContext
                );
            return Ok("Mail sent successfully");
        }

        [HttpPost, Route("migrate")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<ActionResult> MigrateCustomer(MigrationModel migrationModel)
        {
            var company = await _companyRepository.GetCompanyById(migrationModel.Id);
            if (company != null)
            {
                var billingDate = DateTime.UtcNow;
                DateTime executionDate;
                if (migrationModel.Invoiced.HasValue)
                {
                    billingDate = migrationModel.Invoiced.Value.AddYears(1);
                }
                else
                {
                    billingDate = company.Created.Value;
                }
                if (billingDate.Day >= 28)
                {
                    executionDate = new DateTime(billingDate.Year, billingDate.Month + 1, 28);
                }
                else
                {
                    executionDate = new DateTime(billingDate.Year, billingDate.Month, 28);
                }
                if (migrationModel.Invoiced.HasValue) // temporarily skip invoice scheduling if invoice date isn't set yet. Later it should be created after 1 year of creation
                {
                    company.ScheduledJobs.Add(new ScheduledJob { CreatedOn = DateTime.UtcNow, ExecuteOn = executionDate, JobType = (int)JobTypes.Monthly_Billing });
                }
                //Add to WebCrm
                try
                {
                    var orgId = _webCrmService.AddOrganisation(company, HttpContext);
                    if (orgId.HasValue)
                    {
                        company.CrmId = orgId.ToString();
                        company.Updated = DateTime.UtcNow;
                        _companyRepository.UpdateCompany(company);
                        await _companyRepository.Save();
                        var companyUsers = await _userRepository.GetUsersByCompanyId(company.Id);
                        foreach (var user in companyUsers)
                        {
                            _webCrmService.AddPerson(orgId.Value, user, HttpContext);
                        }
                    }
                }
                catch (Exception)
                {
                }

                //Add to Economic
                try
                {
                    var companyAge = ((TimeSpan)(DateTime.UtcNow - company.Created)).TotalDays;
                    var trialPeriod = _configuration.TrialDays;
                    if (companyAge > trialPeriod)
                    {
                        var users = await _userRepository.GetUsersByCompanyId(company.Id);
                        var contactPerson = users.FirstOrDefault(x => x.IsContactPerson == true);
                        var companyPackage = _priceCompanyRepository.GetPriceCompanyByCompanyId(company.Id).FirstOrDefault(x => x.IsActive == true);
                        var customer = _economicService.SaveCustomer(company, companyPackage?.PriceUnit, contactPerson, HttpContext);
                        if (customer != null)
                        {
                            company.EconomicId = customer.CustomerNumber;
                            company.Updated = DateTime.UtcNow;
                            _companyRepository.UpdateCompany(company);
                            await _companyRepository.Save();
                        }
                    }
                }
                catch (Exception)
                {
                }
                return Ok("Migrated succesfully");
            }
            else
            {
                return BadRequest(new { Error = "Null Parameter", Message = "Invalid Argument." });
            }
        }

        private async Task<string> ProcessTrialWarning(ScheduledJob job)
        {
            var logText = $"{DateTime.UtcNow.ToString(_logTimeFormat)}: Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} started";
            _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} started");
            job.JobStatus = (int)JobStatus.Done;
            var jobResult = "";
            try
            {
                var company = await _companyRepository.GetCompanyById(job.CompanyId);
                var companyUsers = await _userRepository.GetUsersByCompanyId(job.CompanyId);
                var contactUser = companyUsers.FirstOrDefault(x => x.IsContactPerson == true);
                var companyPackage = _priceCompanyRepository.GetPriceCompanyByCompanyId(job.CompanyId).FirstOrDefault(x => x.IsActive == true);
                try
                {
                    var contactUserLang = string.IsNullOrWhiteSpace(contactUser.Language) ? "en-US" : contactUser.Language;
                    await _emailManager.Send(
                        _configuration.EmailConfig.SenderEmail,
                        contactUser.Email,
                        Utils.GetLanguageTranslation(_env.WebRootPath, contactUserLang, MailTemplate.TRIAL_ENDING_EMAIL_TO_CUSTOMER_SUBJECT),
                        MailTemplate.TRIAL_ENDING_EMAIL_TO_CUSTOMER_BODY,
                        contactUserLang,
                        HttpContext,
                        null,
                        null,
                        contactUser.Name,//0
                        companyUsers.Count().ToString(),//1
                        $"({companyPackage.Price.Value.ToString("0.00", new System.Globalization.CultureInfo(contactUserLang))} {companyPackage.PriceUnit})",//2
                        MailTemplate.CONTACT_NUMBER,//3
                        _copyRightYear,//4
                        $"{_configuration.LinkConfig.BaseUrl}deleteCustomer/{job.CompanyId}", //5
                        _configuration.LinkConfig.ContactSupport, //6
                        _configuration.TrialWarningDays?.ToString() ?? "3" //7
                        );
                    logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Trial ending email has been sent successfully to {company?.Name} at {contactUser.Email}";
                    _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Trial ending email has been sent successfully to {company?.Name} at {contactUser?.Email}");

                }
                catch (WebCrmException ex)
                {
                    jobResult += $"WebCRM error: {ex.Message}.";
                    logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Trial ending email has failed to send to {company?.Name} at {contactUser?.Email}. WebCRM error: {ex.Message}";
                    _surveillanceRepository.Error(HttpContext, null, $"Trial ending email has failed to send to {company?.Name} at {contactUser?.Email}. WebCRM error: {ex.Message}", Severity.Medium, ex, ActionType.Job);
                }
                catch (Exception ex)
                {
                    logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Trial ending email has failed to send to {company?.Name} at {contactUser.Email}. Error: {ex.Message}";
                    _surveillanceRepository.Error(HttpContext, null, $"Trial ending email has failed to send to {company?.Name} at {contactUser?.Email}. Error: {ex.Message}", Severity.Medium, ex, ActionType.Job);
                }
                job.ExecutionResult = !string.IsNullOrWhiteSpace(jobResult) ? jobResult : "Successfully executed";
                _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} Successfully executed");
            }
            catch (Exception ex)
            {
                job.JobStatus = (int)JobStatus.Failed;
                job.ExecutionResult = ex.Message;
                logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Job has failed to execute for {job?.Company?.Name}. Error: {ex.Message}";
                _surveillanceRepository.Error(HttpContext, null, $"Job has failed to execute for {job?.Company?.Name}. Error: {ex.Message}", Severity.Medium, ex, ActionType.Job);
            }
            job.ExecutedTime = DateTime.UtcNow;
            _scheduledJobRepository.Update(job);
            await _scheduledJobRepository.Save();
            if (job.JobStatus == (int)JobStatus.Done)
            {
                logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} successfully ended";
                _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} successfully ended");
            }
            return logText;
        }

        private async Task<string> UpgradeToPaidSubscription(ScheduledJob job)
        {
            var logText = $"{DateTime.UtcNow.ToString(_logTimeFormat)}: Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} started";
            _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} started");
            job.JobStatus = (int)JobStatus.Done;
            var jobResult = "";
            try
            {
                var company = await _companyRepository.GetCompanyById(job.CompanyId);
                if (company.AutoRenewal.HasValue && company.AutoRenewal.Value == true)
                {
                    company.Updated = DateTime.UtcNow;
                    company.BillingStartDate = job.ExecuteOn;
                    company.SubscriptionType = CompanyStatus.Paid;
                    _companyRepository.UpdateCompany(company);
                    _companyHistoryRepository.InsertCompanyHistory(new CompanyHistory { CompanyId = company.Id, PrevStatus = company.SubscriptionType, StatusDate = company.Updated, Status = CompanyStatus.Paid, Comment = "Upgrade to paid" });
                    await _companyRepository.Save();

                    var companyPackage = _priceCompanyRepository.GetPriceCompanyByCompanyId(job.CompanyId).FirstOrDefault(x => x.IsActive == true);
                    companyPackage.Updated = DateTime.UtcNow;
                    companyPackage.EndDate = DateTime.UtcNow.AddYears(1);
                    _priceCompanyRepository.UpdatePriceCompany(companyPackage);
                    await _priceCompanyRepository.Save();

                    //mail to Customer
                    var companyUsers = await _userRepository.GetUsersByCompanyId(job.CompanyId);
                    var contactUser = companyUsers.FirstOrDefault(x => x.IsContactPerson == true);
                    try
                    {
                        var contactUserLang = string.IsNullOrWhiteSpace(contactUser.Language) ? "en-US" : contactUser.Language;
                        await _emailManager.Send(
                            _configuration.EmailConfig.SenderEmail,
                            contactUser.Email,
                            Utils.GetLanguageTranslation(_env.WebRootPath, contactUserLang, MailTemplate.WELCOME_USER_FROM_TRIAL_TO_PAID_SUBJECT),
                            MailTemplate.WELCOME_USER_FROM_TRIAL_TO_PAID_BODY,
                            contactUserLang,
                            HttpContext,
                            null,
                            null,
                            contactUser.Name, //0
                            companyUsers.Count().ToString(), //1
                            $"({companyPackage.Price.Value.ToString("0.00", new System.Globalization.CultureInfo(contactUserLang))} {companyPackage.PriceUnit})", //2
                            MailTemplate.CONTACT_NUMBER, //3
                            job.ExecuteOn.ToString("yyyy"), //4
                            _configuration.LinkConfig.ContactSupport //5
                            );
                        logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Wecome email has been sent successfully to {company?.Name} at {contactUser.Email}";
                        _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Wecome email has been sent successfully to {company?.Name} at {contactUser?.Email}");
                        //mailtocompliance
                        await _emailManager.Send(
                            _configuration.EmailConfig.SenderEmail,
                            _configuration.EmailConfig.ComplianceEmail,
                            MailTemplate.NOTIFY_COMPLIANCE_FROM_TRIAL_TO_PAID_SUBJECT,
                            MailTemplate.NOTIFY_COMPLIANCE_FROM_TRIAL_TO_PAID_BODY,
                            contactUser.Language,
                            HttpContext,
                            null,
                            null,
                            company.Name, //0
                            contactUser.Name, //1
                            contactUser.Email, //2
                            company.Created.Value.ToString(MailTemplate.DATE_FORMAT), //3
                            company.Updated.Value.ToString(MailTemplate.DATE_FORMAT), //4
                            _copyRightYear, //5
                            _configuration.LinkConfig.ContactSupport //6
                            );
                        logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Compliance email has been sent successfully for {company?.Name}";
                        _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Compliance email has been sent successfully for {company?.Name}");
                        _webCrmService.UpdateOrganisationStatus(company, _configuration.WebCrmSettings.ActiveStatus, HttpContext);
                    }
                    catch (Exception ex)
                    {
                        logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Welcome email has failed to send to {company?.Name} at {contactUser.Email}. Error: {ex.Message}";
                        _surveillanceRepository.Error(HttpContext, null, $"Welcome email has failed to send to {company?.Name} at {contactUser?.Email}. Error: {ex.Message}", Severity.Medium, ex, ActionType.Job);
                    }
                    #region eConomic customer add and invoice genrate
                    try
                    {
                        var eCustomer = _economicService.SaveCustomer(company, companyPackage?.PriceUnit, contactUser, HttpContext);
                        if (eCustomer != null)
                        {
                            company.EconomicId = eCustomer.CustomerNumber;
                            company.Updated = DateTime.UtcNow;
                            await _companyRepository.Save();
                            _surveillanceRepository.EntityUpdated(HttpContext, null, "Company", null, new { company?.Id, EconomicId = eCustomer?.CustomerNumber }, $"Company is updated with eConomic info");
                        }
                        if (company.EconomicId.HasValue)
                        {
                            var unitPrice = (companyPackage?.Price ?? 3) * 12;
                            var noOfUsers = companyUsers.Count(x => x.IsActive == true);
                            Common.eConomic.Invoice eInvoice = null;
                            if (noOfUsers > 0)
                            {
                                eInvoice = _economicService.GenerateInvoice(company, job.ExecuteOn, unitPrice, companyPackage?.PriceUnit, noOfUsers, HttpContext);
                            }
                            var invoice = new Models.Invoice()
                            {
                                Id = Guid.NewGuid(),
                                CompanyId = company.Id,
                                EconomicId = eInvoice?.BookedInvoiceNumber,
                                UserCount = noOfUsers,
                                InvoiceAmount = eInvoice?.NetAmount ?? 0,
                                InvoiceDate = eInvoice?.Date?.ToDate() ?? job.ExecuteOn.Date,
                                InvoiceRate = unitPrice,
                                IsPaid = false,
                                IsSent = false
                            };
                            _invoiceRepository.InsertInvoice(invoice);
                            await _invoiceRepository.Save();
                            if (noOfUsers == 0)
                            {
                                logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: User count is zero, so no invoice is triggered for {company?.Name}";
                                _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"User count is zero, so no invoice is triggered for {company?.Name}");
                            }
                            else
                            {
                                logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: An invoice is triggered for {company?.Name} for {noOfUsers} users";
                                _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"An invoice is triggered for {company?.Name} for {noOfUsers} users");
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        jobResult += $"eConomic error: {ex.Message}.";
                        logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: An invoice generation failed for {company?.Name}. eConomic error: {ex.Message}";
                        _surveillanceRepository.Error(HttpContext, null, $"An invoice generation failed for {company?.Name}. eConomic error: {ex.Message}", Severity.Medium, ex, ActionType.Job);
                    }
                    #endregion

                    //Create new schedule for billing
                    var now = DateTime.UtcNow;
                    var monthlyBillingDate = _configuration.MonthlyBillingDate.Value;
                    var billingDate = now.Day > monthlyBillingDate ? new DateTime(now.AddMonths(1).Year, now.AddMonths(1).Month, monthlyBillingDate) : new DateTime(now.Year, now.Month, monthlyBillingDate);
                    var companyJobs = await _scheduledJobRepository.GetByCompanyId(job.CompanyId);
                    if (companyJobs.Count(x => x.ExecuteOn.Date == billingDate.Date) == 0)
                    {
                        var scheduledJob = new ScheduledJob { CompanyId = job.CompanyId, JobType = (int)JobTypes.Monthly_Billing, CreatedOn = DateTime.UtcNow, ExecuteOn = billingDate };
                        _scheduledJobRepository.Insert(scheduledJob);
                        await _scheduledJobRepository.Save();
                        logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Another job {JobTypes.Monthly_Billing.ToString()} is created for {company?.Name}, will be executed on {scheduledJob?.ExecuteOn.ToString(_logTimeFormat)}";
                        _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Another job {JobTypes.Monthly_Billing.ToString()} is created for {company?.Name}, will be executed on {scheduledJob?.ExecuteOn.ToString(_logTimeFormat)}");
                    }
                }
                job.ExecutionResult = !string.IsNullOrWhiteSpace(jobResult) ? jobResult : "Successfully executed";
                _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} Successfully executed");
            }
            catch (Exception ex)
            {
                job.JobStatus = (int)JobStatus.Failed;
                job.ExecutionResult = $"{jobResult} {ex.Message}";
                logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Job has failed to execute for {job?.Company?.Name}. Error: {ex.Message}";
                _surveillanceRepository.Error(HttpContext, null, $"Job has failed to execute for {job?.Company?.Name}. Error: {ex.Message}", Severity.Medium, ex, ActionType.Job);
            }
            job.ExecutedTime = DateTime.UtcNow;
            _scheduledJobRepository.Update(job);
            await _scheduledJobRepository.Save();
            if (job.JobStatus == (int)JobStatus.Done)
            {
                logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} successfully ended";
                _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} successfully ended");
            }
            return logText;
        }

        private async Task<string> ProcessMonthlyBill(ScheduledJob job)
        {
            var logText = $"{DateTime.UtcNow.ToString(_logTimeFormat)}: Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} started";
            _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} started");
            job.JobStatus = (int)JobStatus.Done;
            try
            {
                var company = await _companyRepository.GetCompanyById(job.CompanyId);
                if (!string.IsNullOrWhiteSpace(_configuration.EconomicSettings.AppSecretToken))
                {
                    var companyInvoices = await _invoiceRepository.GetCompanyInvoices(job.CompanyId);
                    var companyPackage = _priceCompanyRepository.GetPriceCompanyByCompanyId(job.CompanyId).FirstOrDefault(x => x.IsActive == true);
                    DateTime? invoiceFromDate = null;
                    if (companyInvoices.Count() > 0)
                        invoiceFromDate = companyInvoices.Max(x => x.InvoiceDate);
                    if (!invoiceFromDate.HasValue)
                    {
                        invoiceFromDate = job.ExecuteOn.AddMonths(-1);
                    }
                    DateTime invoiceToDate = job.ExecuteOn;
                    var companyUsers = await _userRepository.GetUsersByCompanyId(job.CompanyId);
                    var noOfNewUsers = companyUsers.Count(x => x.IsActive == true && x.CreateDate.Value > invoiceFromDate && x.CreateDate.Value <= invoiceToDate);
                    if (noOfNewUsers == 0)
                    {
                        logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: No new user found for {company?.Name} between {invoiceFromDate?.ToString(_logTimeFormat)} and {invoiceToDate.ToString(_logTimeFormat)}";
                        _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"No new user found for {company?.Name} between {invoiceFromDate?.ToString(_logTimeFormat)} and {invoiceToDate.ToString(_logTimeFormat)}");
                    }
                    else
                    {
                        logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: {noOfNewUsers} new user(s) found for {company?.Name} between {invoiceFromDate?.ToString(_logTimeFormat)} and {invoiceToDate.ToString(_logTimeFormat)}";
                        _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"{noOfNewUsers} new user(s) found for {company?.Name} between {invoiceFromDate?.ToString(_logTimeFormat)} and {invoiceToDate.ToString(_logTimeFormat)}");
                    }
                    invoiceToDate = invoiceToDate.AddYears(-1).InYear(1900);
                    invoiceFromDate = invoiceToDate.AddMonths(-1).InYear(1900);
                    var lastYearExecutionDate = job.ExecuteOn.AddYears(-1);
                    var noOfAniversaryUsers = companyUsers.Count(x => x.IsActive == true && x.CreateDate.Value < lastYearExecutionDate && x.CreateDate.Value.InYear(1900) > invoiceFromDate && x.CreateDate.Value.InYear(1900) <= invoiceToDate);
                    if (noOfAniversaryUsers == 0)
                    {
                        logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: No aniversary user found for {company?.Name}, user creattion date between {invoiceFromDate?.ToString("dd MMM yyyy")} and {invoiceToDate.ToString("dd MMM yyyy")}";
                        _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"No aniversary user found for {company?.Name}, user creattion date between {invoiceFromDate?.ToString("dd MMM yyyy")} and {invoiceToDate.ToString("dd MMM yyyy")}");
                    }
                    else
                    {
                        logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: {noOfAniversaryUsers} aniversary user(s) found for {company?.Name}, user creattion date between {invoiceFromDate?.ToString("dd MMM yyyy")} and {invoiceToDate.ToString("dd MMM yyyy")}";
                        _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"{noOfAniversaryUsers} aniversary user(s) found for {company?.Name}, user creattion date between {invoiceFromDate?.ToString("dd MMM yyyy")} and {invoiceToDate.ToString("dd MMM yyyy")}");
                    }
                    var noOfUsers = noOfNewUsers + noOfAniversaryUsers;
                    var unitPrice = (companyPackage?.Price ?? 3) * 12;
                    Common.eConomic.Invoice eInvoice = null;
                    if (noOfUsers > 0)
                    {
                        eInvoice = _economicService.GenerateInvoice(company, job.ExecuteOn, unitPrice, companyPackage?.PriceUnit, noOfUsers, HttpContext);
                    }
                    var invoice = new Models.Invoice()
                    {
                        Id = Guid.NewGuid(),
                        CompanyId = job.CompanyId,
                        EconomicId = eInvoice?.BookedInvoiceNumber,
                        UserCount = noOfUsers,
                        InvoiceAmount = eInvoice?.NetAmount ?? 0,
                        InvoiceDate = eInvoice?.Date?.ToDate() ?? job.ExecuteOn.Date,
                        InvoiceRate = unitPrice,
                        IsPaid = false,
                        IsSent = false
                    };
                    _invoiceRepository.InsertInvoice(invoice);
                    await _invoiceRepository.Save();
                    if (noOfUsers == 0)
                    {
                        logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: User count is zero, so no invoice is triggered for {company?.Name}";
                        _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"User count is zero, so no invoice is triggered for {company?.Name}");
                    }
                    else
                    {
                        logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: An invoice is triggered for {company?.Name} for {noOfUsers} users";
                        _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"An invoice is triggered for {company?.Name} for {noOfUsers} users");
                    }
                    //Create new schedule for next billing
                    var billingDate = job.ExecuteOn.AddMonths(1).Date;
                    var scheduledJob = new ScheduledJob { CompanyId = job.CompanyId, JobType = (int)JobTypes.Monthly_Billing, CreatedOn = DateTime.UtcNow, ExecuteOn = billingDate };
                    _scheduledJobRepository.Insert(scheduledJob);
                    await _scheduledJobRepository.Save();
                    logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Another job {JobTypes.Monthly_Billing.ToString()} is created for {company?.Name}, will be executed on {scheduledJob?.ExecuteOn.ToString(_logTimeFormat)}";
                    _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Another job {JobTypes.Monthly_Billing.ToString()} is created for {company?.Name}, will be executed on {scheduledJob?.ExecuteOn.ToString(_logTimeFormat)}");
                    job.ExecutionResult = "Successfully executed";
                    _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} Successfully executed");
                }
                else
                {
                    _surveillanceRepository.Warning(HttpContext, null, ActionType.eConomic, "eConomic settings isn't found.");
                }
            }
            catch (Exception ex)
            {
                job.JobStatus = (int)JobStatus.Failed;
                job.ExecutionResult = ex.Message;
                logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Job has failed to execute for {job?.Company?.Name}. Error: {ex.Message}";
                _surveillanceRepository.Error(HttpContext, null, $"Job has failed to execute for {job?.Company?.Name}. Error: {ex.Message}", Severity.Medium, ex, ActionType.Job);
            }
            job.ExecutedTime = DateTime.UtcNow;
            _scheduledJobRepository.Update(job);
            await _scheduledJobRepository.Save();
            if (job.JobStatus == (int)JobStatus.Done)
            {
                logText += $"{Environment.NewLine}{DateTime.UtcNow.ToString(_logTimeFormat)}: Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} successfully ended";
                _surveillanceRepository.Info(HttpContext, null, ActionType.Job, $"Job {((JobTypes)job.JobType).ToString()} for {job.Company?.Name} successfully ended");
            }
            return logText;
        }
    }
}
