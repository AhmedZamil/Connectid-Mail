using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class StorageConfig
    {
        public Guid Id { get; set; }
        public string StorageName { get; set; }
        public string StorageConnectionString { get; set; }
        public string StorageAccountName { get; set; }
        public string StorageAccountKey { get; set; }
        public Guid? CompanyId { get; set; }
        public int? FileAvailability { get; set; }

        public Company Company { get; set; }
    }
}
