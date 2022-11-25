using Microsoft.AspNetCore.Http;
using ShareSimple.Models;
using System;

namespace ShareSimple.Common.eConomic
{
    public interface IEconomicService
    {
        Customer GetCustomer(int id);
        Customer SaveCustomer(Company company, string currency, User contactPersion, HttpContext httpContext = null, Guid? userId = null);
        Invoice GenerateInvoice(Company company, DateTime invoiceDate, decimal unitPrice, string currency, int noOfUsers, HttpContext httpContext = null, Guid? userId = null);
        void DownloadInvoicePdf(int bookedInvoiceNo, string filepath);
    }
}
