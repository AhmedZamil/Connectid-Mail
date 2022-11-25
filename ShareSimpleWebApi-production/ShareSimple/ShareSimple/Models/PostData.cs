using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class PostData
    {
        public PostData()
        {
            AuditLog = new HashSet<AuditLog>();
            PostDataField = new HashSet<PostDataField>();
            PostDataFiles = new HashSet<PostDataFiles>();
            SharedFolder = new HashSet<SharedFolder>();
        }

        public Guid Id { get; set; }
        public Guid? SenderId { get; set; }
        public string SenderEmail { get; set; }
        public string PostDataKey { get; set; }
        public short? Mode { get; set; }
        public DateTime? SendDate { get; set; }

        public User Sender { get; set; }
        public ICollection<AuditLog> AuditLog { get; set; }
        public ICollection<PostDataField> PostDataField { get; set; }
        public ICollection<PostDataFiles> PostDataFiles { get; set; }
        public ICollection<SharedFolder> SharedFolder { get; set; }
    }
}
