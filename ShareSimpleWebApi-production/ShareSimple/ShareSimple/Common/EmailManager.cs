using Microsoft.AspNetCore.Http;
using ShareSimple.Common.Enums;
using ShareSimple.Interface;
using ShareSimple.ViewModels;
using System;
using System.Threading.Tasks;

namespace ShareSimple.Common
{
    public class EmailManager
    {
        private readonly IMsgBuilder _msgBuilder;
        private readonly IEmailService _emailService;
        private readonly ISurveillanceRepository _surveillanceRepository;
        public EmailManager(IMsgBuilder msgBuilder,
            IEmailService emailService,
            ISurveillanceRepository surveillanceRepository
            )
        {
            _msgBuilder = msgBuilder;
            _emailService = emailService;
            _surveillanceRepository = surveillanceRepository;
        }
        private async Task Send(string from, string to, string subject, string body, HttpContext context = null, Guid? userId = null, string emailTitle = null)
        {
            try
            {
                await _emailService.Send(from, to, subject, body);
                _surveillanceRepository.Info(context, userId, ActionType.MailSend, $"{ emailTitle ?? subject} email is sent successfully to {to}");
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(context, userId, $"{ emailTitle ?? subject} email sending to {to} failed. Error: {ex.Message}", Severity.High, ex, ActionType.MailSend);
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="from"></param>
        /// <param name="to"></param>
        /// <param name="subject"></param>
        /// <param name="templateFile"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        public async Task Send(string from, string to, string subject, string templateFile, string language, HttpContext context = null, Guid? userId = null, string emailTitle = null, params string[] parameters)
        {
            var body = _msgBuilder.GetMsgBody(templateFile, language, parameters);
            await Send(from, to, subject, body, context, userId, emailTitle);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="from"></param>
        /// <param name="to"></param>
        /// <param name="subject"></param>
        /// <param name="templateFile"></param>
        /// <param name="emailModel"></param>
        /// <returns></returns>
        public async Task Send(string from, string to, string subject, string templateFile, string language, EmailModel emailModel, HttpContext context = null, Guid? userId = null, string emailTitle = null)
        {
            var body = _msgBuilder.GetMsgBody(templateFile, language, emailModel);
            await Send(from, to, subject, body, context, userId, emailTitle);
        }
    }
}
