namespace ShareSimple.Common.eConomic
{
    public class EconomicSettings
    {
        public string ApiBaseUrl { get; set; }
        public string AppSecretToken { get; set; }
        public string AgreementGrantToken { get; set; }
        public bool Demo { get; set; }
        public int? AccountNumber { get; set; }
        public string DefaultCurrency { get; set; }
        public int? DefaultPaymentTermId { get; set; }
        public string ProductName { get; set; }
    }
}
