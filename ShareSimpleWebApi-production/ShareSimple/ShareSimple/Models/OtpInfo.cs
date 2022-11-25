using System;
using System.ComponentModel.DataAnnotations;

namespace ShareSimple.Models
{
    public class OtpInfo
    {
        [Key]
        public Guid Id { get; set; }
        public string Otp { get; set; }
        public string Receiver { get; set; }
        public Guid ResourceId { get; set; }
        public DateTime ExpireTime { get; set; }
    }
}
