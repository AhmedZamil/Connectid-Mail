using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class PostDataFilesRepository : IPostDataFilesRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public PostDataFilesRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }

        public void InsertPostDataFile(PostDataFiles postDatafile)
        {
            _context.PostDataFiles.Add(postDatafile);
        }
        public async Task<IEnumerable<PostDataFiles>> GetPostDataFiles(Guid postDataid,Guid receiverId)
        {
            return await _context.PostDataFiles.Include(s => s.File).Where(sd => sd.PostDataId == postDataid && sd.ReceiverId == receiverId).ToListAsync();
        }
        public async Task<IEnumerable<PostDataFiles>> GetPostDataFiles(Guid postDataid)
        {
            return await _context.PostDataFiles.Include(s => s.File)
                .Where(sd => sd.PostDataId == postDataid).ToListAsync();
                //.Where(f=>f.File.IsDeleted!=true).Where(e=>e.File.ExpDate>DateTime.UtcNow).ToListAsync();
        }
        public void DeletePostDataFile(Guid postDataFileId)
        {
            var postDataFile = _context.PostDataFiles.SingleOrDefault(f => f.FileId == postDataFileId);
            _context.PostDataFiles.Remove(postDataFile);
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
