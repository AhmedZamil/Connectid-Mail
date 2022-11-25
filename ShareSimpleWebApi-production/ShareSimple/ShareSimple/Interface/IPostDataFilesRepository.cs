using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IPostDataFilesRepository
    {

        void InsertPostDataFile(PostDataFiles postDatafile);
        void DeletePostDataFile(Guid postDataFileId);
        Task<IEnumerable<PostDataFiles>> GetPostDataFiles(Guid postDataid, Guid receiverId);
        Task<IEnumerable<PostDataFiles>> GetPostDataFiles(Guid postDataid);
        Task Save();
    }
}