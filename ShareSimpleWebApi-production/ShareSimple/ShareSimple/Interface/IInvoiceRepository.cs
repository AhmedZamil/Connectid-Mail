using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IInvoiceRepository : IDisposable
    {
        Task<IEnumerable<Invoice>> GetInvoices();
        Task<Invoice> GetInvoice(Guid invoiceId);
        Task<IEnumerable<Invoice>> GetCompanyInvoices(Guid companyId);
        void InsertInvoice(Invoice invoice);
        void DeleteInvoice(Guid invoiceId);
        void UpdateInvoice(Invoice invoice);
        Task Save();
    }
}
