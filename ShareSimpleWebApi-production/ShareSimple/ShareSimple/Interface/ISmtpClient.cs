using ShareSimple.Common;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IEmailService
    {
        string Host { get; }
        int Port { get; set; }
        bool EnforceSsl { get; set; }
        NetworkCredential Credentials { get; set; }
        SmtpClient Client { get; set; }
        EmailConfig EmailConfig { get; }
        SurveillanceSettings SurveillanceSettings { get; }
        Task Send(MailMessage m);
        Task Send(string to, string mailSubject, string mailBody, List<string> attachFiles = null, string cc = null, string bcc = null);
        Task Send(string from, string to, string mailSubject, string mailBody);
        Task Send(string from, string to, string mailSubject, string mailBody, string toBcc, string toCc);
    }
}
