using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class OtpRepository : IOtpRepository, IDisposable
    {
        private readonly SharesimpleContext _context;

        public OtpRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }

        public async Task<OtpInfo> GetOtp(Guid id)
        {
            return await _context.OtpInfo.FindAsync(id);
        }

        public async Task<OtpInfo> GetOtp(Guid resourceId, string receiver)
        {
            return await _context.OtpInfo.FirstOrDefaultAsync(x => x.ResourceId == resourceId && x.Receiver.ToLower() == receiver.ToLower());
        }

        public void InsertOtpInfo(OtpInfo otpInfo)
        {
            _context.OtpInfo.Add(otpInfo);
        }

        public void CreateOrUpdateIfExist(OtpInfo otpInfo)
        {
            var otpInDb = _context.OtpInfo.FirstOrDefault(x => x.ResourceId == otpInfo.ResourceId && x.Receiver.ToLower() == otpInfo.Receiver.ToLower());
            
            if (otpInDb == null)
            {
                otpInfo.Id = Guid.NewGuid();
                _context.OtpInfo.Add(otpInfo);
            }
            else
            {
                otpInDb.Otp = otpInfo.Otp;
                otpInDb.ExpireTime = otpInfo.ExpireTime;
                _context.Entry(otpInDb).State = EntityState.Modified;
            }

            _context.SaveChanges();
        }

        public void UpdateOtpInfo(OtpInfo otpInfo)
        {
            _context.Entry(otpInfo).State = EntityState.Modified;
        }
        public void DeleteOtpInfo(Guid id)
        {
            var otpInfo = _context.AdminFolder.Find(id);
            _context.AdminFolder.Remove(otpInfo);
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }


    }
}
