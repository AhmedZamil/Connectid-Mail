using System;

namespace ShareSimple.ViewModels
{
    public class SearchSurveillanceRequest
    {
        public int? MaxResultCount { get; set; } = 100;
        public DateTime? LogTimeFrom { get; set; }
        public DateTime? LogTimeTo { get; set; }
        public string ActionName { get; set; }
        public string MessageType { get; set; }
        public int? Severity { get; set; }
        public Guid? UserId { get; set; }
        public Guid? CompanyId { get; set; }
    }
}
