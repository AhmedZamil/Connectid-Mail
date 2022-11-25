using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class PriceCompanyRepository : IPriceCompanyRepository, IDisposable
    {
        private readonly SharesimpleContext _context;

        public PriceCompanyRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<PriceCompany>> GetPriceCompany()
        {
            return await _context.PriceCompany.ToListAsync();
        }
        public async Task<PriceCompany> GetPriceCompanyById(Guid packageId)
        {
            return await _context.PriceCompany.FindAsync(packageId);
        }

        public IQueryable<PriceCompany> GetPriceCompanyByCompanyId(Guid companyId)
        {
            return _context.PriceCompany.Where(x => x.CompanyId == companyId);
        }
        public void InsertPriceCompany(PriceCompany package)
        {
            _context.PriceCompany.Add(package);
        }
        public void UpdatePriceCompany(PriceCompany package)
        {
            _context.Entry(package).State = EntityState.Modified;
        }
        public void DeletePriceCompany(Guid packageId)
        {
            var package = _context.PriceCompany.Find(packageId);
            _context.PriceCompany.Remove(package);
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
