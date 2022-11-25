using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class PostDataResponse
    {

        public Guid Id { get; set; }
        public Guid? SenderId { get; set; }
        public Guid? ReceiverId { get; set; }
        public string SenderName { get; set; }
        public string SenderEmail { get; set; }
        public string PostDataKey { get; set; }
        public short? Mode { get; set; }
        public DateTime? SentDate { get; set; }
        public int NoOfFiles { get; set; }
        public User Sender { get; set; }
        public string FolderName { get; set; }
        public IList<PostDataFieldModel> PostDataFields { get; set; }
        public IList<FileMetaDataResponse> PostDataFiles { get; set; }
    }
}
