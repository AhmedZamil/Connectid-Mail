using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class CompanyHistoryRepository : ICompanyHistoryRepository, IDisposable
    {
        private readonly SharesimpleContext _context;

        public CompanyHistoryRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<CompanyHistory>> GetCompanyHistories()
        {
            return await _context.CompanyHistory.ToListAsync();
        }
        public async Task<IEnumerable<CompanyHistory>> GetCompanyHistoriesById(Guid companyId)
        {
            return await _context.CompanyHistory.Where(x => x.CompanyId == companyId).ToListAsync();
        }
        public void InsertCompanyHistory(CompanyHistory companyHistory)
        {
            _context.CompanyHistory.Add(companyHistory);
        }
        public void UpdateCompanyHistory(CompanyHistory companyHistory)
        {
            _context.Entry(companyHistory).State = EntityState.Modified;
        }
        public void DeleteCompanyHistory(int id)
        {
            var companyHistory = _context.CompanyHistory.Find(id);
            _context.CompanyHistory.Remove(companyHistory);
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
