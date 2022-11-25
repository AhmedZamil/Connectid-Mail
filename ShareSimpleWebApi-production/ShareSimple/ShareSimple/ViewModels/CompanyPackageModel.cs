using System;
using System.Collections.Generic;

namespace ShareSimple.ViewModels
{
    public partial class CompanyPackageModel
    {

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public Guid PackageId { get; set; }
        public string Domain { get; set; }
        public decimal? TransactionPrice { get; set; }
        public decimal? Price { get; set; }
        public string PriceUnit { get; set; }
        public bool? IsActive { get; set; }
        public string PromotionCode { get; set; }
    }
}
