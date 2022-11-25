using ShareSimple.Models;
using System;

namespace ShareSimple.ViewModels
{
    public partial class CompanyModel
    {
        public CompanyModel()
        {

        }
        public CompanyModel(Company company)
        {
            Id = company.Id;
            Name = company.Name;
            Address = company.Address;
            PackageId = company.PackageId;
            Domain = company.Domain;
            LogoUrl = company.LogoUrl;
            IsOtpRequestdataView = company.IsOtpRequestdataView;
            IsActive = company.IsActive;
            AutoRenewal = company.AutoRenewal;
            SubscriptionType = company.SubscriptionType;
        }
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public Guid? PackageId { get; set; }
        public string Domain { get; set; }
        public string LogoUrl { get; set; }
        public bool? IsOtpRequestdataView { get; set; }
        public bool? IsActive { get; set; }
        public bool? AutoRenewal { get; set; }
        public string SubscriptionType { get; set; }
    }
}
