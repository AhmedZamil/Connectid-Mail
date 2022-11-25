using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IShareDataRepository
    {
        Task<ShareData> GetShareDataById(Guid shareDataid);
        Task<ShareData> GetShareDataByKey(string key);
        Task<IEnumerable<ShareData>> GetAllShareData();
        void InsertShareData(ShareData shareData);
        void UpdateShareData(ShareData shareData);
        void DeleteShareData(Guid sharedataId);
        Task<IEnumerable<ShareData>> GetAllShareData(Guid senderId);
        IQueryable<Guid?> GetAllShareDataBySender();
        Task Save();
    }
}