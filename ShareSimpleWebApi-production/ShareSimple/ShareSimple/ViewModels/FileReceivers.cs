using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.ViewModels
{
    public class FileReceivers
    {
        public IEnumerable<string> receiverEmails { get; set; }
        public IEnumerable<string> receiverMobiles { get; set; }
        public Guid? shareDataId { get; set; }
        public Guid? postDataId { get; set; }
    }
}
