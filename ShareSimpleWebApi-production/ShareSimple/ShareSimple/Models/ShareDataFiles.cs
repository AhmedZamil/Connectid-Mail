using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class ShareDataFiles
    {
        public int Id { get; set; }
        public Guid? FileId { get; set; }
        public Guid? ShareDataId { get; set; }
        public short? Mode { get; set; }

        public FileMetaData File { get; set; }
        public ShareData ShareData { get; set; }
    }
}
