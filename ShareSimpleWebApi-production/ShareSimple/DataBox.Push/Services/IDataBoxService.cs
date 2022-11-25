using DataBox.Push.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBox.Push.Services
{
    public interface IDataBoxService
    {
        DataboxResponse PushData(string jsonData);
        List<Metric> GetMetrics();
        DataboxResponse Purge();

        PushModel GetLastPush();
        List<string> PushConnectidMailData(DataBoxData data);
        List<string> PushConnectidPersonalData(ConnectidPersonalModels data);

        object Delete(string kpiKey);
    }
}
