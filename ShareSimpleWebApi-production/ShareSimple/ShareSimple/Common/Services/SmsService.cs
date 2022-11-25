using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using ShareSimple.Common.Enums;
using ShareSimple.Interface;
using System;
using System.Net;
using System.Threading.Tasks;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;

namespace ShareSimple.Common.Services
{
    public class SmsService : ISmsService
    {
        private readonly SmsSettings _settings;
        private readonly ISurveillanceRepository _surveillanceRepository;
        public SmsService(IOptions<SmsSettings> settings, ISurveillanceRepository surveillanceRepository)
        {
            _settings = settings.Value;
            _surveillanceRepository = surveillanceRepository;
        }
        public async Task<string> SendSms(string msgText, string to, HttpContext httpContext = null, Guid? userId = null)
        {
            try
            {
                //string accountSid = "AC00c825e5b5130d08d9770129e85b7f49";
                //string authToken = "8c1cd3ed07a6341b5386bbf775030a28";
                //string from = "+14752342757";
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                TwilioClient.Init(_settings.AccountSid, this._settings.AuthToken);

                var message = await MessageResource.CreateAsync(
                    body: msgText,
                    from: new PhoneNumber(_settings.PhoneNumber),
                    to: new PhoneNumber(to)
                );
                _surveillanceRepository.Info(httpContext, userId, ActionType.SMS, $"SMS '{msgText}' is sent successfully to {to}");
                return message.Sid;
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(httpContext, userId, $"SMS '{msgText}' failed to send to {to}. Error: {ex.Message}", Severity.High, ex, ActionType.SMS);
                throw ex;
            }
        }
    }
}
