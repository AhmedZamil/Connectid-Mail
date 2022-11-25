using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class PostDataFiles
    {
        public int Id { get; set; }
        public Guid? FileId { get; set; }
        public Guid? PostDataId { get; set; }
        public Guid? PostDataFieldId { get; set; }
        public short? Mode { get; set; }
        public Guid? ReceiverId { get; set; }

        public FileMetaData File { get; set; }
        public PostData PostData { get; set; }
        public PostDataField PostDataField { get; set; }
    }
}
