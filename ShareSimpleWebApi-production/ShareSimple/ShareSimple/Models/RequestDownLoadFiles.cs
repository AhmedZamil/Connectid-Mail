using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class RequestDownLoadFiles
    {
        public int Id { get; set; }
        public Guid? RequestDownloadId { get; set; }
        public Guid? FileMetadataId { get; set; }

        public FileMetaData FileMetadata { get; set; }
        public RequestDownload RequestDownload { get; set; }
    }
}
