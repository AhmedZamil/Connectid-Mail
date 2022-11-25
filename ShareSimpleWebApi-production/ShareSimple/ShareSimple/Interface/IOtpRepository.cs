using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IOtpRepository : IDisposable
    {        
        Task<OtpInfo> GetOtp(Guid id);
        Task<OtpInfo> GetOtp(Guid resourceId, string receiver);
        void InsertOtpInfo(OtpInfo otpInfo);
        void CreateOrUpdateIfExist(OtpInfo otpInfo);
        void DeleteOtpInfo(Guid otpId);
        void UpdateOtpInfo(OtpInfo otpInfo);
        Task Save();
    }
}
