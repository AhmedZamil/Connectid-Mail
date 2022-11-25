using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataBox.Push.Common;
using Newtonsoft.Json;

namespace DataBox.Push.Services
{
    public class ConnectidPersonalService: IConnectidPersonalService
    {
        private readonly string _apiBaseUrl;
        private readonly Dictionary<string, string> _requestHeaders;
        public ConnectidPersonalService()
        {
            _apiBaseUrl = ConfigurationManager.AppSettings["connectid_personal_apibaseUrl"];
            _requestHeaders = new Dictionary<string, string>()
            {
                { "Content-Type", "application/json" }
            };
        }

        public AuthModel Login(string userName, string password)
        {
            string apiUrl = _apiBaseUrl + "auth/login";
            var user = new LoginModel { UserName = userName, Password = password };
            var response = RestClient.Post<AuthModel>(apiUrl, _requestHeaders, JsonConvert.SerializeObject(user));

            return response;
        }

        public List<CompanyRequestItem> GetCompanyRequests(AuthModel auth)
        {
            string apiUrl = $"{_apiBaseUrl}stats/companyRequests";
            var requestHeaders = new Dictionary<string, string>()
            {
                { "authorization", $"{auth.TokenType} {auth.AccessToken}" }
            };

            var response = RestClient.Get<CompanyRequestResponse>(apiUrl, requestHeaders);
            return response.Items;
        }

        public object GetOverviewStats(AuthModel auth)
        {
            throw new NotImplementedException();
        }

        public ProfileList GetProfileItems(AuthModel auth)
        {
            string apiUrl = $"{_apiBaseUrl}stats/profileitems";
            var requestHeaders = new Dictionary<string, string>()
            {
                { "authorization", $"{auth.TokenType} {auth.AccessToken}" }
            };

            var response = RestClient.Get<ProfileList>(apiUrl, requestHeaders);
            return response;
        }

        public object GetProfileStats(AuthModel auth)
        {
            throw new NotImplementedException();
        }

        public List<RequestItem> GetRequestItems(AuthModel auth)
        {
            string apiUrl = $"{_apiBaseUrl}stats/requestitems";
            var requestHeaders = new Dictionary<string, string>()
            {
                { "authorization", $"{auth.TokenType} {auth.AccessToken}" }
            };

            var response = RestClient.Get<RequestList>(apiUrl, requestHeaders);
            return response.Items;
        }

        public object GetRequestStats(AuthModel auth)
        {
            throw new NotImplementedException();
        }
    }
}
