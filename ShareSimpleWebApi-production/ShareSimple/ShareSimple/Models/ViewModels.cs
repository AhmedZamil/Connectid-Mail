using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Models
{
    public class OtpRequest
    {
        public Guid ReceiverId { get; set; }
        public int OtpStep { get; set; }
    }
}
