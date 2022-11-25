using Microsoft.Extensions.Options;
using ShareSimple.Interface;
using ShareSimple.ViewModels;
using System;
using System.IO;
using System.Linq;

namespace ShareSimple.Common
{
    public class MsgBuilder : IMsgBuilder
    {
        //private readonly LinkConfig _linkConfig;
        private readonly ShareSimpleConfiguration _configuration;
        public MsgBuilder(ShareSimpleConfiguration configuration)
        {
            //_linkConfig = linkConfig.Value;
            _configuration = configuration;
        }
        public string GetMsgBody(string template, string language, EmailModel emailModel)
        {
            string[] parameters;
            switch (template)
            {
                case MailTemplate.USER_REGISTRATION_BODY:
                    parameters = new string[] { emailModel.username, DateTime.UtcNow.ToString("yyyy") };
                    break;
                case MailTemplate.OTP_SEND_BODY:
                    parameters = new string[] { emailModel.otp, DateTime.UtcNow.ToString("yyyy"), emailModel.url };
                    break;
                case MailTemplate.DOWNLOAD_REQUEST_BODY:
                    parameters = new string[] { emailModel.username ?? emailModel.useremail,
                               emailModel.filenames,
                               emailModel.downloadRejectUrl,
                               emailModel.downloadAcceptUrl,
                               DateTime.UtcNow.ToString("yyyy"),
                               emailModel.contactSupport
                    };
                    break;
                case MailTemplate.DOWNLOAD_FILES_BODY:
                    parameters = new string[] { (emailModel.filenames.Split("<br>").Count() - 1).ToString(),
                               emailModel.filenames,
                               emailModel.downloadUrl,
                               DateTime.UtcNow.ToString("yyyy"),
                               emailModel.contactSupport
                    };
                    break;
                case MailTemplate.POSTDATA_SHARE_BODY:
                    parameters = new string[] {
                               emailModel.receivername ?? emailModel.receivermail,
                               emailModel.postdatafields,
                               emailModel.postdatafiles,
                               emailModel.url, DateTime.UtcNow.ToString("yyyy"), emailModel.contactSupport };
                    break;
                case MailTemplate.ONDEMAND_INTEGRATION_BODY:
                    parameters = new string[] { emailModel.companyname,
                               emailModel.phone,
                               emailModel.username,
                               emailModel.useremail,
                               emailModel.Integrationname };
                    break;
                case MailTemplate.CUSTOMER_SIGNUP_NOTIFICATION_TO_COMPLIANCE_BODY:
                    parameters = new string[] { emailModel.companyname,
                               emailModel.username,
                               emailModel.useremail,
                               emailModel.date.ToString(MailTemplate.DATE_FORMAT),
                               DateTime.UtcNow.ToString("yyyy") };
                    break;
                case MailTemplate.TRIAL_ENDING_EMAIL_TO_CUSTOMER_BODY:
                    parameters = new string[] { emailModel.username,
                               emailModel.phone,
                               DateTime.UtcNow.ToString("yyyy") };
                    break;
                default:
                    parameters = new string[] { };
                    break;
            };

            return GetMsgBody(template, language, parameters);
        }
        private string GetMailTemplate(string language)
        {
            var mailBody = string.Empty;
            var template = "mail_template.html";
            var basePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", HostingDirectory.EMAIL_TEMPLATES);
            string filePath = string.IsNullOrEmpty(language) ? Path.Combine(basePath, "en-US", template) : Path.Combine(basePath, language, template);
            if (!File.Exists(filePath))
            {
                filePath = Path.Combine(basePath, "en-US", template);
            }
            using (StreamReader SourceReader = File.OpenText(filePath))
            {
                try
                {
                    mailBody = SourceReader.ReadToEnd();
                    if (mailBody.Contains("__LOGO_URL__"))
                    {
                        var logoUrl = string.IsNullOrWhiteSpace(_configuration.LinkConfig.LogoUrl) ? "https://sharesimple.azurewebsites.net/emailtemplates/images/ss_logo.png" : _configuration.LinkConfig.LogoUrl;
                        mailBody = mailBody.Replace("__LOGO_URL__", logoUrl);
                    }

                    if (mailBody.Contains("__CONTACT_SUPPORT_URL__"))
                    {
                        var supportUrl = string.IsNullOrWhiteSpace(_configuration.LinkConfig.ContactSupport) ? "https://www.safeonline.eu/company/contact" : _configuration.LinkConfig.ContactSupport;
                        mailBody = mailBody.Replace("__CONTACT_SUPPORT_URL__", supportUrl);
                    }
                }
                catch (Exception ex)
                {
                    var exp = ex.Message;
                }
            }
            return mailBody;
        }
        public string GetMsgBody(string template, string language, params string[] parameters)
        {
            var basePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", HostingDirectory.EMAIL_TEMPLATES);
            string messageBody = string.Empty;
            if (!string.IsNullOrEmpty(template))
            {
                string filePath = string.IsNullOrEmpty(language) ? Path.Combine(basePath, "en-US", template) : Path.Combine(basePath, language, template);
                if (!File.Exists(filePath))
                {
                    filePath = Path.Combine(basePath, "en-US", template);
                }
                using (StreamReader SourceReader = File.OpenText(filePath))
                {
                    try
                    {
                        var HtmlBody = SourceReader.ReadToEnd();
                        messageBody = string.Format(HtmlBody, parameters);
                        if (!messageBody.Contains("<html>"))
                        {
                            var htmlMail = GetMailTemplate(language);
                            if (htmlMail.Contains("__MAIL_BODY__"))
                            {
                                messageBody = htmlMail.Replace("__MAIL_BODY__", messageBody);
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        var exp = ex.Message;
                    }
                }
            }
            return messageBody;
        }
    }
}
