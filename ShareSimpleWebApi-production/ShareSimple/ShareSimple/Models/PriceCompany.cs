using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class PriceCompany
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public decimal? TransactionPrice { get; set; }
        public decimal? Price { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? Updated { get; set; }
        public bool? IsActive { get; set; }
        public string PriceUnit { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
