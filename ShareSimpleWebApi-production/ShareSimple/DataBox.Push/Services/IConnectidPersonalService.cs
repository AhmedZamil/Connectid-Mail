using DataBox.Push.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBox.Push.Services
{
    public interface IConnectidPersonalService
    {
        AuthModel Login(string userName, string password);
        List<CompanyRequestItem> GetCompanyRequests(AuthModel auth);
        object GetProfileStats(AuthModel auth);
        object GetRequestStats(AuthModel auth);
        List<RequestItem> GetRequestItems(AuthModel auth);
        ProfileList GetProfileItems(AuthModel auth);
        object GetOverviewStats(AuthModel auth);
    }
}
