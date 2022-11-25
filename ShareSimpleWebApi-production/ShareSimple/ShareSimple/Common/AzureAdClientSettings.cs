using System.ComponentModel.DataAnnotations;

namespace ShareSimple.Common
{
    public class AzureAdClientSettings
    {
        [Required]
        public string ClientId { get; set; }

        [Required]
        [MinLength(20)]
        public string ClientSecret { get; set; }
    }
}
