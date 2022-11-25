using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class FileMetaData
    {
        public FileMetaData()
        {
            PostDataFiles = new HashSet<PostDataFiles>();
            RequestDownLoadFiles = new HashSet<RequestDownLoadFiles>();
            ShareDataFiles = new HashSet<ShareDataFiles>();
            SharedFolderFile = new HashSet<SharedFolderFile>();
        }

        public Guid FileId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public long? Size { get; set; }
        public string FileUrl { get; set; }
        public DateTime? ExpDate { get; set; }
        public string FileFolder { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime? DeletedDate { get; set; }
        public DateTime? CreatedDate { get; set; }

        public ICollection<PostDataFiles> PostDataFiles { get; set; }
        public ICollection<RequestDownLoadFiles> RequestDownLoadFiles { get; set; }
        public ICollection<ShareDataFiles> ShareDataFiles { get; set; }
        public ICollection<SharedFolderFile> SharedFolderFile { get; set; }
    }
}
