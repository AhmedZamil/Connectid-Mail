using System;

namespace ShareSimple.Models
{
    public partial class CompanyHistory
    {
        public Guid Id { get; set; }
        public Guid? CompanyId { get; set; }
        public string PrevStatus { get; set; }
        public DateTime? StatusDate { get; set; }
        public string Status { get; set; }
        public string Comment { get; set; }
    }
}
