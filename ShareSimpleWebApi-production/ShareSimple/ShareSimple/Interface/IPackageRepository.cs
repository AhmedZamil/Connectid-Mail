using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IPackageRepository : IDisposable
    {
        Task<IEnumerable<Package>> GetPackages();
        Task<Package> GetPackageById(Guid packageId);
        void InsertPackage(Package package);
        void DeletePackage(Guid packageId);
        void UpdatePackage(Package package);
        Task Save();

    }
}
