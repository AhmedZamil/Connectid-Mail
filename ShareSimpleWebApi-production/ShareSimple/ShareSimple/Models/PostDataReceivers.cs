using System;
using System.Collections.Generic;

namespace ShareSimple.Models
{
    public partial class PostDataReceivers
    {
        public int Id { get; set; }
        public Guid? ReceiverId { get; set; }
        public string ReceiverEmail { get; set; }
        public Guid? PostDataId { get; set; }
        public string Otp { get; set; }
        public bool? OtpVerified { get; set; }
        public bool? Submitted { get; set; }
        public bool? IsSavedDataGenerated { get; set; }
    }
}
