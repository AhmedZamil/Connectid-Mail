using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class UserHistoryRepository : IUserHistoryRepository, IDisposable
    {
        private readonly SharesimpleContext _context;

        public UserHistoryRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<UserHistory>> GetUserHistories()
        {
            return await _context.UserHistory.ToListAsync();
        }
        public async Task<IEnumerable<UserHistory>> GetUserHistoriesById(Guid companyId)
        {
            return await _context.UserHistory.Where(uh => uh.CompanyId == companyId && uh.IsActive == true).ToListAsync();
        }
        public void InsertUserHistory(UserHistory userHistory)
        {
            _context.UserHistory.Add(userHistory);
        }
        public void UpdateUserHistory(UserHistory userHistory)
        {
            _context.Entry(userHistory).State = EntityState.Modified;
        }
        public void DeleteUserHistory(int id)
        {
            var userHistory = _context.UserHistory.Find(id);
            _context.UserHistory.Remove(userHistory);
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
