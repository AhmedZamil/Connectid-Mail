using System;
using System.ComponentModel.DataAnnotations;

namespace ShareSimple.Models
{
    public class TokenInfo
    {
        [Key]
        public Guid AppToken { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? ModifiedTime { get; set; }
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string TokenType { get; set; }
        public int? ExpiresIn { get; set; }
    }
}
