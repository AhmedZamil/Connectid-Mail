using System;

namespace ShareSimple.Models
{
    public partial class Invoice
    {
        public Guid Id { get; set; }
        public DateTime InvoiceDate { get; set; }
        public Guid CompanyId { get; set; }
        public int? UserCount { get; set; }
        public decimal? InvoiceRate { get; set; }
        public decimal? InvoiceAmount { get; set; }
        public int? EconomicId { get; set; }
        public bool? IsSent { get; set; }
        public bool? IsPaid { get; set; }
        public DateTime? PaidDate { get; set; }
        public Company Company { get; set; }
    }
}
