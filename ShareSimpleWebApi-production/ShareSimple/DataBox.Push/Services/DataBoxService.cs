using DataBox.Push.Common;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Text;

namespace DataBox.Push.Services
{
    public class DataBoxService : IDataBoxService
    {
        private readonly string _apiBaseUrl;
        private readonly Dictionary<string, string> _requestHeaders;
        public DataBoxService(string token)
        {
            _apiBaseUrl = "https://push.databox.com";
            _requestHeaders = new Dictionary<string, string>()
            {
                {"authorization", "Basic " + EncodeBase64(token+ ":") },
                { "accept", "application/vnd.databox.v2+json" },
                {  "content-type","application/json"}
            };
        }

        public DataboxResponse PushData(string jsonData)
        {
            var response = RestClient.Post<DataboxResponse>(_apiBaseUrl, _requestHeaders, jsonData);
            return response;
        }

        public List<Metric> GetMetrics()
        {
            var response = RestClient.Get<MetricResponse>(_apiBaseUrl + "/metrickeys", _requestHeaders);
            //var jsonObj = JsonConvert.DeserializeObject<MetricResponse>(response);
            return response.Metrics;
        }

        public DataboxResponse Purge()
        {
            var response = RestClient.Delete(_apiBaseUrl + "/data", _requestHeaders);
            return JsonConvert.DeserializeObject<DataboxResponse>(response);
        }

        public PushModel GetLastPush()
        {
            var response = RestClient.Get<List<PushModel>>(_apiBaseUrl + "/lastpushes?limit=1", _requestHeaders);
            return response.FirstOrDefault();
        }

        public object Delete(string kpiKey)
        {
            string apiUrl = "https://api2.databox.com/d/metrickeys/" + kpiKey; // "498588%7CNo.Of.Customers%7CCountry";
            var requestHeaders = new Dictionary<string, string>() {
                { "authorization", "Basic NHBjZHNnYW40MTZvd2d3Y2Nja2s4NDh3a2trMDQ0NGdjOGtva293ZzBzODQwOG9zbzg6" },
                { "user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36" }
            };
            var response = RestClient.Delete(apiUrl, requestHeaders);

            return response;
        }

        public List<string> PushConnectidMailData(DataBoxData data)
        {
            var metrics = new List<string>();
            //PropertyInfo[] properties = typeof(DataBoxData).GetProperties();
            //foreach (PropertyInfo property in properties)
            //{
            //    var propertyValue = property.GetValue(data);
            //    if (propertyValue != null)
            //    {
            //        var jsonString = "{\"data\":" + JsonConvert.SerializeObject(propertyValue) + "}";
            //        try
            //        {
            //            var pushResponse = PushData(jsonString);

            //            if (pushResponse.Metrics.Count() > 0)
            //            {
            //                metrics.AddRange(pushResponse.Metrics);
            //            }
            //        }
            //        catch (Exception ex)
            //        {
            //            Console.WriteLine(ex.Message);
            //        }
            //    }
            //}

            if(data.CustomerCounts != null && data.CustomerCounts.Count() > 0)
            {
                var customerCounts = new List<CustomerCount>();
                foreach(var item in data.CustomerCounts)
                {
                    var exCustomerCount = customerCounts.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exCustomerCount != null)
                    {
                        exCustomerCount.NoOfCustomers += 1;
                    }
                    else
                    {
                        customerCounts.Add(item);
                    }
                }

                metrics.AddRange( ConnectidMailDataItem(customerCounts));
            }

            if (data.CountryWiseCustomers != null && data.CountryWiseCustomers.Count()> 0)
            {
                var customerCounts = new List<CountryWiseCustomerCount>();
                foreach (var item in data.CountryWiseCustomers)
                {
                    var exCountryWiseCustomerCount = customerCounts.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exCountryWiseCustomerCount != null)
                    {
                        exCountryWiseCustomerCount.NoOfCustomers += 1;
                    }
                    else
                    {
                        customerCounts.Add(item);
                    }
                }

                metrics.AddRange(ConnectidMailDataItem(customerCounts));
            }

            if (data.StatusWiseCustomers != null && data.StatusWiseCustomers.Count() > 0)
            {
                var customerCounts = new List<StatusWiseCustomerCount>();
                foreach (var item in data.StatusWiseCustomers)
                {
                    var exStatusWiseCustomerCount = customerCounts.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exStatusWiseCustomerCount != null)
                    {
                        exStatusWiseCustomerCount.NoOfCustomers += 1;
                    }
                    else
                    {
                        customerCounts.Add(item);
                    }
                }

                metrics.AddRange(ConnectidMailDataItem(customerCounts));
            }

            //Data Regarding Request Count
            if (data.RequestCounts != null && data.RequestCounts.Count() > 0)
            {
                var requestCounts = new List<RequestCount>();
                foreach (var item in data.RequestCounts)
                {
                    var exRequestCount = requestCounts.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exRequestCount != null)
                    {
                        exRequestCount.NumberOfRequests += 1;
                    }
                    else
                    {
                        requestCounts.Add(item);
                    }
                }

                metrics.AddRange(ConnectidMailDataItem(requestCounts));
            }

            if (data.UserWiseRequestCounts != null && data.UserWiseRequestCounts.Count() > 0)
            {
                var requestCounts = new List<UserWiseRequestCount>();
                foreach (var item in data.UserWiseRequestCounts)
                {
                    var exRequestCount = requestCounts.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exRequestCount != null)
                    {
                        exRequestCount.NumberOfRequests += 1;
                    }
                    else
                    {
                        requestCounts.Add(item);
                    }
                }

                metrics.AddRange(ConnectidMailDataItem(requestCounts));
            }

            if (data.TypeWiseRequestCounts != null && data.TypeWiseRequestCounts.Count() > 0)
            {
                var requestCounts = new List<TypeWiseRequestCount>();
                foreach (var item in data.TypeWiseRequestCounts)
                {
                    var exRequestCount = requestCounts.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exRequestCount != null)
                    {
                        exRequestCount.NumberOfRequests += 1;
                    }
                    else
                    {
                        requestCounts.Add(item);
                    }
                }

                metrics.AddRange(ConnectidMailDataItem(requestCounts));
            }

            //Data regarding request Size
            if (data.RequestSizes != null && data.RequestSizes.Count() > 0)
            {
                var requestSizes = new List<RequestSize>();
                foreach (var item in data.RequestSizes)
                {
                    var exRequestSize = requestSizes.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exRequestSize != null)
                    {
                        exRequestSize.SizeOfRequest += item.SizeOfRequest;
                    }
                    else
                    {
                        requestSizes.Add(item);
                    }
                }

                metrics.AddRange(ConnectidMailDataItem(requestSizes));
            }

            if (data.UserWiseRequestSizes != null && data.UserWiseRequestSizes.Count() > 0)
            {
                var requestSizes = new List<UserWiseRequestSize>();
                foreach (var item in data.UserWiseRequestSizes)
                {
                    var exRequestSize = requestSizes.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exRequestSize != null)
                    {
                        exRequestSize.SizeOfRequest += item.SizeOfRequest;
                    }
                    else
                    {
                        requestSizes.Add(item);
                    }
                }

                metrics.AddRange(ConnectidMailDataItem(requestSizes));
            }

            if (data.TypeWiseRequestSizes != null && data.TypeWiseRequestSizes.Count() > 0)
            {
                var requestSizes = new List<TypeWiseRequestSize>();
                foreach (var item in data.TypeWiseRequestSizes)
                {
                    var exRequestSize = requestSizes.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exRequestSize != null)
                    {
                        exRequestSize.SizeOfRequest += item.SizeOfRequest;
                    }
                    else
                    {
                        requestSizes.Add(item);
                    }
                }

                metrics.AddRange(ConnectidMailDataItem(requestSizes));
            }

            if (data.LinkClicks != null && data.LinkClicks.Count() > 0)
            {
                var linkClicks = new List<LinkClick>();
                foreach (var item in data.LinkClicks)
                {
                    var exlinkClick = linkClicks.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exlinkClick != null)
                    {
                        exlinkClick.NumberOfClicks += item.NumberOfClicks;
                    }
                    else
                    {
                        linkClicks.Add(item);
                    }
                }

                metrics.AddRange(ConnectidMailDataItem(linkClicks));
            }

            if (data.LinkClicksByType != null && data.LinkClicksByType.Count() > 0)
            {
                var linkClicks = new List<LinkClickByType>();
                foreach (var item in data.LinkClicksByType)
                {
                    var exlinkClick = linkClicks.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exlinkClick != null)
                    {
                        exlinkClick.NumberOfClicks += item.NumberOfClicks;
                    }
                    else
                    {
                        linkClicks.Add(item);
                    }
                }

                metrics.AddRange(ConnectidMailDataItem(linkClicks));
            }

            if (data.LinksSentByCompany != null && data.LinksSentByCompany.Count() > 0)
            {
                var linkClicks = new List<LinkSentByCompany>();
                foreach (var item in data.LinksSentByCompany)
                {
                    var exlinkClick = linkClicks.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exlinkClick != null)
                    {
                        exlinkClick.NumberOfClicks += item.NumberOfClicks;
                    }
                    else
                    {
                        linkClicks.Add(item);
                    }
                }

                metrics.AddRange(ConnectidMailDataItem(linkClicks));
            }

            if(data.CustomerTrialEndingDays != null && data.CustomerTrialEndingDays.Count() > 0)
            {
                var trialEndingCustomers = new List<CustomerTrialEndingInfo>();
                foreach (var item in data.CustomerTrialEndingDays)
                {
                    var exCustomerCount = trialEndingCustomers.FirstOrDefault(x => x.Date.Value.Subtract(item.Date.Value).Milliseconds == 0);
                    if (exCustomerCount != null)
                    {
                        exCustomerCount.TrialEndingDays += 1;
                    }
                    else
                    {
                        trialEndingCustomers.Add(item);
                    }
                }
                metrics.AddRange(ConnectidMailDataItem(trialEndingCustomers));
            }

            return metrics;
        }

        public List<string> PushConnectidPersonalData(ConnectidPersonalModels data)
        {
            var metrics = new List<string>();
            PropertyInfo[] properties = typeof(ConnectidPersonalModels).GetProperties();
            foreach (PropertyInfo property in properties)
            {
                var propertyValue = property.GetValue(data);
                if (propertyValue != null)
                {
                    var jsonString = "{\"data\":" + JsonConvert.SerializeObject(propertyValue) + "}";
                    try
                    {
                        var pushResponse = PushData(jsonString);

                        if (pushResponse.Metrics.Count() > 0)
                        {
                            metrics.AddRange(pushResponse.Metrics);
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                    }
                }
            }

            return metrics;
        }

        private string EncodeBase64(string base64Decoded)
        {
            string base64Encoded;
            byte[] data = ASCIIEncoding.ASCII.GetBytes(base64Decoded);
            base64Encoded = Convert.ToBase64String(data);

            return base64Encoded;
        }

        private string GetJsonDataForDatabox(DataBoxData data)
        {
            string jsonString = "";

            PropertyInfo[] properties = typeof(DataBoxData).GetProperties();
            foreach (PropertyInfo property in properties)
            {
                var propertyValue = property.GetValue(data);
                if (propertyValue != null)
                {
                    if (jsonString.Count() > 0)
                    {
                        jsonString += ("," + JsonConvert.SerializeObject(propertyValue));
                    }
                    else
                    {
                        jsonString += JsonConvert.SerializeObject(propertyValue);
                    }
                }
            }

            return "{\"data\":[" + jsonString + "]}";
        }        

        private List<string> ConnectidMailDataItem(object data)
        {
            var jsonString = "{\"data\":" + JsonConvert.SerializeObject(data) + "}";
            try
            {
                var pushResponse = PushData(jsonString);

                if (pushResponse.Metrics.Count() > 0)
                {
                    return pushResponse.Metrics;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return new List<string>();
        }
    }
}
