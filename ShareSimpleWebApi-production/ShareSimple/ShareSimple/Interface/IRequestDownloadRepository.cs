using ShareSimple.Models;
using System;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IRequestDownloadRepository
    {
        Task<RequestDownload> GetRequestDownloadById(Guid requestDownloadId);
        Task<RequestDownload> GetRequestDownloadByKey(string key);
        void InsertRequestDownload(RequestDownload requestDownload);
        void UpdateRequestDownload(RequestDownload requestDownload);
        void DeleteRequestDownload(Guid requestDownloadId);
        Task Save();
    }
}