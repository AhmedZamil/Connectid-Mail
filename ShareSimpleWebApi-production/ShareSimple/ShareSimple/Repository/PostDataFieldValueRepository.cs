using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class PostDataFieldValueRepository : IPostDataFieldValueRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public PostDataFieldValueRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }

        public void InsertPostDataFieldValue(PostDataFieldValue postDataFieldValue)
        {
            _context.PostDataFieldValue.Add(postDataFieldValue);
        }

        public void UpdatePostDataField(PostDataFieldValue postDataFieldValue)
        {
            _context.Entry(postDataFieldValue).State = EntityState.Modified;
        }
        public async Task<PostDataFieldValue> GetPostDataFieldValueById(Guid fieldId, Guid receiverId)
        {
            try
            {
                return await _context.PostDataFieldValue.SingleOrDefaultAsync(pv => pv.FieldId == fieldId && pv.ReceiverId == receiverId);
            }
            catch (Exception ex)
            {
                return null;
            }

        }
        public async Task<IEnumerable<PostDataFieldValue>> GetPostDataFieldValueByReceiverId(Guid receiverId)
        {
            try
            {
                return await _context.PostDataFieldValue.Where(pv => pv.ReceiverId == receiverId).ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }

        }
        public async Task<PostDataFieldValue> GetPostDataFieldValueById(Guid fieldId)
        {
            return await _context.PostDataFieldValue.SingleOrDefaultAsync(pv => pv.FieldId == fieldId);
        }
        public void DeletePostDataFieldValue(int id)
        {
            var postDataFieldValue = _context.PostDataFieldValue.Find(id);
            _context.PostDataFieldValue.Remove(postDataFieldValue);
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
