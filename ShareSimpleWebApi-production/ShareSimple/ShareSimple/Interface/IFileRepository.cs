using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IFileRepository
    {
        Task<FileMetaData> GetFileById(Guid fileid);
        Task<IEnumerable<FileMetaData>> GetAllFileMetadatas();
        void InsertFile(FileMetaData fileMetaData);
        void UpdateFile(FileMetaData file);
        void DeleteFile(Guid fileId);
        Task Save();
    }
}