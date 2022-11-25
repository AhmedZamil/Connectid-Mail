using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class ConsentRepository : IConsentRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        public ConsentRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<Consent>> GetConsents(Guid? companyId)
        {
            return await _context.Consent.Where(c => c.CompanyId == companyId).ToListAsync();
        }

        public async Task<Consent> GetConsentById(Guid ConsentId)
        {
            return await _context.Consent.FindAsync(ConsentId);
        }
        public async Task<IEnumerable<Consent>> GetConsentsByType(Guid? companyId, string type)
        {
            return await _context.Consent.Where(c => c.CompanyId == companyId && c.Type == type).ToListAsync();
        }
        public async Task<Consent> GetConsentByType(Guid? companyId, string type)
        {
            return await _context.Consent.FirstOrDefaultAsync(c => c.CompanyId == companyId && c.Type == type && c.IsActive == true);
        }
        public async Task<Consent> GetConsentByName(string name)
        {
            //Thread.Sleep(10000);
            return await _context.Consent.SingleOrDefaultAsync(u => u.Name == name);
        }

        public void InsertConsent(Consent consent)
        {
            _context.Consent.Add(consent);
        }

        public void DeleteConsent(Guid id)
        {
            var consent = _context.Consent.Find(id);
            _context.Consent.Remove(consent);
        }

        public void UpdateConsent(Consent consent)
        {
            _context.Entry(consent).State = EntityState.Modified;
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
