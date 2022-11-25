using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class StorageConfigRepository : IStorageConfigRepository, IDisposable
    {
        private readonly SharesimpleContext _context;

        public StorageConfigRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<StorageConfig>> GetStorageConfigs()
        {
            return await _context.StorageConfig.ToListAsync();
        }
        public async Task<StorageConfig> GetStorageConfigById(Guid StorageConfigId)
        {
            return await _context.StorageConfig.FindAsync(StorageConfigId);
        }
        public async Task<StorageConfig> GetStorageConfigByCompId(Guid CompanyId)
        {
            return await _context.StorageConfig.FirstOrDefaultAsync(s => s.CompanyId == CompanyId);
        }
        public void InsertStorageConfig(StorageConfig StorageConfig)
        {
            _context.StorageConfig.Add(StorageConfig);
        }
        public void UpdateStorageConfig(StorageConfig StorageConfig)
        {
            _context.Entry(StorageConfig).State = EntityState.Modified;
        }
        public void DeleteStorageConfig(Guid StorageConfigId)
        {
            var StorageConfig = _context.StorageConfig.Find(StorageConfigId);
            _context.StorageConfig.Remove(StorageConfig);
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
