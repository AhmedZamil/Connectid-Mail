using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class SharedFolder
    {
        public int Id { get; set; }
        public Guid? FolderId { get; set; }
        public Guid? UserId { get; set; }
        public DateTime? SharedDate { get; set; }
        public bool? IsGenerated { get; set; }
        public Guid? PostDataId { get; set; }

        public AdminFolder Folder { get; set; }
        public PostData PostData { get; set; }
        public User User { get; set; }
    }
}
