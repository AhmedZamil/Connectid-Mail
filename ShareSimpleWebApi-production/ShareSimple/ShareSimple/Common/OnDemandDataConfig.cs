using System;

namespace ShareSimple.Common
{
    public class OnDemandDataConfig
    {
        public Guid? DefaultCompanyPackageId { get; set; }
        public Guid? SharedConsentId { get; set; }
        public Guid? RequestConsentId { get; set; }
    }
}
