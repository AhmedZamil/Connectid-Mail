using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class ShareDataFilesRepository : IShareDataFilesRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public ShareDataFilesRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }

        public void InsertShareDataFile(ShareDataFiles shareDatafile)
        {
            _context.ShareDataFiles.Add(shareDatafile);
        }
        public async Task<IEnumerable<ShareDataFiles>> GetShareDataFiles(Guid sharedataid)
        {
            return await _context.ShareDataFiles.Where(sd => sd.ShareDataId == sharedataid).ToListAsync();
        }

        public void DeleteShareDataFile(Guid sharedataFileId)
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
