using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class UserFile
    {
        public Guid Id { get; set; }
        public Guid? SenderId { get; set; }
        public Guid? ReceiverId { get; set; }
        public Guid? FileId { get; set; }
        public DateTime? SendDate { get; set; }
        public DateTime? ReceivedDate { get; set; }
        public bool? Mode { get; set; }

        public FileMetaData File { get; set; }
        public User Receiver { get; set; }
        public User Sender { get; set; }
    }
}
