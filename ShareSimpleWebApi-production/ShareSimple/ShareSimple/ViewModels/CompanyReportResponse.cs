using ShareSimple.Models;
using System;

namespace ShareSimple.ViewModels
{
    public class CompanyReportResponse
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Domain { get; set; }
        public string SubscriptionType { get; set; }
        public string Address { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? Updated { get; set; }
        public bool? IsActive { get; set; }
        public bool? AutoRenewal { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime? DeletedTime { get; set; }
        public UserModel AdminUser { get; set; }
        public PriceCompany Package { get; set; }
        public int NoOfActiveUsers { get; set; }
        public string PromotionCode { get; set; }
    }
}
