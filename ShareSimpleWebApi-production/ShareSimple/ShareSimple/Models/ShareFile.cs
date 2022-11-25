using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class ShareFile
    {
        public ShareFile()
        {
            ShareFileReceivers = new HashSet<ShareFileReceivers>();
        }

        public Guid Id { get; set; }
        public Guid? SenderId { get; set; }
        public Guid? FileId { get; set; }
        public DateTime? SendDate { get; set; }
        public DateTime? ReceivedDate { get; set; }
        public string UploadKey { get; set; }
        public bool? Mode { get; set; }

        public FileMetaData File { get; set; }
        public User Sender { get; set; }
        public ICollection<ShareFileReceivers> ShareFileReceivers { get; set; }
    }
}
