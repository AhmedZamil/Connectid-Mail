using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class ShareFolderFile
    {
        public int Id { get; set; }
        public Guid? FolderId { get; set; }
        public Guid? FileId { get; set; }

        public FileMetaData File { get; set; }
        public AdminFolder Folder { get; set; }
    }
}
