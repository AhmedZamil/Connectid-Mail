using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface ISharedFolderFileRepository : IDisposable
    {
        Task<IEnumerable<SharedFolderFile>> GetSharedFolderFiles();
        Task<IEnumerable<SharedFolderFile>> GetSharedFolderFilesByFolderId(Guid folderId);
        void InsertSharedFolderFile(SharedFolderFile sharedFolderFile);
        void UpdateSharedFolderFile(SharedFolderFile sharedFolderFile);
        void DeleteSharedFolder(int id);
        Task Save();
        
    }
}
