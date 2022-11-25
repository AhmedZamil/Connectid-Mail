using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class AuditLog
    {
        public int Id { get; set; }
        public Guid? PostDataId { get; set; }
        public Guid? ShareDataId { get; set; }
        public DateTime? SentDate { get; set; }
        public DateTime? ReceivedDate { get; set; }

        public PostData PostData { get; set; }
        public ShareData ShareData { get; set; }
    }
}
