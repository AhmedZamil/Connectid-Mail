using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class RequestDownloadRepository : IRequestDownloadRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public RequestDownloadRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }

        public void InsertRequestDownload(RequestDownload requestDownload)
        {
            _context.RequestDownload.Add(requestDownload);
        }
        public async Task<RequestDownload> GetRequestDownloadById(Guid requestDownloadId)
        {
            //Thread.Sleep(10000);
            return await _context.RequestDownload.SingleOrDefaultAsync(sd => sd.Id == requestDownloadId);
        }
        public async Task<RequestDownload> GetRequestDownloadByKey(string key)
        {
            //Thread.Sleep(10000);
            return await _context.RequestDownload.SingleOrDefaultAsync(rd => rd.DownloadKey == key);
        }
        public void UpdateRequestDownload(RequestDownload requestDownload)
        {
            _context.Entry(requestDownload).State = EntityState.Modified;
        }
        public void DeleteRequestDownload(Guid requestDownloadId)
        {
            var requestDownload = _context.RequestDownload.Find(requestDownloadId);
            _context.RequestDownload.Remove(requestDownload);
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
