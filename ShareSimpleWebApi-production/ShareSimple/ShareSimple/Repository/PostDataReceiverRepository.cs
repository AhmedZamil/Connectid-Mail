using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class PostDataReceiverRepository : IPostDataReceiverRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public PostDataReceiverRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }

        public void InsertPostDataReceiver(PostDataReceivers postDataReceivers)
        {
            _context.PostDataReceivers.Add(postDataReceivers);
        }
        public async Task<IEnumerable<PostDataReceivers>> GetReceivers(Guid postdataid)
        {

            return await _context.PostDataReceivers
            .Where(sf => sf.PostDataId == postdataid).ToListAsync();


        }
        public void UpdatePostDataReceiver(PostDataReceivers postDataReceiver)
        {
            _context.Entry(postDataReceiver).State = EntityState.Modified;
        }
        public async Task<PostDataReceivers> GetPostDataReceiver(string otp)
        {
            //Thread.Sleep(10000);
            return await _context.PostDataReceivers.SingleOrDefaultAsync(u => u.Otp == otp);
        }

        public async Task<PostDataReceivers> GetReceiverById(Guid receiverid)
        {
            return await _context.PostDataReceivers
                .SingleOrDefaultAsync(sf => sf.ReceiverId == receiverid);
        }

        public async Task<PostDataReceivers> GetPostDataReceiverById(Guid receiverid, Guid postdataid)
        {
            return await _context.PostDataReceivers
                .SingleOrDefaultAsync(sf => sf.ReceiverId == receiverid && sf.PostDataId == postdataid);
        }

        public void DeletePostDataReceiver(Guid postDataReceiverId)
        {
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
