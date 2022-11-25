using Microsoft.EntityFrameworkCore;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class InvoiceRepository : IInvoiceRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        private bool disposed = false;
        public InvoiceRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<Invoice>> GetInvoices()
        {
            return await _context.Invoice.ToListAsync();
        }
        public async Task<Invoice> GetInvoice(Guid invoiceId)
        {
            return await _context.Invoice.FindAsync(invoiceId);
        }
        public async Task<IEnumerable<Invoice>> GetCompanyInvoices(Guid companyId)
        {
            return await _context.Invoice.Where(u => u.CompanyId == companyId).ToListAsync();
        }
        public void InsertInvoice(Invoice invoice)
        {
            _context.Invoice.Add(invoice);
        }
        public void UpdateInvoice(Invoice invoice)
        {
            _context.Entry(invoice).State = EntityState.Modified;
        }
        public void DeleteInvoice(Guid invoiceId)
        {
            var invoice = _context.Invoice.Find(invoiceId);
            if (invoice != null)
                _context.Invoice.Remove(invoice);
        }
        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }
        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
