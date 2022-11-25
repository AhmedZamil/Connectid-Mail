using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class UserRepository : IUserRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public UserRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _context.User.ToListAsync();
        }
        public async Task<IEnumerable<User>> GetUsersByCompanyId(Guid companyId, bool? onlyActive=false)
        {
            if ((onlyActive ?? false) == false)
            {
                return await _context.User
                    .Where(u => u.CompanyId == companyId).ToListAsync();
            }
            else
            {
                return await _context.User
                    .Where(u => u.IsDeleted != true && u.IsActive == true && u.CompanyId == companyId).ToListAsync();
            }
        }

        public async Task<User> GetUserById(Guid userId)
        {
            return await _context.User.FindAsync(userId);
        }
        public async Task<User> GetUserByEmail(string userEmail)
        {
            return await _context.User.SingleOrDefaultAsync(u => u.Email == userEmail && u.IsDeleted != true);
        }

        public void InsertUser(User user)
        {
            _context.User.Add(user);
        }

        public void DeleteUser(Guid userId)
        {
            var user = _context.User.Find(userId);
            _context.User.Remove(user);
        }

        public void UpdateUser(User user)
        {
            _context.Entry(user).State = EntityState.Modified;
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
