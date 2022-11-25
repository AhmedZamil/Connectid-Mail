using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IPostDataRepository
    {
        Task<PostData> GetPostDataById(Guid postDataid);
        Task<PostData> GetPostDataByKey(string key);
        Task<IEnumerable<PostData>> GetAllPostData(Guid senderId);
        Task<IEnumerable<PostData>> GetAllPostData();
        void InsertPostData(PostData PostData);
        void UpdatePostData(PostData shareData);
        void DeletePostData(Guid postdataId);
        Task Save();
    }
}