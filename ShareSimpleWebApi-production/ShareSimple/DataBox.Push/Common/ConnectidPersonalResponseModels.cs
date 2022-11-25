using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBox.Push.Common
{
    public class LoginModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class AuthModel
    {
        [JsonProperty(PropertyName = "access_token")]
        public string AccessToken { get; set; }
        [JsonProperty(PropertyName = "expires_in")]
        public int ExpiresIn { get; set; }
        [JsonProperty(PropertyName = "token_type")]
        public string TokenType { get; set; }
    }

    public class RequestItem
    {
        public string Id { get; set; }
        public DateTime Date { get; set; }
        public DateTime RequestDate { get; set; }
        public string DataRequestType { get; set; }
        public string RequestStatus { get; set; }
        public string CountryCode { get; set; }
    }

    public class RequestList
    {
        public List<RequestItem> Items { get; set; }
    }

    public class ProfileItem
    {
        public string Id { get; set; }
        public DateTime Date { get; set; }
        public string CountryCode { get; set; }
    }

    public class ProfileList
    {
        public List<ProfileItem> Items { get; set; }
    }

    public class CompanyRequestItem
    {
        public string CompanyName { get; set; }
        public int NumberOfRequests { get; set; }
        public DateTime FirstDate { get; set; }
        public DateTime LastDate { get; set; }
        public int NumberOfRequestsDataAccess { get; set; }
        public int NumberOfRequestsDataPortability { get; set; }
        public int NumberOfRequestsRightToBeForgotten { get; set; }
        public int NumberOfRequestsDataCompromised { get; set; }
        public int NumberOfRequestsRightToObject { get; set; }
        public int NumberOfRequestsRightToRectification { get; set; }
        public int NumberOfRequestsRightToRestrictUse { get; set; }
        public int NumberofRequestsStatusCreated { get; set; }
        public int NumberofRequestsStatusPending { get; set; }
        public int NumberofRequestsStatusSend { get; set; }
        public int NumberofRequestsStatusNonProcessable { get; set; }
        public int NumberofRequestsStatusDelivered { get; set; }
        public int NumberofRequestsStatusNotDelivered { get; set; }
    }

    public class CompanyRequestResponse
    {
        public List<CompanyRequestItem> Items { get; set; }
    }
}
