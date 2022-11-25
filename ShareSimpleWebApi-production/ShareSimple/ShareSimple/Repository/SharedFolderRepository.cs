using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class SharedFolderRepository : ISharedFolderRepository, IDisposable
    {
        private readonly SharesimpleContext _context;

        public SharedFolderRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<SharedFolder>> GetSharedFolders()
        {
            return await _context.SharedFolder.ToListAsync();
        }
        public async Task<IEnumerable<SharedFolder>> GetSharedFoldersByFolderId(Guid folderid)
        {
            return await _context.SharedFolder.Where(sf => sf.FolderId == folderid).ToListAsync();
        }

        public async Task<IEnumerable<SharedFolder>> GetSharedFolderByUserId(Guid userId)
        {
            return await _context.SharedFolder.Where(sf => sf.UserId == userId).ToListAsync();
        }
        public async Task<IEnumerable<SharedFolder>> GetSharedFolderByPostDataId(Guid postdataId)
        {
            return await _context.SharedFolder.Where(sf => sf.PostDataId == postdataId).ToListAsync();
        }

        public async Task<SharedFolder> GetSharedFolder(Guid userId, Guid folderid)
        {
            try
            {
                return await _context.SharedFolder.FirstOrDefaultAsync(sf => sf.UserId == userId && sf.FolderId == folderid);
            }
            catch (Exception ex)
            {
                return null;
            }

        }
        public void InsertSharedFolder(SharedFolder sharedFolder)
        {
            _context.SharedFolder.Add(sharedFolder);
        }

        public void UpdateSharedFolder(SharedFolder sharedFolder)
        {
            _context.Entry(sharedFolder).State = EntityState.Modified;
        }
        public void DeleteSharedFolder(int folderid)
        {
            var sharedFolder = _context.SharedFolder.Find(folderid);
            _context.SharedFolder.Remove(sharedFolder);
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
