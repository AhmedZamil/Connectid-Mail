using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class ShareFileReceiverRepository : IShareFileReceiverRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public ShareFileReceiverRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public void InsertShareFileReceiver(ShareFileReceivers shareFileReceiver)
        {
            _context.ShareFileReceivers.Add(shareFileReceiver);
        }
        public async Task<IEnumerable<ShareFileReceivers>> GetReceivers(Guid sharedataid)
        {
            return await _context.ShareFileReceivers
                .Where(sf => sf.ShareDataId == sharedataid).ToListAsync();
        }
        public async Task<ShareFileReceivers> GetReceiverById(Guid receiverid)
        {
            return await _context.ShareFileReceivers
                .SingleOrDefaultAsync(sf => sf.ReceiverId == receiverid);
        }
        public void UpdateShareDataReceiver(ShareFileReceivers shareFileReceiver)
        {
            _context.Entry(shareFileReceiver).State = EntityState.Modified;
        }
        public async Task<ShareFileReceivers> GetShareDataReceiver(string otp)
        {
            //Thread.Sleep(10000);
            return await _context.ShareFileReceivers.SingleOrDefaultAsync(u => u.Otp == otp);
        }
        public async Task<IEnumerable<ShareFileReceivers>> GetShareDataReceiverByShareId(Guid shareDataId)
        {
            return await _context.ShareFileReceivers.Where(sd => sd.ShareDataId == shareDataId).ToListAsync();
        }
        public void DeleteShareFileReceiver(Guid shareFileReceiversId)
        {
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
