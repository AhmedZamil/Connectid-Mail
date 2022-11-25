using System;
using System.Collections.Generic;

namespace ShareSimple.ViewModels
{
    public partial class StorageConfigModel
    {
        public Guid Id { get; set; }
        public Guid? CompanyId { get; set; }
        public int? FileAvailability { get; set; }
        public int? ConfigFileAvailability { get; set; }
    }
}
