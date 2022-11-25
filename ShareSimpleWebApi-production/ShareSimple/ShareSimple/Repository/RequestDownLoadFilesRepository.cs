using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class RequestDownLoadFilesRepository : IRequestDownLoadFilesRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public RequestDownLoadFilesRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }

        public void InsertRequestDownLoadFile(RequestDownLoadFiles requestDownLoadFile)
        {
            _context.RequestDownLoadFiles.Add(requestDownLoadFile);
        }
        public async Task<IEnumerable<RequestDownLoadFiles>> GetRequestDownLoadFiles(Guid requestDownloadId)
        {
            return await _context.RequestDownLoadFiles.Where(sd => sd.RequestDownloadId == requestDownloadId).ToListAsync();
        }

        public void DeleteRequestDownLoadFile(int id)
        {
            var requestDownLoadFile = _context.RequestDownLoadFiles.Find(id);
            _context.RequestDownLoadFiles.Remove(requestDownLoadFile);
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
