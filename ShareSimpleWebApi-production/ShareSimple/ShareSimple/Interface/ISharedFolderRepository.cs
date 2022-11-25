using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface ISharedFolderRepository : IDisposable
    {
        Task<IEnumerable<SharedFolder>> GetSharedFolders();
        Task<IEnumerable<SharedFolder>> GetSharedFolderByUserId(Guid userId);
        Task<IEnumerable<SharedFolder>> GetSharedFoldersByFolderId(Guid folderid);
        Task<IEnumerable<SharedFolder>> GetSharedFolderByPostDataId(Guid postdataId);
        Task<SharedFolder> GetSharedFolder(Guid userId, Guid folderid);
        void InsertSharedFolder(SharedFolder sharedFolder);
        void UpdateSharedFolder(SharedFolder sharedFolder);
        void DeleteSharedFolder(int folderid);
        Task Save();
        
    }
}
