using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataBox.Push.Common;

namespace DataBox.Push.Services
{
    public class ConnectidMailService : IConnectidMailService
    {

        private readonly string _apiBaseUrl;
        private readonly Dictionary<string, string> _requestHeaders;
        public ConnectidMailService()
        {
            _apiBaseUrl = ConfigurationManager.AppSettings["apiBaseUrl"];
            _requestHeaders = new Dictionary<string, string>()
            {
                { "client_id", "565edad3-d791-46df-9d1b-c256ca7d6cea" },
                { "client_secrete", "09peVpHX30adG8JWyn1s6g=="},
                { "Content-Type","application/json" }
            };
        }
        public DataBoxData GetData(ConnectidMailRequestModel requestModel)
        {
            string apiUrl = _apiBaseUrl + "databox?fromDate=" + requestModel.FromDate.Value.ToString() + "&toDate="+requestModel.ToDate.Value.ToString();
            var data = RestClient.Get<DataBoxData>(apiUrl, _requestHeaders);
            return data;
        }
    }
}
