using ShareSimple.Models;
using System;

namespace ShareSimple.ViewModels
{
    public partial class UserModel
    {
        public UserModel()
        {

        }
        public UserModel(User user)
        {
            Id = user.Id;
            Name = user.Name;
            Type = user.Type;
            Email = user.Email;
            CompanyId = user.CompanyId;
            AccessToken = user.AccessToken;
            ExpiresOn = user.ExpiresOn;
            CreateDate = user.CreateDate;
            IsActive = user.IsActive;
            IsSuperAdmin = user.IsSuperAdmin;
            ExtendedExpiresOn = user.ExtendedExpiresOn;
            Language = user.Language;
            ShareSimpleToken = user.ShareSimpleToken;
        }
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool? Type { get; set; }
        public string Email { get; set; }
        public Guid? CompanyId { get; set; }
        public string AccessToken { get; set; }
        public DateTime? ExpiresOn { get; set; }
        public DateTime? CreateDate { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsSuperAdmin { get; set; }

        public DateTime? ExtendedExpiresOn { get; set; }
        public Boolean ExtendedLifeTimeToken { get; set; }
        public string Language { get; set; }

        public CompanyModel Company { get; set; }
        public string ShareSimpleToken { get; set; }

    }
}
