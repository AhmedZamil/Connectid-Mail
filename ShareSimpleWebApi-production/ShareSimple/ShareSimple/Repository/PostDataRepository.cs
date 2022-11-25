using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class PostDataRepository : IPostDataRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public PostDataRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }

        public void InsertPostData(PostData postData)
        {
            _context.PostData.Add(postData);
        }
        public async Task<PostData> GetPostDataById(Guid postDataid)
        {
            //Thread.Sleep(10000);
            return await _context.PostData.SingleOrDefaultAsync(sd => sd.Id == postDataid);
        }
        public async Task<IEnumerable<PostData>> GetAllPostData(Guid senderId)
        {
            return await _context.PostData.Where(sd => sd.SenderId == senderId).ToListAsync();
        }

        public async Task<IEnumerable<PostData>> GetAllPostData()
        {
            return await _context.PostData.ToListAsync();
        }
        public async Task<PostData> GetPostDataByKey(string key)
        {
            //Thread.Sleep(10000);
            return await _context.PostData.SingleOrDefaultAsync(sd => sd.PostDataKey == key);
        }
        public void UpdatePostData(PostData postData)
        {
            _context.Entry(postData).State = EntityState.Modified;
        }
        public void DeletePostData(Guid postdataId)
        {
            throw new NotImplementedException();
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
