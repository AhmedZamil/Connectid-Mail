using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IAdminFolderRepository : IDisposable
    {
        Task<IEnumerable<AdminFolder>> GetAdminFolders();
        Task<IEnumerable<AdminFolder>> GetAdminFolders(Guid companyId);
        Task<AdminFolder> GetAdminFolderById(Guid folderid);
        void InsertAdminFolder(AdminFolder adminFolder);
        void DeleteAdminFolder(Guid folderid);
        void UpdateAdminFolder(AdminFolder adminFolder);
        Task Save();
        
    }
}
