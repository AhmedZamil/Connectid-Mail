using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ShareSimple.Models
{
    public partial class User
    {
        public User()
        {
            PostData = new HashSet<PostData>();
            RequestDownload = new HashSet<RequestDownload>();
            ShareData = new HashSet<ShareData>();
            SharedFolder = new HashSet<SharedFolder>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool? Type { get; set; }
        public string Email { get; set; }
        public Guid? CompanyId { get; set; }
        public string AccessToken { get; set; }
        public DateTime? ExpiresOn { get; set; }
        public string UserToken { get; set; }
        public DateTime? ExtendedExpiresOn { get; set; }
        public Guid? CreatedBy { get; set; }
        public DateTime? CreateDate { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string RefreshToken { get; set; }
        public string ShareSimpleToken { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime? DeletedTime { get; set; }
        public bool? IsSuperAdmin { get; set; }
        public bool? IsContactPerson { get; set; }
        [MaxLength(10)]
        public string Language { get; set; }

        public Company Company { get; set; }
        public ICollection<PostData> PostData { get; set; }
        public ICollection<RequestDownload> RequestDownload { get; set; }
        public ICollection<ShareData> ShareData { get; set; }
        public ICollection<SharedFolder> SharedFolder { get; set; }
    }
}
