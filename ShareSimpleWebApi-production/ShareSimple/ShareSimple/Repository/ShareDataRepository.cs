using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class ShareDataRepository : IShareDataRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public ShareDataRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }

        public void InsertShareData(ShareData shareData)
        {
            _context.ShareData.Add(shareData);
        }
        public async Task<IEnumerable<ShareData>> GetAllShareData()
        {
            return await _context.ShareData.ToListAsync();
        }
        public IQueryable<Guid?> GetAllShareDataBySender()
        {
            return _context.ShareData.Select(m => m.SenderId).Distinct();
        }
        public async Task<IEnumerable<ShareData>> GetAllShareData(Guid senderId)
        {
            return await _context.ShareData.Where(sd => sd.SenderId == senderId).ToListAsync();
        }
        public async Task<ShareData> GetShareDataById(Guid shareDataid)
        {
            //Thread.Sleep(10000);
            return await _context.ShareData.SingleOrDefaultAsync(sd => sd.Id == shareDataid);
        }
        public async Task<ShareData> GetShareDataByKey(string key)
        {
            //Thread.Sleep(10000);
            return await _context.ShareData.SingleOrDefaultAsync(sd => sd.UploadKey == key);
        }
        public void UpdateShareData(ShareData shareData)
        {
            _context.Entry(shareData).State = EntityState.Modified;
        }
        public void DeleteShareData(Guid sharedataId)
        {
            throw new NotImplementedException();
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
