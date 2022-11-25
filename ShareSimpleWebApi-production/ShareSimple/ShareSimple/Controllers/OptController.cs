using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using ShareSimple.Common;
using ShareSimple.Common.Enums;
using ShareSimple.Filters;
using ShareSimple.Interface;
using ShareSimple.Models;
using ShareSimple.ViewModels;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ShareSimple.Controllers
{
    [Produces("application/json")]
    [Route("api/Otp")]

    public class OptController : Controller
    {
        private readonly IHostingEnvironment _env;
        private readonly EmailManager _emailManager;
        private readonly IFileRepository _fileRepository;
        private readonly ShareSimpleConfiguration _configuration;
        private readonly IOtpRepository _otpRepository;
        private readonly ISurveillanceRepository _surveillanceRepository;
        public OptController(
            IHostingEnvironment env,
            EmailManager emailManager,
            IFileRepository fileRepository,
            ShareSimpleConfiguration configuration,
            IOtpRepository otpRepository,
            ISurveillanceRepository surveillanceRepository)
        {
            _env = env;
            _emailManager = emailManager;
            _fileRepository = fileRepository;
            _configuration = configuration;
            _otpRepository = otpRepository;
            _surveillanceRepository = surveillanceRepository;
        }

        [HttpPost(), Route("send")]
        public async Task<IActionResult> SendOtpMail([FromBody] OtpInfo otpInfo)
        {
            if (string.IsNullOrEmpty(otpInfo.Receiver) || otpInfo.ResourceId == Guid.Empty)
            {
                return Content("Invalid receiver");
            }
            else
            {
                var otpLife = _configuration.OtpLife;
                otpInfo.Otp = Utils.GenerateOtp();
                otpInfo.ExpireTime = DateTime.UtcNow.AddMinutes(otpLife ?? 10);

                _otpRepository.CreateOrUpdateIfExist(otpInfo);

                await _emailManager.Send(
                    _configuration.EmailConfig.SenderEmail,
                    otpInfo.Receiver,
                    Utils.GetLanguageTranslation(_env.WebRootPath, null, MailTemplate.OTP_SEND_SUBJECT),
                    MailTemplate.OTP_SEND_BODY,
                    null,
                    new EmailModel
                    {
                        otp = otpInfo.Otp,
                        url = _configuration.LinkConfig.ContactSupport
                    },
                    HttpContext,
                    null,
                    "OTP sending via mail"
                    );
                _surveillanceRepository.Info(HttpContext, null, ActionType.OTP, $"OTP '{otpInfo.Otp}' is sent to { otpInfo.Receiver} successfully.");
                return Json(new { receiver = otpInfo.Receiver, OtpExpDate = otpInfo.ExpireTime });
            }
        }

        [HttpPost(), Route("match")]
        public async Task<IActionResult> MatchOtp([FromBody] OtpInfo otpInfo)
        {
            if (string.IsNullOrEmpty(otpInfo.Receiver) || otpInfo.ResourceId == Guid.Empty || string.IsNullOrEmpty(otpInfo.Otp))
            {
                return Json(new { OtpMatch = false, Message="Invalid Otp" });
            }

            var otpInDB = await _otpRepository.GetOtp(otpInfo.ResourceId, otpInfo.Receiver);
            if (otpInfo.Otp.Equals(otpInDB.Otp) && otpInDB.ExpireTime > DateTime.UtcNow)
            {
                return Json(new { OtpMatch = true});
            }

            return Json(new { OtpMatch = false, Message = "Invalid Otp" });
        }
    }
}
