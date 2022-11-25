using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class PackageRepository : IPackageRepository, IDisposable
    {
        private readonly SharesimpleContext _context;

        public PackageRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<Package>> GetPackages()
        {
            return await _context.Package.ToListAsync();
        }
        public async Task<Package> GetPackageById(Guid packageId)
        {
            return await _context.Package.FindAsync(packageId);
        }
        public void InsertPackage(Package package)
        {
            _context.Package.Add(package);
        }
        public void UpdatePackage(Package package)
        {
            _context.Entry(package).State = EntityState.Modified;
        }
        public void DeletePackage(Guid packageId)
        {
            var package = _context.Package.Find(packageId);
            _context.Package.Remove(package);
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
