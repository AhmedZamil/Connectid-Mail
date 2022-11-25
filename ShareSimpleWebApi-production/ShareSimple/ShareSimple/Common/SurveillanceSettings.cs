using System.Collections.Generic;

namespace ShareSimple.Common
{
    public class SurveillanceSettings
    {
        public bool? KeepApiLog { get; set; } = true;
        public string ErrorMailSender { get; set; } = "No-reply <No-reply@sharesimple.eu>";
        public List<string> ErrorMailReceivers { get; set; } = new List<string>();
        public string ErrorMailSubject { get; set; } = MailTemplate.ERROR_MAIL_SUBJECT;
        public List<int> MailSeverities { get; set; } = null;
    }
}
