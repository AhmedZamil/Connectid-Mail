using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class Package
    {
        public Guid Id { get; set; }
        public string PackageName { get; set; }
        public decimal? Price { get; set; }
        public decimal? TransactionPrice { get; set; }
        public string PriceUnit { get; set; }
    }
}
