using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;

namespace ShareSimple.Common
{
    /// <summary>
    /// REST API Caller
    /// </summary>
    public class RestClient
    {
        #region private methods
        private static HttpWebRequest CreateWebRequest(string endpoint, string method = "GET", Dictionary<string, string> headers = null)
        {
            HttpWebRequest webRequest = WebRequest.CreateHttp(endpoint);
            webRequest.Method = method ?? "GET";
            if (headers != null && headers.Count > 0)
            {
                foreach (var headerName in headers.Keys)
                {
                    webRequest.Headers.Add(headerName, headers[headerName]);
                }
            }
            return webRequest;
        }
        private static string GetWebResponse(HttpWebRequest webRequest)
        {
            try
            {
                HttpWebResponse webResponse = (HttpWebResponse)webRequest.GetResponse();
                using (var streamReader = new StreamReader(webResponse.GetResponseStream()))
                {
                    var responseText = streamReader.ReadToEnd();
                    return responseText;
                }
            }
            catch (WebException ex)
            {
                if (ex.Response != null)
                {
                    using (var stream = ex.Response.GetResponseStream())
                    using (var reader = new StreamReader(stream))
                    {
                        var realExMsg = reader.ReadToEnd();
                        Console.WriteLine(realExMsg);
                        if (!string.IsNullOrWhiteSpace(realExMsg))
                            throw new Exception(realExMsg);
                        else
                            throw ex;
                    }
                }
                else
                {
                    throw ex;
                }
            }
            catch (System.Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw ex;
            }
        }
        private static string MakeRequest(string endpoint, string method = "POST", Dictionary<string, string> headers = null, string dataString = null, string contentType = null)
        {
            HttpWebRequest webRequest = CreateWebRequest(endpoint, method, headers);
            if (!string.IsNullOrWhiteSpace(contentType))
            {
                webRequest.ContentType = contentType;
            }
            if (!string.IsNullOrWhiteSpace(dataString))
            {
                using (var streamWriter = new StreamWriter(webRequest.GetRequestStream()))
                {
                    streamWriter.Write(dataString);
                }
            }
            var responseText = GetWebResponse(webRequest);
            return responseText;
        }
        private static TResult CallRequest<TResult>(string endpoint, string method = "POST", Dictionary<string, string> headers = null, string dataString = null, string contentType = null) where TResult : class
        {
            var jsonSerializerSettings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                NullValueHandling = NullValueHandling.Ignore
            };
            var responseText = MakeRequest(endpoint, method, headers, dataString, contentType);
            return string.IsNullOrWhiteSpace(responseText) ? null : JsonConvert.DeserializeObject<TResult>(responseText);
        }
        private static string CallRequest<TData>(string endpoint, string method = "POST", Dictionary<string, string> headers = null, TData data = null, string contentType = null) where TData : class
        {
            var jsonSerializerSettings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                NullValueHandling = NullValueHandling.Ignore
            };
            var jsonData = JsonConvert.SerializeObject(data, jsonSerializerSettings);
            return MakeRequest(endpoint, method, headers, jsonData, contentType);
        }
        private static TResult CallRequest<TData, TResult>(string endpoint, string method = "POST", Dictionary<string, string> headers = null, TData data = null, string contentType = null) where TData : class where TResult : class
        {
            var jsonSerializerSettings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                NullValueHandling = NullValueHandling.Ignore
            };
            var jsonData = JsonConvert.SerializeObject(data, jsonSerializerSettings);
            var responseText = MakeRequest(endpoint, method, headers, jsonData, contentType);
            return string.IsNullOrWhiteSpace(responseText) ? null : JsonConvert.DeserializeObject<TResult>(responseText);
        }
        
        #endregion

        #region public methods
        public static void Download(string endpoint, Dictionary<string, string> headers, string savePath)
        {
            try
            {
                HttpWebRequest webRequest = CreateWebRequest(endpoint, "GET", headers);

                HttpWebResponse webResponse = (HttpWebResponse)webRequest.GetResponse();
                using (var responseStream = webResponse.GetResponseStream())
                {
                    using(var fileStream = File.OpenWrite(savePath))
                    {
                        responseStream.CopyTo(fileStream);
                    }
                }
            }
            catch (WebException ex)
            {
                using (var stream = ex.Response.GetResponseStream())
                using (var reader = new StreamReader(stream))
                {
                    var realExMsg = reader.ReadToEnd();
                    Console.WriteLine(realExMsg);
                    throw new Exception(realExMsg);
                }
            }
            catch (System.Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw ex;
            }
        }
        public static string Get(string endpoint, Dictionary<string, string> headers = null)
        {
            HttpWebRequest webRequest = CreateWebRequest(endpoint, "GET", headers);
            var responseText = GetWebResponse(webRequest);
            return responseText;
        }
        public static TResult Get<TResult>(string endpoint, Dictionary<string, string> headers = null) where TResult : class
        {
            var responseText = Get(endpoint, headers);
            return string.IsNullOrWhiteSpace(responseText) ? null : JsonConvert.DeserializeObject<TResult>(responseText);
        }
        public static string Post(string endpoint, Dictionary<string, string> headers = null, string jsonData = null, string contentType = null)
        {
            return MakeRequest(endpoint, "POST", headers, jsonData, contentType);
        }
        public static string Post<TData>(string endpoint, Dictionary<string, string> headers = null, TData data = null, string contentType = null) where TData : class
        {
            return CallRequest<TData>(endpoint, "POST", headers, data, contentType);
        }
        public static TResult Post<TData, TResult>(string endpoint, Dictionary<string, string> headers = null, TData data = null) where TData : class where TResult : class
        {
            return CallRequest<TData, TResult>(endpoint, "POST", headers, data);
        }
        public static TResult Post<TResult>(string endpoint, Dictionary<string, string> headers = null, string data = null, string contentType = null) where TResult : class
        {
            return CallRequest<TResult>(endpoint, "POST", headers, data, contentType);
        }
        public static string Put(string endpoint, Dictionary<string, string> headers = null, string jsonData = null, string contentType = null)
        {
            return MakeRequest(endpoint, "PUT", headers, jsonData, contentType);
        }
        public static string Put<TData>(string endpoint, Dictionary<string, string> headers = null, TData data = null, string contentType = null) where TData : class
        {
            return CallRequest<TData>(endpoint, "PUT", headers, data, contentType);
        }
        public static TResult Put<TData, TResult>(string endpoint, Dictionary<string, string> headers = null, TData data = null, string contentType = null) where TData : class where TResult : class
        {
            return CallRequest<TData, TResult>(endpoint, "PUT", headers, data, contentType);
        }
        public static string Patch(string endpoint, Dictionary<string, string> headers = null, string jsonData = null, string contentType = null)
        {
            return MakeRequest(endpoint, "PATCH", headers, jsonData, contentType);
        }
        public static string Patch<TData>(string endpoint, Dictionary<string, string> headers = null, TData data = null, string contentType = null) where TData : class
        {
            return CallRequest<TData>(endpoint, "PATCH", headers, data, contentType);
        }
        public static TResult Patch<TData, TResult>(string endpoint, Dictionary<string, string> headers = null, TData data = null, string contentType = null) where TData : class where TResult : class
        {
            return CallRequest<TData, TResult>(endpoint, "PATCH", headers, data, contentType);
        }
        public static string Delete(string endpoint, Dictionary<string, string> headers = null, string jsonData = null, string contentType = null)
        {
            return MakeRequest(endpoint, "DELETE", headers, jsonData, contentType);
        }
        public static string Delete<TData>(string endpoint, Dictionary<string, string> headers = null, TData data = null, string contentType = null) where TData : class
        {
            return CallRequest<TData>(endpoint, "DELETE", headers, data, contentType);
        }
        public static TResult Delete<TData, TResult>(string endpoint, Dictionary<string, string> headers = null, TData data = null, string contentType = null) where TData : class where TResult : class
        {
            return CallRequest<TData, TResult>(endpoint, "DELETE", headers, data, contentType);
        }
        #endregion
    }
}
