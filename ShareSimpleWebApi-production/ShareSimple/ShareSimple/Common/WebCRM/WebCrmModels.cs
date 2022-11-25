using Newtonsoft.Json;

namespace ShareSimple.Common.WebCRM
{
    public class ApiLoginResponse
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string Error { get; set; }
        public string ErrorDescription { get; set; }
        public bool IsError { get; set; }
        public int ExpiresIn { get; set; }
        public string TokenType { get; set; }
    }
    public class Organisation
    {
        public int OrganisationId { get; set; }
        public string OrganisationName { get; set; }
        public string OrganisationAddress { get; set; }
        public string OrganisationCity { get; set; }
        public string OrganisationPostCode { get; set; }
        public string OrganisationState { get; set; }
        public string OrganisationCountry { get; set; }
        public string OrganisationDomain { get; set; }
        public string OrganisationFax { get; set; }
        public string OrganisationType { get; set; }
        public string OrganisationWww { get; set; }
        public string OrganisationTelephone { get; set; }
        /// <summary>
        /// OrganisationConnectidStatus is a CUSTOM field and in WebCRM it must be configured with Organization CUSTOM list field ID 10 (with instructions value Select * Trial * Customer * Previous customer * ) otherwise it will not work.
        /// </summary>
        [JsonProperty(PropertyName = "OrganisationCustom10")]
        public string OrganisationConnectidStatus { get; set; }
        /// <summary>
        /// CVRNo is a CUSTOM EXTRA field and in WebCRM it must be configured with Organization CUSTOM EXTRA text field ID 1 otherwise it will not work.
        /// </summary>
        [JsonProperty(PropertyName = "OrganisationExtraCustom1")]
        public string CVRNo { get; set; }
        /// <summary>
        /// PromotionCode is a CUSTOM field and in WebCRM it must be configured with Organization CUSTOM text field ID 12 otherwise it will not work.
        /// </summary>
        [JsonProperty(PropertyName = "OrganisationCustom12")]
        public string PromotionCode { get; set; }

        [JsonProperty(PropertyName = "OrganisationCustom2")]
        public string EnabledTrustedLink { get; set; }
    }
    public class Person
    {
        public int? PersonOrganisationId { get; set; }
        public int PersonId { get; set; }
        public string PersonName { get; set; }
        public string PersonFirstName { get; set; }
        public string PersonMiddleName { get; set; }
        public string PersonLastName { get; set; }
        public string PersonMobilePhone { get; set; }
        public string PersonEmail { get; set; }
        public string PersonEmail2 { get; set; }
        public string PersonStatus { get; set; }
        public string PersonTitle { get; set; }
    }
}
