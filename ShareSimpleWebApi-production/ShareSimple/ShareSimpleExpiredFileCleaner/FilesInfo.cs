using Newtonsoft.Json;
using ShareSimpleExpiredFileCleaner.DataContact;
using System;
using System.Configuration;

namespace ShareSimpleExpiredFileCleaner
{
    class FilesInfo
    {
        static string apiBaseUrl = ConfigurationManager.AppSettings["apiBaseUrl"];
        public FileCleanerInfo GetAllFilesInfo(Guid appId)
        {
            using (var client = new MyWebClient())
            {
                client.Headers.Add("Content-Type:application/json");
                client.Headers.Add("Accept:application/json");
                client.Headers.Add($"appid:{appId}");
                var result = client.DownloadString($"{apiBaseUrl}file/deleteexpiredfile");

                FileCleanerInfo cleanerLog = JsonConvert.DeserializeObject<FileCleanerInfo>(result);
                return cleanerLog;
            }
        }
    }
}
