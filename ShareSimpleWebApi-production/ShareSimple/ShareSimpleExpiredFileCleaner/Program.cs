using Newtonsoft.Json;
using ShareSimpleExpiredFileCleaner.DataContact;
using System;
using System.Configuration;
using System.Runtime.InteropServices;

namespace ShareSimpleExpiredFileCleaner
{
    class Program
    {
        static string apiBaseUrl = ConfigurationManager.AppSettings["apiBaseUrl"];
        static Guid appId = Guid.Empty;
        static void Main(string[] args)
        {
            var assembly = typeof(Program).Assembly;
            var attribute = (GuidAttribute)assembly.GetCustomAttributes(typeof(GuidAttribute), true)[0];
            Guid.TryParse(attribute.Value, out appId);
            
            try
            {
                FilesInfo fileinfo = new FilesInfo();
                FileCleanerInfo cleanerInfo = fileinfo.GetAllFilesInfo(appId);
                Console.WriteLine("Total expired file:" + cleanerInfo.ExpiredFileCount + " and deleted file: " + cleanerInfo.DeletedFileCount);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            CheckCompanyStatus();
            CleanSurveillances();
        }

        public static void CheckCompanyStatus()
        {
            try
            {
                using (var client = new MyWebClient())
                {
                    client.Headers.Add("Content-Type:application/json");
                    client.Headers.Add("Accept:application/json");
                    client.Headers.Add($"appid:{appId}");
                    var result = client.DownloadString($"{apiBaseUrl}company/checkstatus");

                    CompanyStatus scheduleInfo = JsonConvert.DeserializeObject<CompanyStatus>(result);
                    Console.WriteLine(scheduleInfo.JobLog);
                    Console.WriteLine("Trial Ending Mail Sent: " + scheduleInfo.TrialEndingMailSent);
                    Console.WriteLine("Upgraded To Paid: " + scheduleInfo.UpgradedToPaid);
                    Console.WriteLine("Invoice Generated: " + scheduleInfo.InvoiceGenerated);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("CheckCompanyStatus error: "+ ex.Message);
            }
        }
        public static void CleanSurveillances()
        {
            try
            {
                using (var client = new MyWebClient())
                {
                    client.Headers.Add("Content-Type:application/json");
                    client.Headers.Add("Accept:application/json");
                    client.Headers.Add($"appid:{appId}");
                    var result = client.DownloadString($"{apiBaseUrl}surveillance/clean");
                    bool success = false;
                    bool.TryParse(result, out success);
                    if (success)
                    {
                        Console.WriteLine("Surveillance cleaned successfully");
                    }
                    else
                    {
                        Console.WriteLine("Surveillance cleaning failed. Please see surveillance log for detail");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("CleanSurveillances error: "+ ex.Message);
            }
        }
    }
}
