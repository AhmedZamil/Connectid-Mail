using DataBox.Push.Common;
using DataBox.Push.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DataBox.Push
{
    class Program
    {
        static void Main(string[] args)
        {
            var startTime = DateTime.Now;
            //TestDataBoxServices();
            //Connectid Mail
            PushConnectidMailData();
            //Connectid Personal
            //PushConnectidPersonalData();

            var endTime = DateTime.Now;

            Console.WriteLine("Operation Time: " + (endTime - startTime).TotalMinutes + " Minutes.");

            //Console.WriteLine("Press any key to continue....");
            //Console.ReadKey();
        }

        static void PushConnectidMailData()
        {
            var connectidMailService = new ConnectidMailService();
            string connectidMailToken = ConfigurationManager.AppSettings["token_connectid_mail"];
            var dataBoxService = new DataBoxService(connectidMailToken);

            //dataBoxService.Purge();

            var lastPush = dataBoxService.GetLastPush();
            var fromDate = GetlastDate(lastPush);
            Console.WriteLine("Last pushed into databox at: " + fromDate.ToLongDateString());
            //var fromDate = new DateTime(2018, 9, 1);

            while (fromDate <= DateTime.UtcNow)
            {
                var toDate = fromDate.AddDays(5);
                var requestModel = new ConnectidMailRequestModel { FromDate = fromDate, ToDate = toDate };
                Console.WriteLine("Getting Data from " + fromDate.ToString() + " - " + toDate.ToString());
                var data = connectidMailService.GetData(requestModel);
                var metrics = dataBoxService.PushConnectidMailData(data);
                foreach (string metric in metrics)
                {
                    Console.WriteLine(metric);
                }

                fromDate = toDate;
            }
        }

        static void PushConnectidPersonalData()
        {
            var connectidPersonalService = new ConnectidPersonalService();
            string userName = ConfigurationManager.AppSettings["connectid_personal_username"];
            string password = ConfigurationManager.AppSettings["connectid_personal_password"];
            var auth = connectidPersonalService.Login(userName, password);

            string connectidPersonalToken = ConfigurationManager.AppSettings["token_connectid_personal"];
            var dataBoxService = new DataBoxService(connectidPersonalToken);
            var lastPush = dataBoxService.GetLastPush();

            Console.WriteLine("Last pushed into databox at: " + lastPush.Request.Date.ToLongDateString());

            //var companyRequests = connectidPersonalService.GetCompanyRequests(auth);

            //var profiles = connectidPersonalService.GetProfileItems(auth);
            //var data = ConnectidPersonalToDatabox.GetProfiles(profiles);

            //dataBoxService.Purge();

            //var metrics = dataBoxService.PushConnectidPersonalData(data);

            //foreach (string metric in metrics)
            //{
            //    Console.WriteLine(metric);
            //}
        }

        static void TestDataBoxServices()
        {
            string connectidMailToken = ConfigurationManager.AppSettings["token_connectid_mail"];
            var dataBoxService = new DataBoxService(connectidMailToken);
            var metrics = dataBoxService.GetMetrics();

            Console.WriteLine("Metrics in Connectid Mail");
            foreach (var metric in metrics)
            {
                //dataBoxService.Delete(metric.Key);
                Console.WriteLine(metric.Title);
            }

            connectidMailToken = ConfigurationManager.AppSettings["token_connectid_personal"];
            dataBoxService = new DataBoxService(connectidMailToken);
            metrics = dataBoxService.GetMetrics();

            Console.WriteLine("Metrics in Connectid Personal");
            foreach (var metric in metrics)
            {
                //dataBoxService.Delete(metric.Key);
                Console.WriteLine(metric.Title);
            }
        }

        static DateTime GetlastDate(PushModel lastPush)
        {
            var lastdate = new DateTime(2018, 1, 1);
            foreach (var item in lastPush.Request.Body.Data)
            {
                var obj = JsonConvert.DeserializeObject<CustomerCount>(JsonConvert.SerializeObject(item));
                if (obj.Date > lastdate)
                    lastdate = obj.Date.Value;
            }
            return lastdate;
        }
    }
}
