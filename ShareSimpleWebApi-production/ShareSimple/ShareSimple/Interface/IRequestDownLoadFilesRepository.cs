using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IRequestDownLoadFilesRepository
    {
        void InsertRequestDownLoadFile(RequestDownLoadFiles requestDownLoadFile);
        void DeleteRequestDownLoadFile(int id);
        Task<IEnumerable<RequestDownLoadFiles>> GetRequestDownLoadFiles(Guid requestDownloadId);
        Task Save();
    }
}