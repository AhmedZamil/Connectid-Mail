using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBox.Push.Common
{
    public class CustomerCount
    {
        [JsonProperty(PropertyName = "$No.Of.Customers")]
        public int NoOfCustomers { get; set; }
        [JsonProperty(PropertyName = "date")]
        public DateTime? Date { get; set; }
    }

    public class CountryWiseCustomerCount : CustomerCount
    {
        public string Country { get; set; }
    }

    public class StatusWiseCustomerCount : CustomerCount
    {
        public string Status { get; set; }
    }

    //RequestCount
    public class RequestCount
    {
        [JsonProperty(PropertyName = "$Number.Of.Request")]
        public int NumberOfRequests { get; set; }
        [JsonProperty(PropertyName = "date")]
        public DateTime? Date { get; set; }
    }
    public class UserWiseRequestCount : RequestCount
    {
        public string User { get; set; }
    }

    public class TypeWiseRequestCount : RequestCount
    {
        public string RequestType { get; set; }
    }

    //RequestSize
    public class RequestSize
    {
        [JsonProperty(PropertyName = "$Size.Of.Request")]
        public long SizeOfRequest { get; set; }
        [JsonProperty(PropertyName = "date")]
        public DateTime? Date { get; set; }
    }
    public class UserWiseRequestSize : RequestSize
    {
        public string User { get; set; }
    }

    public class TypeWiseRequestSize : RequestSize
    {
        public string RequestType { get; set; }
    }

    public class LinkClick
    {
        [JsonProperty(PropertyName = "$Number.Of.Click")]
        public int NumberOfClicks { get; set; }
        [JsonProperty(PropertyName = "date")]
        public DateTime? Date { get; set; }
    }

    public class LinkClickByType : LinkClick
    {
        public string ClickType { get; set; }
    }

    public class LinkSentByCompany : LinkClick
    {
        public string Company { get; set; }
    }
    public class CustomerTrialEndingInfo
    {
        public DateTime? Date { get; set; }
        public string Customer { get; set; }
        [JsonProperty(PropertyName = "$TrialEndingDays")]
        public int TrialEndingDays { get; set; }
    }
    public class DataBoxData
    {
        public List<CustomerCount> CustomerCounts { get; set; }
        public List<CountryWiseCustomerCount> CountryWiseCustomers { get; set; }
        public List<StatusWiseCustomerCount> StatusWiseCustomers { get; set; }
        public List<RequestCount> RequestCounts { get; set; }
        public List<UserWiseRequestCount> UserWiseRequestCounts { get; set; }
        public List<TypeWiseRequestCount> TypeWiseRequestCounts { get; set; }
        public List<RequestSize> RequestSizes { get; set; }
        public List<UserWiseRequestSize> UserWiseRequestSizes { get; set; }
        public List<TypeWiseRequestSize> TypeWiseRequestSizes { get; set; }
        public List<LinkClick> LinkClicks { get; set; }
        public List<LinkClickByType> LinkClicksByType { get; set; }
        public List<LinkSentByCompany> LinksSentByCompany { get; set; }
        public List<CustomerTrialEndingInfo> CustomerTrialEndingDays { get; set; }
    }
}
