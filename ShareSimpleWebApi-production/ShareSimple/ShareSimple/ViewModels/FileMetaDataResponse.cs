using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class FileMetaDataResponse
    {
       

        public Guid FileId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public long? Size { get; set; }
        public string FileUrl { get; set; }
        public DateTime? ExpDate { get; set; }
        public string FileFolder { get; set; }
        public short? Mode { get; set; }
        public DateTime? DeletedDate { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
