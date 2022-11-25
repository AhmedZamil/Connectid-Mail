using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IShareDataFilesRepository
    {
       
        void InsertShareDataFile(ShareDataFiles shareDatafile);
        void DeleteShareDataFile(Guid sharedataFileId);
        Task<IEnumerable<ShareDataFiles>> GetShareDataFiles(Guid sharedataid);
        Task Save();
    }
}