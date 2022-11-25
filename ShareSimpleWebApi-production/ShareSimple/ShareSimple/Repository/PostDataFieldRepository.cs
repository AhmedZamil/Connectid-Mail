using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class PostDataFieldRepository : IPostDataFieldRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public PostDataFieldRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }

        public void InsertPostDataField(PostDataField postDataField)
        {
            _context.PostDataField.Add(postDataField);
        }

        public void UpdatePostDataField(PostDataField postDataField)
        {
            _context.Entry(postDataField).State = EntityState.Modified;
        }
        public async Task<IEnumerable<PostDataField>> GetPostDataFields(Guid postdataid)
        {
            return await _context.PostDataField.Where(pd => pd.PostDataId == postdataid).ToListAsync();
                
        }

        public async Task<PostDataField> GetPostDataFieldById(Guid fieldid)
        {
            return await _context.PostDataField.FindAsync(fieldid);
        }

        public void DeletePostDataField(Guid postDataFieldId)
        {
            var postDataField = _context.PostDataField.Find(postDataFieldId);
            _context.PostDataField.Remove(postDataField);
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
