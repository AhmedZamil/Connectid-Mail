using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class RequestDownloadModel
    {
        public Guid? Id { get; set; }
        public Guid? ReceiverId { get; set; }
        public DateTime? RequestDate { get; set; }
        public Guid? SenderId { get; set; }
        public User Sender { get; set; }
        public IEnumerable<FileMetaData> Files { get; set; }
    }
}
