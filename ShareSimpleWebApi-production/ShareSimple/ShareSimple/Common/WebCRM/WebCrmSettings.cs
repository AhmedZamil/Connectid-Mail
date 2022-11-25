using System;

namespace ShareSimple.Common.WebCRM
{
    public class WebCrmSettings
    {
        public string ApiBaseUrl { get; set; }
        public Guid? ApplicationToken { get; set; }
        public string ActiveStatus { get; set; } = "Customer";
        public string InactiveStatus { get; set; } = "Previous customer";
        public string PotentialStatus { get; set; } = "Trial";
        public string OrganisationUniqueField { get; set; } = "OrganisationName";
    }
}
