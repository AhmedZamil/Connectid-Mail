using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class AdminFolderModel
    {
        public Guid Id { get; set; }
        public string FolderName { get; set; }
        public Guid? CompanyId { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public bool? IsDeleted { get; set; }
        public bool? IsTrustedLink { get; set; }
    }
}
