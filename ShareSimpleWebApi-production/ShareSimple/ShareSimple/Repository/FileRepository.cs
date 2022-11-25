using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class FileRepository : IFileRepository, IDisposable
    {
        private readonly SharesimpleContext _context;

        public FileRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<FileMetaData>> GetAllFileMetadatas()
        {
            return await _context.FileMetaData.ToListAsync();
        }

        public void InsertFile(FileMetaData fileMetaData)
        {
            _context.FileMetaData.Add(fileMetaData);
        }
        public async Task<FileMetaData> GetFileById(Guid fileid)
        {
            return await _context.FileMetaData.FindAsync(fileid);
        }

        public void DeleteFile(Guid fileId)
        {
            var fileMetaData = _context.FileMetaData.Find(fileId);
            _context.FileMetaData.Remove(fileMetaData);
        }

        public void UpdateFile(FileMetaData file)
        {
            _context.Entry(file).State = EntityState.Modified;
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

    }
}
