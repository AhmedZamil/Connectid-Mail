using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using ShareSimple.Common;
using ShareSimple.Common.Enums;
using ShareSimple.Common.WebCRM;
using ShareSimple.Filters;
using ShareSimple.Interface;
using ShareSimple.Models;
using ShareSimple.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ShareSimple.Controllers
{
    [Produces("application/json")]
    [Route("api/user")]
    //[ServiceFilter(typeof(AuthAttribute))]
    public class UserController : Controller
    {
        private readonly IHostingEnvironment _env;
        private readonly EmailManager _emailManager;
        private readonly ShareSimpleConfiguration _configuration;
        private readonly IUserRepository _userRepository;
        private readonly IUserHistoryRepository _userHistoryRepository;
        private readonly ICompanyRepository _companyRepository;
        private readonly ISurveillanceRepository _surveillanceRepository;
        private readonly IWebCrmService _webCrmService;
        public UserController(
            IHostingEnvironment env,
            IUserRepository userRepository,
            IUserHistoryRepository userHistoryRepository,
            ICompanyRepository companyRepository,
            EmailManager emailManager,
            IMsgBuilder msgBuilder,
            ShareSimpleConfiguration configuration,
            ISurveillanceRepository surveillanceRepository,
            IWebCrmService webCrmService)
        {
            _env = env;
            _emailManager = emailManager;
            _configuration = configuration;
            _userRepository = userRepository;
            _userHistoryRepository = userHistoryRepository;
            _companyRepository = companyRepository;
            _surveillanceRepository = surveillanceRepository;
            _webCrmService = webCrmService;
        }

        // GET: api/User
        [HttpGet]
        public async Task<IEnumerable<User>> Get()
        {
            return await _userRepository.GetUsers();
        }

        //[ServiceFilter(typeof(auth))]
        [HttpGet, Route("company/{id}")]
        public async Task<IEnumerable<User>> GetByCompany(Guid id, bool? onlyActive = false)
        {
            return await _userRepository.GetUsersByCompanyId(id, onlyActive);
        }

        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<User> Get(Guid id)
        {
            return await _userRepository.GetUserById(id);
        }

        // GET: api/user/email
        //[ServiceFilter(typeof(AuthAttribute))]
        [HttpGet(), Route("email/{email}")]
        public async Task<IActionResult> GetByEmail(string email)
        {
            if (email == string.Empty)
                return Content("Invalid email");
            string message = "";
            UserModel userVm;
            var user = await _userRepository.GetUserByEmail(email);
            if (user == null)
            {
                message = $"User email {email} isn't found";
                userVm = new UserModel();
                var address = new MailAddress(email);
                var domain = address.Host;
                var company = await _companyRepository.GetCompanyByDomain(domain);
                if (company != null)
                {
                    userVm.Company = new CompanyModel(company);
                    message += $" but his domain {domain} is found in company {company.Name}.";
                }
                else
                {
                    message += $" and his domain {domain} isn't found also.";
                }
            }
            else
            {
                message = $"User email {email} is found with name {user.Name}";
                userVm = new UserModel(user);
                var company = await _companyRepository.GetCompanyById((Guid)user.CompanyId);
                if (company != null)
                {
                    message += $" in company {company.Name}.";
                    userVm.Company = new CompanyModel(company);
                }
                else
                {
                    message += $" but not found his company";
                }
            }
            _surveillanceRepository.Info(HttpContext, user?.Id, ActionType.EntryAddIn, message);
            return Json(userVm);
        }

        // GET: api/user/email
        [HttpGet(), Route("Id/{Id}")]
        public async Task<IActionResult> GetById(Guid Id)
        {
            if (Id == null)
                return Content("Invalid user id");
            UserModel userVm;
            var user = await _userRepository.GetUserById(Id);
            if (user == null)
            {
                return Content("Invalid user id");
            }
            else
            {
                userVm = new UserModel(user);
                userVm.ExtendedLifeTimeToken = true;
                var company = await _companyRepository.GetCompanyById((Guid)user.CompanyId);
                if (company != null)
                {
                    userVm.Company = new CompanyModel(company);
                }
            }

            return Json(userVm);
        }
        // POST: api/User
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]User user)
        {
            if (user.Id == Guid.Empty || user.Id == null)
                user.Id = Guid.NewGuid();

            var dbuser = await _userRepository.GetUserByEmail(user.Email);
            if (dbuser != null)
            {
                return Json(new { isExists = true, message = "The user is already exist" });
            }

            user.CreateDate = DateTime.UtcNow;
            user.UpdateDate = DateTime.UtcNow;
            user.ExtendedExpiresOn = user.ExpiresOn != null ? ((DateTime)user.ExpiresOn).AddDays(3) : DateTime.UtcNow.AddDays(3);
            user.ShareSimpleToken = Guid.NewGuid().ToString();
            _userRepository.InsertUser(user);
            await _userRepository.Save();
            _surveillanceRepository.EntityAdded(HttpContext, user.Id, "User", user, $"User {user?.Email} added successfully");
            var userHistory = new UserHistory
            {
                UserId = user.Id,
                CompanyId = user.CompanyId,
            };

            if (user.IsActive == true)
            {
                userHistory.ActivateDate = DateTime.UtcNow;
                userHistory.IsActive = true;
            }
            else
            {
                userHistory.DeactivateDate = DateTime.UtcNow;
                userHistory.IsActive = false;
            }

            _userHistoryRepository.InsertUserHistory(userHistory);
            await _userRepository.Save();
            _surveillanceRepository.Info(HttpContext, null, ActionType.UserStatusChanged, $"User {user?.Email} status set to {(user?.IsActive == true ? "Active" : "Inactive")}");

            if (user.IsActive == true)
            {
                await SendWelcomeEmailToUser(user);
            }

            //Mail To Admin
            var userCompany = await _companyRepository.GetCompanyById(user.CompanyId.Value);
            var companyUsers = await _userRepository.GetUsersByCompanyId(userCompany.Id);
            var contactPerson = companyUsers.FirstOrDefault(x => x.IsContactPerson == true);
            #region WebCRM 
            if (userCompany != null)
            {
                int.TryParse(userCompany.CrmId, out int orgId);
                if (orgId > 0)
                    _webCrmService.AddPerson(orgId, user, HttpContext);
            }
            #endregion

            if (!contactPerson.Email.ToLower().Equals(user.Email.ToLower()) && user.CreatedBy == null)
            {
                string adminUrl = $"{_configuration.LinkConfig.BaseUrl}admin/{userCompany.Id}_true/home";
                await _emailManager.Send(
                    _configuration.EmailConfig.SenderEmail,
                    contactPerson.Email,
                    Utils.GetLanguageTranslation(_env.WebRootPath, contactPerson.Language, MailTemplate.USER_REGISTRATION_TO_ADMIN_SUBJECT),
                    MailTemplate.USER_REGISTRATION_TO_ADMIN_BODY,
                    contactPerson.Language,
                    HttpContext,
                    contactPerson?.Id,
                    null,
                    contactPerson.Name,//0
                    user.Name, //1
                    adminUrl,//2
                    _configuration.LinkConfig.OverViewPersonal //3
                    );
            }

            var returnObj = new
            {
                user.Id,
                user.Name,
                user.Type,
                user.Email,
                user.CompanyId,
                user.AccessToken,
                user.ExpiresOn,
                user.UserToken,
                user.ExtendedExpiresOn,
                user.CreateDate,
                user.UpdateDate,
                user.RefreshToken,
                user.ShareSimpleToken,
                user.IsActive,
                user.IsSuperAdmin,
                user.IsContactPerson,
                user.Language,
                Company = new
                {
                    userCompany.Id,
                    userCompany.Name,
                    userCompany.Address,
                    userCompany.PackageId,
                    userCompany.Domain,
                    userCompany.LogoUrl,
                    userCompany.WebSite,
                    userCompany.CountryCode,
                    userCompany.City,
                    userCompany.PostalCode,
                    userCompany.Country,
                    userCompany.Cvr,
                    userCompany.Phone,
                    userCompany.IsOtpRequestdataView,
                    userCompany.IsActive,
                    userCompany.IsDeleted,
                    userCompany.DeletedTime,
                    userCompany.Created,
                    userCompany.Updated,
                    userCompany.AutoRenewal
                }
            };
            return Json(returnObj);
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, [FromBody]User user)
        {
            var dbuser = await _userRepository.GetUserByEmail(user.Email);
            if (dbuser != null && dbuser.Id != id)
            {
                return Json(new { isExists = true, message = "A user with this email already exists" });
            }
            var userentity = await _userRepository.GetUserById(id);
            var initStatus = userentity.IsActive;

            userentity.Name = user.Name;
            userentity.Email = user.Email;
            userentity.Type = user.Type;
            userentity.IsActive = user.IsActive;
            userentity.UpdateDate = DateTime.UtcNow;
            userentity.UpdatedBy = user.UpdatedBy;

            _userRepository.UpdateUser(userentity);
            await _userRepository.Save();
            _surveillanceRepository.EntityUpdated(HttpContext, null, "User", dbuser, userentity, $"User information of { dbuser?.Email} changed successfully");
            if (initStatus != userentity.IsActive)
            {
                var userHistory = new UserHistory
                {
                    UserId = id,
                    CompanyId = userentity.CompanyId,
                };
                if (user.IsActive == true)
                {
                    userHistory.ActivateDate = DateTime.UtcNow;
                    userHistory.IsActive = true;

                    await SendWelcomeEmailToUser(userentity);
                }
                else
                {
                    userHistory.DeactivateDate = DateTime.UtcNow;
                    userHistory.IsActive = false;
                }

                _userHistoryRepository.InsertUserHistory(userHistory);
                await _userHistoryRepository.Save();
                _surveillanceRepository.Info(HttpContext, null, ActionType.UserStatusChanged, $"User {user?.Email} status set to {(user?.IsActive == true ? "Active" : "Inactive")}");
            }
            #region WebCRM
            var company = await _companyRepository.GetCompanyById(user.CompanyId.Value);
            if (company != null && !string.IsNullOrWhiteSpace(company.CrmId))
            {
                int.TryParse(company.CrmId, out int orgId);
                if (orgId > 0)
                {
                    _webCrmService.UpdatePerson(orgId, user, HttpContext);
                }
            }
            #endregion
            return Json(user);
        }

        // PUT: api/User/5
        [HttpPost("activate/{id}")]
        public async Task<IActionResult> ActivateUser(Guid id, bool isActive)
        {
            if (id == Guid.Empty || id == null)
                return Ok("Invalid Id");

            var user = await _userRepository.GetUserById(id);
            user.IsActive = isActive;
            _userRepository.UpdateUser(user);

            var userHistory = new UserHistory
            {
                UserId = id,
                CompanyId = user.CompanyId,
            };
            if (isActive == true)
            {
                userHistory.ActivateDate = DateTime.UtcNow;
                userHistory.IsActive = true;
            }
            else
            {
                userHistory.DeactivateDate = DateTime.UtcNow;
                userHistory.IsActive = false;
            }

            _userHistoryRepository.InsertUserHistory(userHistory);
            await _userRepository.Save();
            _surveillanceRepository.Info(HttpContext, null, ActionType.UserStatusChanged, $"User {user?.Email} status set to {(user?.IsActive == true ? "Active" : "Inactive")}");
            return Json(userHistory);
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var dbUser = await _userRepository.GetUserById(id);
            if (dbUser != null)
            {
                dbUser.IsDeleted = true;
                dbUser.DeletedTime = DateTime.UtcNow;
                dbUser.IsActive = false;
                _userRepository.UpdateUser(dbUser);
                var userHistory = new UserHistory
                {
                    UserId = id,
                    CompanyId = dbUser.CompanyId,
                    DeactivateDate = DateTime.Now,
                    IsActive = false
                };
                _userHistoryRepository.InsertUserHistory(userHistory);
                await _userRepository.Save();

                _surveillanceRepository.EntityDeleted(HttpContext, null, "User", dbUser, $"User {dbUser?.Email} deleted successfully");
                return Ok("Deleted succesfully");
            }
            else
            {
                return Ok("No user found to delete");
            }
        }

        [HttpPost, Route("updatecompanycontact/{prevcontactid}/{newcontactid}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> UpdateContact(Guid prevcontactid, Guid newcontactid)
        {
            if (newcontactid != Guid.Empty && prevcontactid != newcontactid)
            {
                var user = new User();
                bool? contactStatus;
                if (prevcontactid != Guid.Empty)
                {
                    user = await _userRepository.GetUserById(prevcontactid);
                    contactStatus = user.IsContactPerson;
                    user.IsContactPerson = false;
                    await _userRepository.Save();
                    _surveillanceRepository.EntityUpdated(HttpContext, null, "User", new { IsContactPerson = contactStatus }, new { IsContactPerson = false }, $"IsContactPerson status of user {user?.Email} set to false");
                }
                user = await _userRepository.GetUserById(newcontactid);
                contactStatus = user.IsContactPerson;
                user.IsContactPerson = true;
                await _userRepository.Save();
                _surveillanceRepository.EntityUpdated(HttpContext, null, "User", new { IsContactPerson = contactStatus }, new { IsContactPerson = true }, $"IsContactPerson status of user {user?.Email} set to true");
            }

            return Ok("Update succesfully");
        }

        // PUT: api/User/5
        [HttpPost("updatetoken/{id}/{token}")]
        public async Task<IActionResult> UpdateUserToken(Guid id, string token)
        {
            if (id == Guid.Empty || id == null)
                return Ok("Invalid Id");

            var user = await _userRepository.GetUserById(id);
            var prevToken = user.AccessToken;
            if (token == "null")
            {
                user.AccessToken = string.Empty;
                user.ShareSimpleToken = string.Empty;
            }
            else
            {
                user.AccessToken = token;
            }
            _userRepository.UpdateUser(user);
            await _userRepository.Save();
            _surveillanceRepository.EntityUpdated(HttpContext, null, "User", new { AccessToken = prevToken }, new { AccessToken = token }, $"AccessToken value of user {user?.Email} set to {token}");
            return Ok("Update succesfully");
        }

        private async Task SendWelcomeEmailToUser(User user)
        {
            var userCompany = await _companyRepository.GetCompanyById(user.CompanyId.Value);
            var companyUsers = await _userRepository.GetUsersByCompanyId(userCompany.Id);
            var contactPerson = companyUsers.FirstOrDefault(x => x.IsContactPerson == true);
            if (userCompany != null && userCompany.IsActive == false)
            {
                await _emailManager.Send(
                        _configuration.EmailConfig.SenderEmail,
                        user.Email,
                        Utils.GetLanguageTranslation(_env.WebRootPath, contactPerson.Language, MailTemplate.USER_REGISTRATION_INACTIVE_COMPANY_SUBJECT),
                        MailTemplate.USER_REGISTRATION_INACTIVE_COMPANY_BODY,
                        contactPerson.Language,
                        HttpContext,
                        user?.Id,
                        "Company inactivation",
                        user.Name, //0
                        contactPerson.Email, //1
                        _configuration.LinkConfig.OverViewPersonal //2
                        );
            }
            var trialPeriod = _configuration.TrialDays;
            var mailContent = "";
            var language = string.IsNullOrWhiteSpace(user.Language) ? "en-US" : user.Language;
            if (user.Email.ToLower() == contactPerson.Email.ToLower())
            {
                var companyCreationDate = userCompany.Created.Value.ToString("dd MMM yyyy", new System.Globalization.CultureInfo(language));
                mailContent = string.Format(
                    Utils.GetLanguageTranslation(
                        _env.WebRootPath, language, "Thank you for signing up. Your {0}-days free trial begins from {1}."),
                        trialPeriod, companyCreationDate);
            }
            else if (user.CreatedBy == null)
            {
                mailContent = Utils.GetLanguageTranslation(_env.WebRootPath, language, "Thank you for signing up to use Connectid Mail. The Administrator have now activated your account and you are therefore able to use Connectid Mail for exchanging sensitive data securely.");
            }
            else
            {
                var creatorUser = await _userRepository.GetUserById(user.CreatedBy.Value);
                if (creatorUser != null)
                {
                    language = creatorUser.Language;
                }
                mailContent = Utils.GetLanguageTranslation(_env.WebRootPath, language, "You have been invited to use Connectid Mail for exchanging sensitive data securely by mail (Secure mail).");
            }
            await _emailManager.Send(
                    _configuration.EmailConfig.SenderEmail,
                    user.Email,
                    Utils.GetLanguageTranslation(_env.WebRootPath, language, MailTemplate.USER_REGISTRATION_SUBJECT),
                    MailTemplate.USER_REGISTRATION_BODY,
                    language,
                    HttpContext,
                    user?.Id,
                    "User registration",
                    user.Name, //0
                    mailContent, //1
                    _configuration.LinkConfig.VideoTutorial,//2
                    _configuration.LinkConfig.OverViewPersonal//3
                    );
        }
    }
}
