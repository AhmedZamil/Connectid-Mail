using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class RequestDownload
    {
        public RequestDownload()
        {
            RequestDownLoadFiles = new HashSet<RequestDownLoadFiles>();
        }

        public Guid Id { get; set; }
        public Guid? ReceiverId { get; set; }
        public DateTime? RequestDate { get; set; }
        public Guid? SenderId { get; set; }
        public string DownloadKey { get; set; }

        public User Sender { get; set; }
        public ICollection<RequestDownLoadFiles> RequestDownLoadFiles { get; set; }
    }
}
