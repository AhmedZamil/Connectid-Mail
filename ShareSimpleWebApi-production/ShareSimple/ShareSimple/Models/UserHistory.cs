using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class UserHistory
    {
        public int Id { get; set; }
        public Guid? UserId { get; set; }
        public Guid? CompanyId { get; set; }
        public DateTime? ActivateDate { get; set; }
        public DateTime? DeactivateDate { get; set; }
        public bool? IsActive { get; set; }
    }
}
