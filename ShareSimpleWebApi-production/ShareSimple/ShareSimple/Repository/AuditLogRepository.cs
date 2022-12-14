using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class AuditLogRepository : IAuditLogRepository, IDisposable
    {
        private readonly SharesimpleContext _context;

        public AuditLogRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<Company>> GetCompanies()
        {
            return await _context.Company.ToListAsync();
        }

        public async Task<Company> GetCompanyById(Guid companyId)
        {
            return await _context.Company.FindAsync(companyId);
        }

        public void InsertCompany(Company company)
        {
            _context.Company.Add(company);
        }

        public void UpdateCompany(Company company)
        {
            _context.Entry(company).State = EntityState.Modified;
        }
        public void DeleteCompany(Guid companyId)
        {
            var company = _context.Company.Find(companyId);
            _context.Company.Remove(company);
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
