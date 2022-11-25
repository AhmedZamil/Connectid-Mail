using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using ShareSimple.Common.eConomic;
using ShareSimple.Common.WebCRM;
using System;


namespace ShareSimple.Common
{
    public class ShareSimpleConfiguration
    {
        private readonly IConfiguration _configuration;
        public ShareSimpleConfiguration(IConfiguration configuration,
           IOptions<EmailConfig> emailConfig,
           IOptions<SmsSettings> smsSettings,
           IOptions<WebCrmSettings> webCrmSettings,
           IOptions<EconomicSettings> economicSettings,
           IOptions<OnDemandDataConfig> onDemandDataConfig,
           IOptions<LinkConfig> linkConfig,
           IOptions<AzureAdClientSettings> azureAdClientSettings)
        {
            _configuration = configuration;
            EmailConfig = emailConfig.Value;
            SmsSettings = smsSettings.Value;
            WebCrmSettings = webCrmSettings.Value;
            EconomicSettings = economicSettings.Value;
            OnDemandDataConfig = onDemandDataConfig.Value;
            LinkConfig = linkConfig.Value;
            AzureAdClientSettings = azureAdClientSettings.Value;
        }
        public string StorageConnectionString => _configuration.GetConnectionString("StorageConnectionString");
        public string ShareSampleDbConnectionString => _configuration.GetConnectionString("ShareSampleDatabase");
        public EmailConfig EmailConfig { get; }
        public SmsSettings SmsSettings { get; }
        public WebCrmSettings WebCrmSettings { get; }
        public EconomicSettings EconomicSettings { get; }
        public OnDemandDataConfig OnDemandDataConfig { get; }
        public LinkConfig LinkConfig { get; }
        public AzureAdClientSettings AzureAdClientSettings { get; }
        public int? TrialDays => _configuration["TrialDays"].ToNumber();
        public int? TrialWarningDays => _configuration["TrialWarningDays"].ToNumber();
        public int? MonthlyBillingDate => _configuration["MonthlyBillingDate"].ToNumber(28);
        public bool UseBlobStorage => string.IsNullOrWhiteSpace(_configuration["UseBlobStorage"]) ? false : Convert.ToBoolean(_configuration["UseBlobStorage"]);
        public int? ShareFileLife => _configuration["ShareFileLife"].ToNumber();
        public int? RequestedFileLife => _configuration["RequestedFileLife"].ToNumber();
        public int? OtpLife => _configuration["OtpLife"].ToNumber();
        public int? SurveillanceLifeTimeMonths => _configuration["SurveillanceLifeTimeMonths"].ToNumber();
        public IConfigurationSection GetSection(string sectionName) => _configuration.GetSection(sectionName);
    }
}
