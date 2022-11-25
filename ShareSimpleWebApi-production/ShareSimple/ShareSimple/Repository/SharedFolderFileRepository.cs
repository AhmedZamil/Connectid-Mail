using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class SharedFolderFileRepository : ISharedFolderFileRepository, IDisposable
    {
        private readonly SharesimpleContext _context;

        public SharedFolderFileRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<SharedFolderFile>> GetSharedFolderFiles()
        {
            return await _context.SharedFolderFile.ToListAsync();
        }
        public async Task<IEnumerable<SharedFolderFile>> GetSharedFolderFilesByFolderId(Guid folderId)
        {
            return await _context.SharedFolderFile.Include(s => s.File).Where(sf => sf.FolderId == folderId).Where(f => f.File.IsDeleted != true).Where(e => e.File.ExpDate > DateTime.UtcNow).ToListAsync();
        }
        public void InsertSharedFolderFile(SharedFolderFile sharedFolderFile)
        {
            _context.SharedFolderFile.Add(sharedFolderFile);
        }

        public void UpdateSharedFolderFile(SharedFolderFile sharedFolderFile)
        {
            _context.Entry(sharedFolderFile).State = EntityState.Modified;
        }
        public void DeleteSharedFolder(int id)
        {
            var sharedFolderFile = _context.SharedFolderFile.Find(id);
            _context.SharedFolderFile.Remove(sharedFolderFile);
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
