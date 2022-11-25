using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class ShareFileReceivers
    {
        public int Id { get; set; }
        public Guid? ShareDataId { get; set; }
        public Guid? ReceiverId { get; set; }
        public string ReceiverEmail { get; set; }
        public string Mobile { get; set; }
        public short? Mode { get; set; }
        public string Otp { get; set; }
    }
}
