using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class AdminFolderRepository : IAdminFolderRepository, IDisposable
    {
        private readonly SharesimpleContext _context;

        public AdminFolderRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<AdminFolder>> GetAdminFolders()
        {
            return await _context.AdminFolder.ToListAsync();
        }
        public async Task<IEnumerable<AdminFolder>> GetAdminFolders(Guid companyId)
        {
            return await _context.AdminFolder.Where(af => af.CompanyId == companyId).ToListAsync();
        }

        public async Task<AdminFolder> GetAdminFolderById(Guid folderid)
        {
            return await _context.AdminFolder.FindAsync(folderid);  
        }
        public void InsertAdminFolder(AdminFolder adminFolder)
        {
            _context.AdminFolder.Add(adminFolder);
        }

        public void UpdateAdminFolder(AdminFolder adminFolder)
        {
            _context.Entry(adminFolder).State = EntityState.Modified;
        }
        public void DeleteAdminFolder(Guid folderid)
        {
            var adminFolder = _context.AdminFolder.Find(folderid);
            _context.AdminFolder.Remove(adminFolder);
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
