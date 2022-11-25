namespace ShareSimple.Common
{
    public class CompanyStatus
    {
        public const string Trial = "Trial";
        public const string Paid = "Paid";
        public const string Inactive = "Inactive";
        public const string Unsubscribed = "Unsubscribed";
    }
    public class ConstantMessage
    {
        public const string COMPANY_ID_CANNOT_BE_EMPTY = "Company id can't be empty";
        public const string AZURE_ACS_FAILURE = "Azure ACS failure.";
        /// <summary>
        /// Email,DisplayableId
        /// </summary>
        public const string LOGIN_FAILED = "Login failed due to missmatch of outlook email({0}) and office365 email({1})";
        /// <summary>
        /// Error message
        /// </summary>
        public const string AUTH_CODE_CHECK_FAIL = "Exception occured during checking auth-code {0}";
        public const string UPLOAD_FILE_NOT_SELECT = "File not selected";
        public const string UPLOAD_TEXT_NOT_SET = "Text not written";
        public const string UPLOAD_FILE_SENDER_NOT_SET = "Sender can not be empty";
        public const string UPLOAD_FILE_SENDER_NOT_FOUND = "Invalid sender";
        public const string INVALID_PARAMETER = "Invalid params";
        public const string DATA_NOT_EXIST_WITH_KEY = "Data does not exixts with the key";
    }

    public class MailTemplate
    {
        /// <summary>
        /// Password
        /// </summary>
        public const string OTP_SEND_BODY = "otp_send_EmailTemplate.html";
        public const string OTP_SEND_SUBJECT = "Your one time password";
        /// <summary>
        /// RequesterName, File(s), RejectLink, AcceptLink
        /// </summary>
        public const string DOWNLOAD_REQUEST_BODY = "download_request_EmailTemplate.html";
        public const string DOWNLOAD_REQUEST_SUBJECT = "Permission to download";
        /// <summary>
        /// FileCount, Files, DownloadLink, 
        /// </summary>
        public const string DOWNLOAD_FILES_BODY = "download_files_EmailTemplate.html";
        public const string DOWNLOAD_FILES_SUBJECT = "Request download permission";
        /// <summary>
        /// CustomerName, CopyRightYear, ContactSupportEmail, TrialMessage
        /// </summary>
        public const string USER_REGISTRATION_BODY = "user_registration_EmailTemplate.html";
        public const string USER_REGISTRATION_SUBJECT = "Welcome to Connectid Mail";
        /// <summary>
        /// CustomerName, CopyRightYear, ContactSupportEmail, TrialMessage
        /// </summary>
        public const string USER_REGISTRATION_TO_ADMIN_BODY = "user_registration_email_to_admin.html";
        public const string USER_REGISTRATION_TO_ADMIN_SUBJECT = "New user for Connectid Mail";
        /// <summary>
        /// CustomerName, ContactEmail, CopyRightYear, ContactSupportEmail
        /// </summary>
        public const string USER_REGISTRATION_INACTIVE_COMPANY_BODY = "user_registration_inactive_company.html";
        public const string USER_REGISTRATION_INACTIVE_COMPANY_SUBJECT = "Company account is inactive";
        /// <summary>
        /// InfoSharedFrom, ShareInfoLink, Files, ViewDataLink
        /// </summary>
        public const string POSTDATA_SHARE_BODY = "postdata_share_EmailTemplate.html";
        public const string POSTDATA_SHARE_SUBJECT = "Information shared";
        /// <summary>
        /// CompanyName, PhoneNo, AdminName, AdminEmail, IntegrationRequest
        /// </summary>
        public const string ONDEMAND_INTEGRATION_BODY = "Send_Email_Ondemand.html";
        public const string ONDEMAND_INTEGRATION_SUBJECT = "Request for Connectid Mail integration with {0}";
        /// <summary>
        /// CustomerName, ContactPerson, ContactEmail, CreationDate
        /// </summary>
        public const string CUSTOMER_SIGNUP_NOTIFICATION_TO_COMPLIANCE_BODY = "customer_signup_notification_to_compliance.html";
        public const string CUSTOMER_SIGNUP_NOTIFICATION_TO_COMPLIANCE_SUBJECT = "Connectid Mail : New Customer Registration";
        /// <summary>
        /// CustomerName, Rate, NoOfUsers, ContactNo, CopyRightYear, DeleteLink, ContactSupportEmail, TrialWarningDays
        /// </summary>
        public const string TRIAL_ENDING_EMAIL_TO_CUSTOMER_BODY = "trial_ending_email_template.html";
        public const string TRIAL_ENDING_EMAIL_TO_CUSTOMER_SUBJECT = "Connectid Mail trial is about to expire";
        /// <summary>
        /// CustomerName, ContactPerson, ContactEmail, CreationDate, CopyRightYear, ContactSupportEmail
        /// </summary>
        public const string USER_TERMINATED_TRIAL_SUBSCRIPTION_BODY = "user_terminated_trial_subscription.html";
        public const string USER_TERMINATED_TRIAL_SUBSCRIPTION_SUBJECT = "Connectid Mail : Trial Subscription Terminated";
        /// <summary>
        /// CustomerName, UnitPrice, NoOfUsers, ContactNo, CopyRightYear, ContactSupportEmail
        /// </summary>
        public const string WELCOME_USER_FROM_TRIAL_TO_PAID_BODY = "welcome_user_from_trial_to_paid.html";
        public const string WELCOME_USER_FROM_TRIAL_TO_PAID_SUBJECT = "Upgraded to Connectid Mail paid subscription";
        /// <summary>
        /// CustomerName, ContactPerson, ContactEmail, CreationDate,UpgradeDate, CopyRightYear, ContactSupportEmail
        /// </summary>
        public const string NOTIFY_COMPLIANCE_FROM_TRIAL_TO_PAID_BODY = "notify_compliance_from_trial_to_paid.html";
        public const string NOTIFY_COMPLIANCE_FROM_TRIAL_TO_PAID_SUBJECT = "Upgraded to Connectid Mail paid subscription";
        /// <summary>
        /// CustomerName, DeactivatedOn
        /// </summary>
        public const string COMPANY_INACTIVATION_CUSTOMER_BODY = "company_inactivation_email_to_customer.html";
        public const string COMPANY_INACTIVATION_CUSTOMER_SUBJECT = "Subscription deactivated";
        /// <summary>
        /// CustomerName, ContactPerson, ContactEmail, CreationDate, DeactivatedOn
        /// </summary>
        public const string COMPANY_INACTIVATION_COMPLIANCE_BODY = "company_inactivation_email_to_compliance.html";
        public const string COMPANY_INACTIVATION_COMPLIANCE_SUBJECT = "Subscription deactivated";
        /// <summary>
        /// CustomerName, ContactPerson, ContactEmail, LinkName, CreationDate
        /// </summary>
        public const string TRUSTED_LINK_CREATION_NOTIFICATION_TO_COMPLIANCE_BODY = "trusted_link_creation_notification_to_compliance.html";
        public const string TRUSTED_LINK_CREATION_NOTIFICATION_TO_COMPLIANCE_SUBJECT = "Connectid Mail : New Trusted Link Creation";
        /// <summary>
        /// CustomerName, ContactPerson, ContactEmail, LinkName, CreationDate
        /// </summary>
        public const string TRUSTED_LINK_SHARED_NOTIFICATION_BODY = "trusted_link_shared_notification.html";
        public const string TRUSTED_LINK_SHARED_NOTIFICATION_SUBJECT = "Connectid Mail : Trusted Link Folder shared with you";

        public const string CONTACT_NUMBER = "+45 2777 2737";
        public const string DATE_FORMAT = "d MMM, yyyy";
        public const string DATE_LONG_FORMAT = "dddd, MMMM d, yyyy";

        public const string ERROR_MAIL_SUBJECT = "Error occured in Connectid Mail application";
        /// <summary>
        /// Id, Time, Company, User, Action, Message, Exception, UserAgent, ClientIP, AppVersion, CopyRightYear, ENV
        /// </summary>
        public const string ERROR_MAIL_BODY = "error_mail.html";
    };
    public class HostingDirectory
    {
        public const string COMPANY_LOGO = "company";
        public const string EMAIL_TEMPLATES = "emailtemplates";
        public const string Files = "files";
        public const string SharedFiles = "sharedfiles";
    }
}
