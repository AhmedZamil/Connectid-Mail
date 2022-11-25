using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IStorageConfigRepository : IDisposable
    {
        Task<IEnumerable<StorageConfig>> GetStorageConfigs();
        Task<StorageConfig> GetStorageConfigById(Guid StorageConfigId);
        Task<StorageConfig> GetStorageConfigByCompId(Guid CompanyId);
        void InsertStorageConfig(StorageConfig StorageConfig);
        void DeleteStorageConfig(Guid StorageConfigId);
        void UpdateStorageConfig(StorageConfig StorageConfig);
        Task Save();

    }
}
