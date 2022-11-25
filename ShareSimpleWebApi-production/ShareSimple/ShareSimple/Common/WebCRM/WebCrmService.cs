using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using ShareSimple.Common.Enums;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Web;

namespace ShareSimple.Common.WebCRM
{
    public class WebCrmService : IWebCrmService
    {
        private const string _contentType = "application/json-patch+json";
        private readonly WebCrmSettings _webCrmSettings;
        private readonly ITokenInfoRepository _tokenInfoRepository;
        private readonly ISurveillanceRepository _surveillanceRepository;
        private readonly ShareSimpleConfiguration _configuration;
        public WebCrmService(IOptions<WebCrmSettings> webCrmSettings,
            ITokenInfoRepository tokenInfoRepository,
            ISurveillanceRepository surveillanceRepository,
            ShareSimpleConfiguration shareSimpleConfiguration)
        {
            _webCrmSettings = webCrmSettings.Value;
            if (_webCrmSettings.ApiBaseUrl == null)
            {
                _webCrmSettings.ApiBaseUrl = "https://api.webcrm.com/";
            }
            _tokenInfoRepository = tokenInfoRepository;
            _surveillanceRepository = surveillanceRepository;
            _configuration = shareSimpleConfiguration;
        }
        private string GetFullEndpointUrl(string relativeUrl)
        {
            var url = _webCrmSettings.ApiBaseUrl;
            if (url.EndsWith("/") || relativeUrl.StartsWith("/"))
            {
                url = $"{url}{relativeUrl}";
            }
            else
            {
                url = $"{url}/{relativeUrl}";
            }
            return url;
        }
        private string GetAccessToken()
        {
            if (!_webCrmSettings.ApplicationToken.HasValue) return string.Empty;
            var dbTokenInfo = _tokenInfoRepository.GetTokenInfo(_webCrmSettings.ApplicationToken.Value);
            if (dbTokenInfo == null)
            {
                var endpoint = GetFullEndpointUrl("Auth/ApiLogin");
                var response = RestClient.Post<ApiLoginResponse>(endpoint, null, $"authCode={_webCrmSettings.ApplicationToken.Value}", "application/x-www-form-urlencoded");
                if (response != null && !response.IsError)
                {
                    _tokenInfoRepository.SaveToken(new TokenInfo
                    {
                        AppToken = _webCrmSettings.ApplicationToken.Value,
                        CreatedTime = DateTime.UtcNow,
                        AccessToken = response.AccessToken,
                        RefreshToken = response.RefreshToken,
                        TokenType = response.TokenType,
                        ExpiresIn = response.ExpiresIn
                    });
                    return response?.AccessToken;
                }
                else
                {
                    throw new WebCrmException($"Error in getting access token. Error: {response?.Error} {response?.ErrorDescription}");
                }
            }
            else if (DateTime.UtcNow.Subtract(dbTokenInfo.CreatedTime.Value).TotalSeconds >= dbTokenInfo.ExpiresIn.Value)
            {
                try
                {
                    var endpoint = GetFullEndpointUrl("Auth/ApiRefresh");
                    var headers = new Dictionary<string, string>() { { "refreshToken", dbTokenInfo.RefreshToken } };
                    var response = RestClient.Post<ApiLoginResponse>(endpoint, headers, (string)null);
                    if (response != null && !response.IsError)
                    {
                        _tokenInfoRepository.SaveToken(new TokenInfo
                        {
                            AppToken = _webCrmSettings.ApplicationToken.Value,
                            ModifiedTime = DateTime.UtcNow,
                            CreatedTime = DateTime.UtcNow, // renew token life time
                            AccessToken = response.AccessToken,
                            RefreshToken = response.RefreshToken,
                            TokenType = response.TokenType,
                            ExpiresIn = response.ExpiresIn
                        });
                        return response?.AccessToken;
                    }
                    else
                    {
                        throw new WebCrmException($"Error in getting refresh token. Error: {response?.Error} {response?.ErrorDescription}");
                    }
                }
                catch (Exception ex)
                {
                    if (ex.Message?.ToLower()?.Contains("invalid_grant") == true)
                    {
                        _tokenInfoRepository.DeleteToken(dbTokenInfo.AppToken);
                        return GetAccessToken();
                    }
                    else
                    {
                        throw ex;
                    }
                }
            }
            else
            {
                return dbTokenInfo.AccessToken;
            }
        }
        private Dictionary<string, string> GetRequestHeaders()
        {
            var accessToken = GetAccessToken();
            var headers = new Dictionary<string, string>()
            {
                { "Authorization" , $"Bearer {accessToken}" }
            };
            return headers;
        }
        private Organisation GetOrganisation(int id, Dictionary<string, string> headers = null)
        {
            var endpoint = GetFullEndpointUrl($"Organisations/{id}");
            if (headers == null)
                headers = GetRequestHeaders();
            var response = RestClient.Get<Organisation>(endpoint, headers);
            return response;
        }
        private Organisation GetOrganisationByFieldValue(string fieldName, string fieldValue, Dictionary<string, string> headers = null)
        {
            var endpoint = GetFullEndpointUrl("Queries");
            if (headers == null)
                headers = GetRequestHeaders();
            var query = $"SELECT * FROM Organisation WHERE {fieldName}='{fieldValue.Trim()}'";
            endpoint += $"?script={HttpUtility.UrlEncode(query)}";
            var organisations = RestClient.Get<List<Organisation>>(endpoint, headers);
            if (organisations != null && organisations.Count > 0)
            {
                return organisations[0];
            }
            return null;
        }
        public int? AddOrganisation(Company company, HttpContext httpContext = null, Guid? userId = null)
        {
            if (!CheckWebCRMSettings($"skipped to add organisation in WebCRM for company {company?.Name}", httpContext, userId)) return null;
            try
            {
                var headers = GetRequestHeaders();
                var endpoint = GetFullEndpointUrl("Organisations");
                var uniqueFiledValue = _webCrmSettings.OrganisationUniqueField.Equals("OrganisationName", StringComparison.InvariantCultureIgnoreCase) ? company?.Name : company?.Domain;
                var organisation = GetOrganisationByFieldValue(_webCrmSettings.OrganisationUniqueField, uniqueFiledValue ?? "", headers);
                bool create = organisation == null;
                if (create)
                {
                    organisation = new Organisation();
                }
                else
                {
                    _surveillanceRepository.Info(httpContext, userId, ActionType.WebCRM, $"There is already an organisation with same {_webCrmSettings.OrganisationUniqueField} '{uniqueFiledValue}'");
                }
                organisation.OrganisationAddress = company.Address;
                organisation.OrganisationCity = company.City;
                organisation.OrganisationCountry = company.Country;
                organisation.OrganisationDomain = company.Domain;
                organisation.OrganisationName = company.Name;
                organisation.OrganisationPostCode = company.PostalCode;
                organisation.OrganisationTelephone = company.Phone;
                organisation.OrganisationWww = company.WebSite;
                organisation.CVRNo = company.Cvr;
                organisation.PromotionCode = company.PromotionCode;
                var companyAge = ((TimeSpan)(DateTime.UtcNow - company.Created)).TotalDays;
                var trialPeriod = _configuration.TrialDays;
                if (company.IsActive != true || company.IsDeleted == true)
                {
                    organisation.OrganisationConnectidStatus = _webCrmSettings.InactiveStatus;
                }
                else if (companyAge <= trialPeriod)
                {
                    organisation.OrganisationConnectidStatus = _webCrmSettings.PotentialStatus;
                }
                else
                {
                    organisation.OrganisationConnectidStatus = _webCrmSettings.ActiveStatus;
                }
                if (create)
                {
                    var response = RestClient.Post<Organisation>(endpoint, headers, organisation, _contentType);
                    int.TryParse(response, out int orgId);
                    _surveillanceRepository.Info(httpContext, userId, ActionType.WebCRM, $"Organisation added successfully in WebCRM for company {company?.Name}");
                    return orgId;
                }
                else
                {
                    var response = RestClient.Put($"{endpoint}/{organisation.OrganisationId}", headers, organisation, _contentType);
                    _surveillanceRepository.Info(httpContext, userId, ActionType.WebCRM, $"Organisation updated successfully in WebCRM for company {company?.Name}");
                    return organisation.OrganisationId;
                }
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(httpContext, userId, $"Error in adding organisation in WebCRM for company {company?.Name}. Error: {ex.Message}", Severity.Medium, ex, ActionType.WebCRM);
                return null;
            }
        }
        public int? UpdateOrganisation(Company company, HttpContext httpContext = null, Guid? userId = null)
        {
            if (!CheckWebCRMSettings($"skipped to update organisation in WebCRM for company {company?.Name}", httpContext, userId)) return null;
            int.TryParse(company?.CrmId, out int orgId);
            if (orgId <= 0)
            {
                return AddOrganisation(company, httpContext, userId);
            }
            else
            {
                try
                {
                    var headers = GetRequestHeaders();
                    var organisation = GetOrganisation(orgId, headers);
                    if (organisation != null)
                    {
                        organisation.OrganisationAddress = company.Address;
                        organisation.OrganisationCity = company.City;
                        organisation.OrganisationCountry = company.Country;
                        organisation.OrganisationDomain = company.Domain;
                        organisation.OrganisationName = company.Name;
                        organisation.OrganisationPostCode = company.PostalCode;
                        organisation.OrganisationTelephone = company.Phone;
                        organisation.OrganisationWww = company.WebSite;
                        organisation.CVRNo = company.Cvr;
                        organisation.PromotionCode = company.PromotionCode;
                        organisation.EnabledTrustedLink = company.EnabledTrustedLink == true ? "Yes" : "No";
                        var companyAge = ((TimeSpan)(DateTime.UtcNow - company.Created)).TotalDays;
                        var trialPeriod = _configuration.TrialDays;
                        if (company.IsActive != true && company.IsDeleted == true)
                        {
                            organisation.OrganisationConnectidStatus = _webCrmSettings.InactiveStatus;
                        }
                        else if (companyAge <= trialPeriod)
                        {
                            organisation.OrganisationConnectidStatus = _webCrmSettings.PotentialStatus;
                        }
                        else
                        {
                            organisation.OrganisationConnectidStatus = _webCrmSettings.ActiveStatus;
                        }
                        var endpoint = GetFullEndpointUrl($"Organisations/{orgId}");
                        var response = RestClient.Put(endpoint, headers, organisation, _contentType);
                    }
                    _surveillanceRepository.Info(httpContext, userId, ActionType.WebCRM, $"Organisation updated successfully in WebCRM for company {company?.Name}");
                    return orgId;
                }
                catch (Exception ex)
                {
                    _surveillanceRepository.Error(httpContext, userId, $"Error in updating organisation in WebCRM for company {company?.Name}. Error: {ex.Message}", Severity.Medium, ex, ActionType.WebCRM);
                    return null;
                }
            }
        }
        public int? UpdateOrganisationStatus(Company company, string status, HttpContext httpContext = null, Guid? userId = null)
        {
            if (!CheckWebCRMSettings($"skipped to update organisation status to {status} in WebCRM for company {company?.Name}", httpContext, userId)) return null;
            int.TryParse(company?.CrmId, out int orgId);
            if (orgId > 0)
            {
                try
                {
                    var headers = GetRequestHeaders();
                    var organisation = GetOrganisation(orgId, headers);
                    if (organisation != null)
                    {
                        organisation.OrganisationConnectidStatus = status;
                        var endpoint = GetFullEndpointUrl($"Organisations/{orgId}");
                        var response = RestClient.Put(endpoint, headers, organisation, _contentType);
                        _surveillanceRepository.Info(httpContext, userId, ActionType.WebCRM, $"Organisation status updated to {status} successfully in WebCRM for company {company?.Name}");
                        return orgId;
                    }
                }
                catch (Exception ex)
                {
                    _surveillanceRepository.Error(httpContext, userId, $"Error in updating organisation status to {status} in WebCRM for company {company?.Name}. Error: {ex.Message}", Severity.Medium, ex, ActionType.WebCRM);
                }
            }

            return null;
        }
        public int? AddPerson(int organisationId, User user, HttpContext httpContext = null, Guid? userId = null)
        {
            if (!CheckWebCRMSettings($"skipped to add person in WebCRM for user {user?.Email}", httpContext, userId)) return null;
            try
            {
                var headers = GetRequestHeaders();
                var person = GetPerson(organisationId, user.Email, headers, httpContext, userId);
                if (person != null)
                {
                    return UpdatePerson(organisationId, user, httpContext, userId);
                }
                var endpoint = GetFullEndpointUrl("Persons");
                person = new Person
                {
                    PersonOrganisationId = organisationId,
                    PersonEmail = user.Email,
                    PersonLastName = user.Name,
                    PersonStatus = user.IsActive == true ? "Active" : "Resigned",
                    PersonTitle = (user.IsSuperAdmin == true ? "Super Admin" : (user.Type == true ? "Admin" : "User")) + (user.IsContactPerson == true ? " (Contact Person)" : "")
                };
                var response = RestClient.Post<Person>(endpoint, headers, person, _contentType);
                int.TryParse(response, out int personId);
                _surveillanceRepository.Info(httpContext, userId, ActionType.WebCRM, $"Person added successfully in WebCRM for user {user?.Email}");
                return personId;
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(httpContext, userId, $"Error in adding person in WebCRM for user {user?.Email}. Error: {ex.Message}", Severity.Medium, ex, ActionType.WebCRM);
            }

            return null;
        }
        private Person GetPerson(int orgId, string email, Dictionary<string, string> headers = null, HttpContext httpContext = null, Guid? userId = null)
        {
            try
            {
                var endpoint = GetFullEndpointUrl("Queries");
                if (headers == null)
                    headers = GetRequestHeaders();
                var query = $"SELECT * FROM Person WHERE PersonOrganisationId={orgId} AND PersonEmail='{email}'";
                endpoint += $"?script={HttpUtility.UrlEncode(query)}";
                var persons = RestClient.Get<List<Person>>(endpoint, headers);
                if (persons != null && persons.Count > 0)
                {
                    return persons[0];
                }
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(httpContext, userId, $"Error in getting person in WebCRM for email {email}. Error: {ex.Message}", Severity.Medium, ex, ActionType.WebCRM);
            }
            return null;
        }
        public int? UpdatePerson(int organisationId, User user, HttpContext httpContext = null, Guid? userId = null)
        {
            if (!CheckWebCRMSettings($"skipped to update person in WebCRM for user {user.Email}", httpContext, userId)) return null;
            var headers = GetRequestHeaders();
            var person = GetPerson(organisationId, user.Email, headers, httpContext, userId);
            if (person != null)
            {
                try
                {
                    person.PersonLastName = user.Name;
                    person.PersonStatus = user.IsActive == true ? "Active" : "Resigned";
                    person.PersonTitle = (user.IsSuperAdmin == true ? "Super Admin" : (user.Type == true ? "Admin" : "User")) + (user.IsContactPerson == true ? " (Contact Person)" : "");
                    var endpoint = GetFullEndpointUrl($"Persons/{person.PersonId}");
                    var response = RestClient.Put(endpoint, headers, person, _contentType);
                    _surveillanceRepository.Info(httpContext, userId, ActionType.WebCRM, $"Person updated successfully in WebCRM for user {user?.Email}");
                    return person.PersonId;
                }
                catch (Exception ex)
                {
                    _surveillanceRepository.Error(httpContext, userId, $"Error in updating person in WebCRM for user {user?.Email}. Error: {ex.Message}", Severity.Medium, ex, ActionType.WebCRM);
                }
            }
            else
            {
                return AddPerson(organisationId, user, httpContext, userId);
            }
            return null;
        }
        private bool CheckWebCRMSettings(string message, HttpContext httpContext = null, Guid? userId = null)
        {
            if (!_webCrmSettings.ApplicationToken.HasValue)
            {
                _surveillanceRepository.Warning(httpContext, userId, ActionType.WebCRM, $"WebCRM settings (ApplicationToken) isn't found and {message}");
                return false;
            }
            return true;
        }
    }
}
