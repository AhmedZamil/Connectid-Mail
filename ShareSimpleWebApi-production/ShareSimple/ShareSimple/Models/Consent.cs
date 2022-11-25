using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class Consent
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ConsentText { get; set; }
        public string Type { get; set; }
        public bool? IsActive { get; set; }
        public Guid? CompanyId { get; set; }
        public Guid? UserId { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? Updated { get; set; }
    }
}
