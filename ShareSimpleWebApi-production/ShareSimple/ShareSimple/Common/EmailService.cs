using Microsoft.Extensions.Options;
using ShareSimple.Interface;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ShareSimple.Common
{
    public class EmailService : IEmailService
    {
        public string Host => "smtp.office365.com";
        public int Port { get; set; }
        public bool EnforceSsl { get; set; }
        public NetworkCredential Credentials { get; set; }
        public SmtpClient Client { get; set; }
        //public IConfiguration Configuration { get; }

        private readonly EmailConfig _emailConfig;
        private readonly SurveillanceSettings _surveillanceSettings;
        public EmailService(IOptions<EmailConfig> emailConfig, IOptions<SurveillanceSettings> surveillanceSettings)
        {
            _surveillanceSettings = surveillanceSettings.Value;
            _emailConfig = emailConfig.Value;
            NetworkCredential credentials = new NetworkCredential(_emailConfig.UserId, _emailConfig.UserPassword);

            Credentials = credentials;
            Port = 587;
            EnforceSsl = true;

            Client = new SmtpClient(Host, Port);
        }
        public EmailConfig EmailConfig => _emailConfig;
        public SurveillanceSettings SurveillanceSettings => _surveillanceSettings;
        async Task IEmailService.Send(MailMessage message)
        {
            message.Sender = new MailAddress(_emailConfig.SenderEmail);
            message.IsBodyHtml = true;
            Client.EnableSsl = EnforceSsl;
            Client.Credentials = Credentials;

            // Send
            await Client.SendMailAsync(message);
        }
        async Task IEmailService.Send(string to, string mailSubject, string mailBody, List<string> attachFiles = null, string cc = null, string bcc = null)
        {
            var message = new MailMessage();

            message.From = new MailAddress(_emailConfig.SenderEmail);
            if (!string.IsNullOrWhiteSpace(to))
            {
                to.Split(';').ToList().ForEach(x => message.To.Add(x));
            }
            if (!string.IsNullOrWhiteSpace(cc))
            {
                cc.Split(';').ToList().ForEach(x => message.CC.Add(x));
            }
            if (!string.IsNullOrWhiteSpace(bcc))
            {
                bcc.Split(';').ToList().ForEach(x => message.Bcc.Add(x));
            }
            message.Subject = mailSubject;
            message.Body = mailBody;
            message.Sender = new MailAddress(_emailConfig.SenderEmail);
            message.IsBodyHtml = true;
            Client.EnableSsl = EnforceSsl;
            Client.Credentials = Credentials;
            attachFiles?.ForEach(attachFile => message.Attachments.Add(new Attachment(attachFile)));
            // Send
            await Client.SendMailAsync(message);
        }
        async Task IEmailService.Send(string from, string to, string mailSubject, string mailBody)
        {
            var message = new MailMessage();

            message.From = new MailAddress(_emailConfig.SenderEmail);
            var toAddresses = to.Split(';');
            for (int i = 0; i < toAddresses.Length; i++)
            {
                message.To.Add(new MailAddress(toAddresses[i]));
            }
            message.Subject = mailSubject;
            message.Body = mailBody;

            message.Sender = new MailAddress(_emailConfig.SenderEmail);
            message.IsBodyHtml = true;
            Client.EnableSsl = EnforceSsl;
            Client.Credentials = Credentials;

            // Send
            await Client.SendMailAsync(message);
        }

        async Task IEmailService.Send(string from, string to, string mailSubject, string mailBody, string toBcc, string toCc)
        {
            var message = new MailMessage();

            message.From = new MailAddress(_emailConfig.SenderEmail);
            var toAddresses = to.Split(';');
            for (int i = 0; i < toAddresses.Length; i++)
            {
                message.To.Add(new MailAddress(toAddresses[i]));
            }
            if (string.IsNullOrWhiteSpace(toBcc))
            {
                var toTccs = toBcc.Split(';');
                for (int i = 0; i < toTccs.Length; i++)
                {
                    message.Bcc.Add(new MailAddress(toTccs[i]));
                }
            }
            if (string.IsNullOrWhiteSpace(toCc))
            {
                var toCcs = toCc.Split(';');
                for (int i = 0; i < toCcs.Length; i++)
                {
                    message.CC.Add(new MailAddress(toCcs[i]));
                }
            }

            message.Subject = mailSubject;
            message.Body = mailBody;

            message.Sender = new MailAddress(_emailConfig.SenderEmail);
            message.IsBodyHtml = true;
            Client.EnableSsl = EnforceSsl;
            Client.Credentials = Credentials;

            // Send
            await Client.SendMailAsync(message);
        }

        public void Dispose()
        {
            Client.Dispose();
        }
    }
}
