using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class ShareData
    {
        public ShareData()
        {
            AuditLog = new HashSet<AuditLog>();
            ShareDataFiles = new HashSet<ShareDataFiles>();
            ShareFileReceivers = new HashSet<ShareFileReceivers>();
        }

        public Guid Id { get; set; }
        public Guid? SenderId { get; set; }
        public DateTime? SendDate { get; set; }
        public DateTime? ReceivedDate { get; set; }
        public string UploadKey { get; set; }
        public short? Mode { get; set; }

        public User Sender { get; set; }
        public bool SmsAuthenticationEnabled { get; set; }
        public ICollection<AuditLog> AuditLog { get; set; }
        public ICollection<ShareDataFiles> ShareDataFiles { get; set; }
        public ICollection<ShareFileReceivers> ShareFileReceivers { get; set; }
    }
}
