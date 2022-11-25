using Microsoft.AspNetCore.Mvc;
using ShareSimple.Common;
using ShareSimple.Common.Enums;
using ShareSimple.Common.Services;
using ShareSimple.Interface;
using ShareSimple.ViewModels;
using System;
using System.Threading.Tasks;

namespace ShareSimple.Controllers
{
    [Produces("application/json")]
    [Route("api/Authorize")]
    public class AuthorizeController : Controller
    {
        private readonly IAdalService _adalService;
        // This will read from config
        private string _redirectUriWebsite = "";

        private readonly IUserRepository _userRepository;
        private readonly ICompanyRepository _companyRepository;
        private readonly ShareSimpleConfiguration _configuration;
        private readonly ISurveillanceRepository _surveillanceRepository;
        public AuthorizeController(IUserRepository userRepository,
            ICompanyRepository companyRepository,
            ShareSimpleConfiguration configuration,
            ISurveillanceRepository surveillanceRepository)
        {
            _adalService = new AdalService();
            _userRepository = userRepository;
            _companyRepository = companyRepository;
            _configuration = configuration;
            _surveillanceRepository = surveillanceRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] AuthRequest authRequest)
        {
            try
            {
                var user = await _userRepository.GetUserByEmail(authRequest.email);

                if (user != null)
                {
                    _surveillanceRepository.Info(HttpContext, user?.Id, ActionType.Authentication, $"Authentication is success for {authRequest?.email} and gets access token");
                    return Json(new { isActive = true, accessToken = user.AccessToken, expiresOn = user.ExpiresOn, extendedLifeTimeToken = 15 });
                }
                else
                {
                    _surveillanceRepository.Warning(HttpContext, null, ActionType.Authentication, $"No user is found for {authRequest?.email} for authentication");
                }
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(HttpContext, null, $"Error in authenticating {authRequest?.email}. Error: {ex.Message}", Severity.Medium, ex, ActionType.Authentication);
            }
            return null;
        }

        [HttpPost]
        [Route("Code")]
        public async Task<IActionResult> PostCode([FromBody] AuthRequest authRequest)
        {
            try
            {
                _redirectUriWebsite = _configuration.LinkConfig.RedirectUriWebsite;
                if (!string.IsNullOrEmpty(authRequest.redirecturl))
                {
                    _redirectUriWebsite = authRequest.redirecturl;
                }
                var authenticationResult = await _adalService.AcquireTokenByAuthorizationCode(_configuration.AzureAdClientSettings, authRequest.code, _redirectUriWebsite);
                if (authenticationResult.UserInfo == null || string.IsNullOrEmpty(authenticationResult.UserInfo.DisplayableId))
                {
                    var authcoderesponse1 = new AuthResponse
                    {
                        message = ConstantMessage.AZURE_ACS_FAILURE,
                        user = null,
                        issuccess = false
                    };
                    _surveillanceRepository.Warning(HttpContext, null, ActionType.Authentication, $"Authentication failed due to {ConstantMessage.AZURE_ACS_FAILURE} for code {authRequest?.code}");
                    return Json(authcoderesponse1);
                }
                var userProfile = GraphServiceClient.GetMyProfile(authenticationResult.AccessToken);
                if (!string.IsNullOrEmpty(authRequest.email) && (userProfile.mail.ToLower() != authRequest.email.ToLower() || userProfile.userPrincipalName.ToLower() != authRequest.email.ToLower()))
                {
                    var authcoderesponse1 = new AuthResponse
                    {
                        message = string.Format(ConstantMessage.LOGIN_FAILED, authRequest.email, authenticationResult.UserInfo.DisplayableId),
                        user = null,
                        issuccess = false
                    };
                    _surveillanceRepository.Warning(HttpContext, null, ActionType.Authentication, $"Authentication failed due to {ConstantMessage.AZURE_ACS_FAILURE} for email {authRequest?.email}");
                    return Json(authcoderesponse1);
                }

                var user = await _userRepository.GetUserByEmail(authenticationResult.UserInfo.DisplayableId);

                var companyVm = new CompanyModel();
                var userVm = new UserModel();

                if (user != null && !string.IsNullOrEmpty(user.Email))
                {
                    var company = await _companyRepository.GetCompanyById((Guid)user.CompanyId);

                    if (company.IsActive == true)
                    {
                        if (string.IsNullOrEmpty(user.ShareSimpleToken))
                        {
                            user.AccessToken = authenticationResult.AccessToken;
                            user.ExpiresOn = authenticationResult.ExpiresOn.DateTime;
                            user.UserToken = authenticationResult.IdToken;
                            user.ExtendedExpiresOn = authenticationResult.ExpiresOn.DateTime.AddDays(3);
                            user.ShareSimpleToken = Guid.NewGuid().ToString();
                            if (!string.IsNullOrEmpty(authRequest.language))
                            {
                                user.Language = authRequest.language;
                            }
                            await _userRepository.Save();
                            _surveillanceRepository.EntityUpdated(HttpContext, user?.Id, "User", null, user, $"User information is updated after authentication with access token");
                        }
                    }
                    else
                    {
                        user.AccessToken = string.Empty;
                        user.UserToken = string.Empty;
                        user.ShareSimpleToken = string.Empty;
                        await _userRepository.Save();
                        _surveillanceRepository.EntityUpdated(HttpContext, user?.Id, "User", null, user, $"User information is updated with empty access token");
                    }

                    companyVm = new CompanyModel(company);
                    userVm = new UserModel(user);
                    userVm.Company = companyVm;
                    userVm.ExtendedLifeTimeToken = true;
                }
                _surveillanceRepository.Info(HttpContext, user?.Id, ActionType.Authentication, $"Authentication is success for email {authRequest?.email}, code {authRequest?.code}");
                var authcoderesponse = new AuthResponse
                {
                    authenticationResult = authenticationResult,
                    graphOrganization = new GraphOrganization() { displayName = "" },
                    user = userVm,
                    issuccess = true,
                    trialPeriod = _configuration.TrialDays.HasValue ? _configuration.TrialDays.Value : 14
            };

            return Json(authcoderesponse);
        }
            catch (Exception ex)
            {
                var authcoderesponse1 = new AuthResponse
                {
                    message = string.Format(ConstantMessage.AUTH_CODE_CHECK_FAIL, ex.Message),
                    user = null,
                    issuccess = false
                };
        _surveillanceRepository.Error(HttpContext, null, $"Authentication is failed for email {authRequest?.email}, code {authRequest?.code} due to {authcoderesponse1?.message}", Severity.Low, ex, ActionType.Authentication);
                return Json(authcoderesponse1);
    }
}
    }
}