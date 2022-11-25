using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class AdminFolder
    {
        public AdminFolder()
        {
            SharedFolder = new HashSet<SharedFolder>();
            SharedFolderFile = new HashSet<SharedFolderFile>();
        }

        public Guid Id { get; set; }
        public string FolderName { get; set; }
        public Guid? CompanyId { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public bool? IsTrustedLink { get; set; }
        public bool? IsDeleted { get; set; }

        public Company Company { get; set; }
        public ICollection<SharedFolder> SharedFolder { get; set; }
        public ICollection<SharedFolderFile> SharedFolderFile { get; set; }
    }
}
