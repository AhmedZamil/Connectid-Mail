using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace ShareSimple.Common
{
    public static class GraphServiceClient
    {
        #region resource urls
        private const string _orgDetails = "https://graph.microsoft.com/v1.0/organization/";
        private const string _userDetails = "https://graph.microsoft.com/v1.0/users/{0}?$select=displayName,surname,givenName,mail,userPrincipalName,mobilePhone,city,country,postalCode";
        #endregion

        #region public methods

        public static GraphOrganization GetOrganization(string token)
        {
            var content = GetResultFromWebRequest(token, _orgDetails);
            var resultTemp = JObject.Parse(content);
            var graphUserDetails = resultTemp["value"][0].ToObject<GraphOrganization>();
            return graphUserDetails;
        }

        public static GraphUser GetMyProfile(string token)
        {
            var url = "https://graph.microsoft.com/v1.0/me/";
            var content = GetResultFromWebRequest(token, url);
            var graphUserDetails = JObject.Parse(content).ToObject<GraphUser>();
            return graphUserDetails;
        }

        public static GraphUser GetUser(string userPrincipleName, string token)
        {
            var url = String.Format(_userDetails, userPrincipleName);
            var content = GetResultFromWebRequest(token, url);
            var graphUserDetails = JObject.Parse(content).ToObject<GraphUser>();
            return graphUserDetails;
        }

        private static string GetResultFromWebRequest(string token, string url, string host = null)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);

            request.Method = "GET";
            request.UserAgent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36";
            request.AutomaticDecompression = DecompressionMethods.Deflate | DecompressionMethods.GZip;
            request.PreAuthenticate = true;
            request.Headers.Add("Authorization", "Bearer " + token);
            //request.Headers.Add("Content-type", "application/json");
            request.Accept = "application/json";
            if (!string.IsNullOrEmpty(host))
            {
                request.Host = host;
            }

            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            string content = string.Empty;
            using (Stream stream = response.GetResponseStream())
            {
                using (StreamReader sr = new StreamReader(stream))
                {
                    content = sr.ReadToEnd();
                }
            }

            return content;
        }
        #endregion
    }

    public class GraphOrganization
    {
        public Guid id { get; set; }
        public string city { get; set; }
        public string country { get; set; }
        public string countryLetterCode { get; set; }
        public string displayName { get; set; }
        public string postalCode { get; set; }
        public string state { get; set; }
        public string street { get; set; }
    }

    public class GraphUser
    {
        public Guid id { get; set; }
        public string userPrincipalName { get; set; }
        public string surname { get; set; }
        public string givenName { get; set; }
        public string displayName { get; set; }
        public string city { get; set; }
        public string country { get; set; }
        public string postalCode { get; set; }
        public string mail { get; set; }
        public string mobilePhone { get; set; }
    }
}
