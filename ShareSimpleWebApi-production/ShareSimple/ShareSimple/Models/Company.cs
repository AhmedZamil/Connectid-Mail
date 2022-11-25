using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class Company: ICloneable
    {
        public Company()
        {
            AdminFolder = new HashSet<AdminFolder>();
            StorageConfig = new HashSet<StorageConfig>();
            User = new HashSet<User>();
            Invoice = new HashSet<Invoice>();
            ScheduledJobs = new HashSet<ScheduledJob>();
        }

        public object Clone()
        {
            return this.MemberwiseClone();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public Guid? PackageId { get; set; }
        public string Domain { get; set; }
        public string LogoUrl { get; set; }
        public string WebSite { get; set; }
        public string CountryCode { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Cvr { get; set; }
        public string Phone { get; set; }
        public bool? IsOtpRequestdataView { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? Updated { get; set; }
        public bool? IsActive { get; set; }
        public bool? AutoRenewal { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime? DeletedTime { get; set; }
        public string CrmId { get; set; }
        public int? EconomicId { get; set; }
        public DateTime? BillingStartDate { get; set; }
        public string SubscriptionType { get; set; }
        public string PromotionCode { get; set; }
        public bool? EnabledTrustedLink { get; set; }
        public ICollection<AdminFolder> AdminFolder { get; set; }
        public ICollection<StorageConfig> StorageConfig { get; set; }
        public ICollection<User> User { get; set; }
        public ICollection<Invoice> Invoice { get; set; }
        public ICollection<ScheduledJob> ScheduledJobs { get; set; }
    }
}
