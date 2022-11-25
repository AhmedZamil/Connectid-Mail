using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Newtonsoft.Json;
using ShareSimple.Common;
using ShareSimple.Common.Enums;
using ShareSimple.Common.Services;
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
    [Route("api/file")]
    public class FileStorageController : Controller
    {
        private readonly IHostingEnvironment _env;
        private readonly EmailManager _emailManager;
        private readonly ISmsService _smsService;
        private readonly IFileRepository _fileRepository;
        private readonly IUserRepository _userRepository;
        private readonly ICompanyRepository _companyRepository;
        private readonly IShareDataRepository _shareDataRepository;
        private readonly IShareDataFilesRepository _shareDataFileRepository;
        private readonly IShareFileReceiverRepository _shareFileReceiverRepository;
        private readonly IRequestDownloadRepository _requestDownloadRepository;
        private readonly IRequestDownLoadFilesRepository _requestDownLoadFilesRepository;
        private readonly ShareSimpleConfiguration _configuration;
        private readonly CloudStorageAccount _storageAccount;
        private readonly ISurveillanceRepository _surveillanceRepository;
        public FileStorageController(
            EmailManager emailManager,
            ISmsService smsService,
            IFileRepository fileRepository,
            IUserRepository userRepository,
            ICompanyRepository companyRepository,
            IShareDataRepository shareDataRepository,
            IShareDataFilesRepository shareDataFileRepository,
            IShareFileReceiverRepository shareFileReceiverRepository,
            IRequestDownloadRepository requestDownloadRepository,
            IRequestDownLoadFilesRepository requestDownLoadFilesRepository,
            ShareSimpleConfiguration configuration,
            IHostingEnvironment env,
            ISurveillanceRepository surveillanceRepository
        )
        {
            _emailManager = emailManager;
            _smsService = smsService;
            _fileRepository = fileRepository;
            _userRepository = userRepository;
            _companyRepository = companyRepository;
            _shareDataRepository = shareDataRepository;
            _shareDataFileRepository = shareDataFileRepository;
            _shareFileReceiverRepository = shareFileReceiverRepository;
            _requestDownloadRepository = requestDownloadRepository;
            _requestDownLoadFilesRepository = requestDownLoadFilesRepository;
            _configuration = configuration;
            _env = env;
            _storageAccount = CloudStorageAccount.Parse(_configuration.StorageConnectionString);
            _surveillanceRepository = surveillanceRepository;
        }

        // POST: api/file
        [ServiceFilter(typeof(AuthAttribute))]
        [HttpPost, Route("upload")]
        public async Task<IActionResult> UploadFile(UploadFile uploadfile)
        {
            if (uploadfile.file == null || uploadfile.file.Length == 0)
                return Content(ConstantMessage.UPLOAD_FILE_NOT_SELECT);

            if (String.IsNullOrEmpty(uploadfile.senderEmail))
                return Content(ConstantMessage.UPLOAD_FILE_SENDER_NOT_SET);

            var sender = await _userRepository.GetUserByEmail(uploadfile.senderEmail);

            if (sender == null)
                return Content(ConstantMessage.UPLOAD_FILE_SENDER_NOT_FOUND);
            else
            {
                uploadfile.senderId = sender.Id;
                sender.Company = await _companyRepository.GetCompanyById((Guid)sender.CompanyId);
            }

            var file = uploadfile.file;
            var fileMetaData = new FileMetaData();
            if (_configuration.UseBlobStorage)
            {
                fileMetaData = await UploadToBlobStorage(file, sender);
                _surveillanceRepository.Info(HttpContext, null, ActionType.FileUpload, $"File '{uploadfile?.fileName}' uploaded to blob storage successfully");
            }
            else
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.FileName);

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
                _surveillanceRepository.Info(HttpContext, null, ActionType.FileUpload, $"File '{uploadfile?.fileName}' uploaded to file system successfully");
            }
            fileMetaData.CreatedDate = DateTime.UtcNow;
            _fileRepository.InsertFile(fileMetaData);
            await _fileRepository.Save();
            _surveillanceRepository.EntityAdded(HttpContext, null, "FileMetaData", fileMetaData);
            uploadfile.fileId = fileMetaData.FileId;

            ShareData shareData = null;
            if (uploadfile.shareDataId == Guid.Empty || uploadfile.shareDataId == null)
            {
                shareData = new ShareData
                {
                    Id = Guid.NewGuid(),
                    SendDate = DateTime.UtcNow,
                    SenderId = uploadfile.senderId
                };

                _shareDataRepository.InsertShareData(shareData);
                await _shareDataRepository.Save();
                _surveillanceRepository.EntityAdded(HttpContext, null, "ShareData", shareData);
                uploadfile.shareDataId = shareData.Id;
            }
            else
            {
                var exShareData = await _shareDataRepository.GetShareDataById(uploadfile.shareDataId.Value);
                if (exShareData == null)
                {
                    shareData = new ShareData
                    {
                        Id = uploadfile.shareDataId.Value,
                        SendDate = DateTime.UtcNow,
                        SenderId = uploadfile.senderId
                    };
                    
                    try
                    {
                        _shareDataRepository.InsertShareData(shareData);
                        await _shareDataRepository.Save();
                        _surveillanceRepository.EntityAdded(HttpContext, null, "ShareData", shareData);
                    }
                    catch(Exception ex)
                    {

                    }                    
                }
            }

            //save info to ShareDataFiles
            var shareDataFile = new ShareDataFiles
            {
                FileId = fileMetaData.FileId,
                ShareDataId = uploadfile.shareDataId
            };
            _shareDataFileRepository.InsertShareDataFile(shareDataFile);
            await _shareDataFileRepository.Save();
            _surveillanceRepository.EntityAdded(HttpContext, null, "ShareDataFile", shareDataFile);

            return Json(uploadfile);
        }

        [ServiceFilter(typeof(AuthAttribute))]
        [HttpPost, Route("uploadText")]
        public async Task<IActionResult> UploadTextAsFile(UploadFile uploadfile)
        {
            if (uploadfile.textContent == null || uploadfile.textContent.Length == 0)
                return Content(ConstantMessage.UPLOAD_TEXT_NOT_SET);

            if (String.IsNullOrEmpty(uploadfile.senderEmail))
                return Content(ConstantMessage.UPLOAD_FILE_SENDER_NOT_SET);

            var sender = await _userRepository.GetUserByEmail(uploadfile.senderEmail);

            if (sender == null)
                return Content(ConstantMessage.UPLOAD_FILE_SENDER_NOT_FOUND);
            else
            {
                uploadfile.senderId = sender.Id;
                sender.Company = await _companyRepository.GetCompanyById((Guid)sender.CompanyId);
            }


            var fileMetaData = new FileMetaData();
            bool storeToBlob = _configuration.UseBlobStorage;
            if (storeToBlob)
            {
                fileMetaData = await UploadTextToBlobStorage(uploadfile, sender);
                _surveillanceRepository.Info(HttpContext, null, ActionType.FileUpload, $"Text file '{uploadfile?.fileName}' uploaded to blob storage successfully");
            }
            else
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "text-file.txt");
                System.IO.File.WriteAllText(path, uploadfile.textContent);
                _surveillanceRepository.Info(HttpContext, null, ActionType.FileUpload, $"text file '{uploadfile?.fileName}' uploaded to file system successfully");
            }

            uploadfile.fileName = fileMetaData.Name;
            if (uploadfile.fileId.HasValue)
            {
                var fileMetaDataDb = await _fileRepository.GetFileById(uploadfile.fileId.Value);
                fileMetaDataDb.Size = fileMetaData.Size;
                fileMetaDataDb.Name = fileMetaData.Name;
                fileMetaDataDb.FileUrl = fileMetaData.FileUrl;
                await _fileRepository.Save();
                _surveillanceRepository.EntityUpdated(HttpContext, null, "FileMetaData", fileMetaDataDb, fileMetaData);
            }
            else
            {
                fileMetaData.CreatedDate = DateTime.UtcNow;
                _fileRepository.InsertFile(fileMetaData);
                await _fileRepository.Save();
                _surveillanceRepository.EntityAdded(HttpContext, null, "FileMetaData", fileMetaData);
                uploadfile.fileId = fileMetaData.FileId;

                ShareData shareData = null;
                if (uploadfile.shareDataId == Guid.Empty || uploadfile.shareDataId == null)
                {
                    shareData = new ShareData
                    {
                        Id = Guid.NewGuid(),
                        SendDate = DateTime.UtcNow,
                        SenderId = uploadfile.senderId
                    };
                    _shareDataRepository.InsertShareData(shareData);
                    await _shareDataRepository.Save();
                    _surveillanceRepository.EntityAdded(HttpContext, null, "ShareData", shareData);
                    uploadfile.shareDataId = shareData.Id;
                }
                //save info to ShareDataFiles
                var shareDataFile = new ShareDataFiles
                {
                    FileId = fileMetaData.FileId,
                    ShareDataId = uploadfile.shareDataId
                };
                _shareDataFileRepository.InsertShareDataFile(shareDataFile);
                await _shareDataFileRepository.Save();
                _surveillanceRepository.EntityAdded(HttpContext, null, "ShareDataFile", shareDataFile);
            }

            return Json(uploadfile);
        }

        [HttpPost, Route("receivers")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> UpdateFileReceivers([FromBody] ShareData shareDataObj)
        {
            if (shareDataObj.Id == null || shareDataObj.ShareFileReceivers.Count() == 0)
                return Content(ConstantMessage.INVALID_PARAMETER);

            var sharedata = await _shareDataRepository.GetShareDataById((Guid)shareDataObj.Id);
            if (sharedata == null)
                return Content("Id does not exixts");

            foreach (var receiver in shareDataObj.ShareFileReceivers)
            {
                var fileReceiver = new ShareFileReceivers
                {
                    ShareDataId = shareDataObj.Id,
                    ReceiverEmail = receiver.ReceiverEmail,
                    Mobile = receiver.Mobile,
                    ReceiverId = Guid.NewGuid()
                };

                _shareFileReceiverRepository.InsertShareFileReceiver(fileReceiver);
                await _shareFileReceiverRepository.Save();
                _surveillanceRepository.EntityAdded(HttpContext, null, "ShareFileReceiver", fileReceiver);
            }

            return Ok("File Receivers are saved succesfully");
        }

        [HttpPost, Route("link")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> GenerateLink([FromBody] ShareData postObj)
        {
            if (postObj.Id == Guid.Empty)
                return Content(ConstantMessage.INVALID_PARAMETER);

            var sharedata = await _shareDataRepository.GetShareDataById(postObj.Id);

            if (sharedata == null)
                return Content("Id does not exixts");

            var key = postObj.Id.ToString().GetHashCode().ToString("x");

            sharedata.UploadKey = key;
            sharedata.Mode = postObj.Mode;
            sharedata.SmsAuthenticationEnabled = postObj.SmsAuthenticationEnabled;

            _shareDataRepository.UpdateShareData(sharedata);
            await _shareDataRepository.Save();

            var baseurl = _configuration.LinkConfig.BaseUrl;
            _surveillanceRepository.Info(HttpContext, null, ActionType.ShareData, $"Link is generated for id = {postObj?.Id}");
            return Json(new LinkResponse
            {
                sharedataid = sharedata.Id,
                key = key,
                baseUrl = baseurl
            });
        }

        [HttpGet, Route("receivers/{key}")]
        public async Task<IActionResult> GenerateOtp(string key)
        {

            if (string.IsNullOrEmpty(key))
                return Content(ConstantMessage.INVALID_PARAMETER);

            var sharedata = await _shareDataRepository.GetShareDataByKey(key);
            if (sharedata == null)
                return Content(ConstantMessage.DATA_NOT_EXIST_WITH_KEY);
            var user = await _userRepository.GetUserById(sharedata.SenderId.Value);
            var company = await _companyRepository.GetCompanyById(user.CompanyId.Value);
            var receivers = await _shareFileReceiverRepository.GetReceivers(sharedata.Id);
            //_surveillanceRepository.Info(HttpContext, null, ActionType.OTP, $"OTP is generated successfully for key {key}");
            return Json(new
            {
                sharedata = new { sharedata.Id, sharedata.UploadKey, sharedata.SmsAuthenticationEnabled },
                receivers,
                company = new CompanyModel
                {
                    Id = company.Id,
                    Name = company.Name,
                    LogoUrl = company.LogoUrl,
                    Domain = company.Domain,
                    Address = company.Address
                }
            });
        }

        [HttpPost(), Route("sendotp")]
        public async Task<IActionResult> SendOtpMail([FromBody] OtpRequest requestObj)
        {
            string language = "en-US";
            if (requestObj.ReceiverId != Guid.Empty)
            {
                var errorMessage = "";
                var receiver = await _shareFileReceiverRepository.GetReceiverById(requestObj.ReceiverId);
                if (receiver == null)
                {
                    _surveillanceRepository.Warning(HttpContext, null, ActionType.OTP, "send otp failed due to Invalid receiver");
                    return Content("Invalid receiver");
                }
                var receiverUser = await _userRepository.GetUserByEmail(receiver.ReceiverEmail);
                if (receiverUser != null && !string.IsNullOrWhiteSpace(receiverUser.Language))
                {
                    language = receiverUser.Language;
                }
                else
                {
                    var shareData = await _shareDataRepository.GetShareDataById(receiver.ShareDataId.Value);
                    var senderUser = await _userRepository.GetUserById(shareData.SenderId.Value);
                    if (senderUser != null && !string.IsNullOrWhiteSpace(senderUser.Language))
                        language = senderUser.Language;
                }

                receiver.Otp = Guid.NewGuid().GetHashCode().ToString("x");
                _shareFileReceiverRepository.UpdateShareDataReceiver(receiver);
                await _shareFileReceiverRepository.Save();

                var otpLife = _configuration.OtpLife;
                if (requestObj.OtpStep == 1)
                {
                    await _emailManager.Send(
                        _configuration.EmailConfig.SenderEmail,
                        receiver.ReceiverEmail,
                        Utils.GetLanguageTranslation(_env.WebRootPath, language, MailTemplate.OTP_SEND_SUBJECT),
                        MailTemplate.OTP_SEND_BODY,
                        language,
                        new EmailModel { otp = receiver.Otp, url = _configuration.LinkConfig.ContactSupport },
                        HttpContext
                        );
                    _surveillanceRepository.Info(HttpContext, null, ActionType.OTP, $"OTP '{receiver.Otp}' is sent to { receiver.ReceiverEmail} successfully.");
                }
                else
                {
                    try
                    {
                        await _smsService.SendSms($"Connectid Mail SMS passcode (will expire in {otpLife} minutes): { receiver.Otp}", receiver.Mobile, HttpContext);
                        _surveillanceRepository.Info(HttpContext, null, ActionType.OTP, "OTP is sent via SMS");
                    }
                    catch (Exception ex)
                    {
                        errorMessage = ex.Message;
                        _surveillanceRepository.Info(HttpContext, null, ActionType.OTP, $"OTP is failed to send via SMS, Error: {ex.Message}");
                    }
                }

                return Json(new { receiver, OtpExpDate = DateTime.UtcNow.AddMinutes(otpLife != null ? Convert.ToInt16(otpLife) : 10), errorMessage });
            }
            else
            {
                _surveillanceRepository.Warning(HttpContext, null, ActionType.OTP, "send otp failed due to Invalid receiver");
                return Content("Invalid receiver");
            }
        }

        [HttpPost(), Route("senddownloadrequest")]
        public async Task<IActionResult> SendDownloadRequestMail([FromBody] RequestDownloadModel requestDownloadModel)
        {
            ShareFileReceivers receiver = null;
            User receiverUser = null;
            User senderUser = null;
            string filenames = string.Empty;
            var requestDownload = new RequestDownload();

            if (requestDownloadModel.Files == null || requestDownloadModel.Files.Count() <= 0)
                return Content("Files can't be empty");

            if (requestDownloadModel.ReceiverId != Guid.Empty && requestDownloadModel.ReceiverId != null)
            {
                receiver = await _shareFileReceiverRepository.GetReceiverById((Guid)requestDownloadModel.ReceiverId);

                if (receiver == null)
                    return Content("Invalid receiver");
                receiverUser = await _userRepository.GetUserByEmail(receiver.ReceiverEmail);
            }
            else
                return Content("Receiver can't be empty");

            if (requestDownloadModel.SenderId != Guid.Empty && requestDownloadModel.SenderId != null)
            {
                senderUser = await _userRepository.GetUserById((Guid)requestDownloadModel.SenderId);

                if (senderUser == null)
                    return Content(ConstantMessage.UPLOAD_FILE_SENDER_NOT_FOUND);
            }
            else
                return Content(ConstantMessage.UPLOAD_FILE_SENDER_NOT_SET);


            if (requestDownloadModel.Id == Guid.Empty || requestDownloadModel.Id == null)
            {
                requestDownload = new RequestDownload
                {
                    Id = Guid.NewGuid(),
                    ReceiverId = requestDownloadModel.ReceiverId,
                    SenderId = requestDownloadModel.SenderId
                };
                requestDownload.DownloadKey = requestDownload.Id.ToString().GetHashCode().ToString("x");

                _requestDownloadRepository.InsertRequestDownload(requestDownload);
                await _requestDownloadRepository.Save();

                foreach (var file in requestDownloadModel.Files)
                {
                    filenames += file.Name + "<br> ";
                    _requestDownLoadFilesRepository.InsertRequestDownLoadFile(new RequestDownLoadFiles
                    {
                        RequestDownloadId = requestDownload.Id,
                        FileMetadataId = file.FileId
                    });
                    await _requestDownLoadFilesRepository.Save();
                }
            }

            var baseurl = _configuration.LinkConfig.BaseUrl;
            try
            {
                await _emailManager.Send(
                    receiver.ReceiverEmail,
                    senderUser.Email,
                    Utils.GetLanguageTranslation(_env.WebRootPath, senderUser.Language, MailTemplate.DOWNLOAD_REQUEST_SUBJECT),
                    MailTemplate.DOWNLOAD_REQUEST_BODY,
                    senderUser.Language,
                    new EmailModel
                    {
                        username = receiverUser?.Name,
                        useremail = receiver.ReceiverEmail,
                        filenames = filenames,
                        downloadAcceptUrl = baseurl + "accept" + "/" + requestDownload.DownloadKey,
                        downloadRejectUrl = baseurl + "reject" + "/" + requestDownload.DownloadKey,
                        contactSupport = _configuration.LinkConfig.ContactSupport
                    },
                    HttpContext
                    );
            }

            catch (Exception ex)
            {
                await _emailManager.Send(
                    _configuration.EmailConfig.SenderEmail,
                    senderUser.Email,
                    Utils.GetLanguageTranslation(_env.WebRootPath, senderUser.Language, MailTemplate.DOWNLOAD_REQUEST_SUBJECT),
                    MailTemplate.DOWNLOAD_REQUEST_BODY,
                    senderUser.Language,
                    new EmailModel
                    {
                        username = receiverUser?.Name,
                        useremail = receiver.ReceiverEmail,
                        filenames = filenames,
                        downloadAcceptUrl = baseurl + "accept" + "/" + requestDownload.DownloadKey,
                        downloadRejectUrl = baseurl + "reject" + "/" + requestDownload.DownloadKey,
                        contactSupport = _configuration.LinkConfig.ContactSupport
                    },
                    HttpContext
                    );
            }

            return Json(requestDownloadModel);
        }

        [HttpPost(), Route("acceptdownloadrequest")]
        public async Task<IActionResult> AcceptDownloadRequestMail([FromBody] RequestDownloadModel requestDownloadModel)
        {
            ShareFileReceivers receiver = null;
            User sender = null;
            string filenames = string.Empty;
            var requestDownload = new RequestDownload();

            if (requestDownloadModel.Id == Guid.Empty || requestDownloadModel.Id == null)
                return Content("Invalid request download Id");

            if (requestDownloadModel.Files == null || requestDownloadModel.Files.Count() <= 0)
                return Content("Files can't be empty");

            if (requestDownloadModel.ReceiverId != Guid.Empty && requestDownloadModel.ReceiverId != null)
            {
                receiver = await _shareFileReceiverRepository.GetReceiverById((Guid)requestDownloadModel.ReceiverId);

                if (receiver == null)
                    return Content("Invalid receiver");
            }
            else
                return Content("Receiver can't be empty");

            if (requestDownloadModel.SenderId != Guid.Empty && requestDownloadModel.SenderId != null)
            {
                sender = await _userRepository.GetUserById((Guid)requestDownloadModel.SenderId);
                if (sender == null)
                    return Content(ConstantMessage.UPLOAD_FILE_SENDER_NOT_FOUND);
            }
            else
                return Content(ConstantMessage.UPLOAD_FILE_SENDER_NOT_SET);

            if (requestDownloadModel.Id != Guid.Empty && requestDownloadModel.Id != null)
            {
                requestDownload = await _requestDownloadRepository.GetRequestDownloadById((Guid)requestDownloadModel.Id);

                var requestDatafiles = await _requestDownLoadFilesRepository.GetRequestDownLoadFiles(requestDownload.Id);

                foreach (var requestDatafile in requestDatafiles)
                {
                    _requestDownLoadFilesRepository.DeleteRequestDownLoadFile(requestDatafile.Id);
                    await _requestDownLoadFilesRepository.Save();
                }

                foreach (var file in requestDownloadModel.Files)
                {
                    filenames += file.Name + "<br>";
                    _requestDownLoadFilesRepository.InsertRequestDownLoadFile(new RequestDownLoadFiles
                    {
                        RequestDownloadId = requestDownload.Id,
                        FileMetadataId = file.FileId
                    });
                    await _requestDownLoadFilesRepository.Save();
                }
            }

            var baseurl = _configuration.LinkConfig.BaseUrl;
            try
            {
                await _emailManager.Send(
                    sender.Email,
                    receiver.ReceiverEmail,
                    Utils.GetLanguageTranslation(_env.WebRootPath, sender.Language, MailTemplate.DOWNLOAD_FILES_SUBJECT),
                    MailTemplate.DOWNLOAD_FILES_BODY,
                    sender.Language,
                    new EmailModel
                    {
                        filenames = filenames,
                        downloadUrl = baseurl + "otp" + "/" + requestDownload.DownloadKey + "/" + "downloadpermission",
                        contactSupport = _configuration.LinkConfig.ContactSupport
                    },
                    HttpContext
                    );
            }

            catch (Exception ex)
            {
                await _emailManager.Send(
                    _configuration.EmailConfig.SenderEmail,
                    receiver.ReceiverEmail,
                    Utils.GetLanguageTranslation(_env.WebRootPath, sender.Language, MailTemplate.DOWNLOAD_FILES_SUBJECT),
                    MailTemplate.DOWNLOAD_FILES_BODY,
                    sender.Language,
                    new EmailModel
                    {
                        filenames = filenames,
                        downloadUrl = baseurl + "otp" + "/" + requestDownload.DownloadKey + "/" + "downloadpermission",
                        contactSupport = _configuration.LinkConfig.ContactSupport
                    },
                    HttpContext
                    );
            }

            return Json(receiver);
        }

        [HttpGet, Route("acceptrequestfiles/{key}")]
        public async Task<IActionResult> GetRequestFiles(string key)
        {
            if (string.IsNullOrEmpty(key))
                return Content(ConstantMessage.INVALID_PARAMETER);

            var requestDownload = await _requestDownloadRepository.GetRequestDownloadByKey(key);

            if (requestDownload == null)
                return Content(ConstantMessage.DATA_NOT_EXIST_WITH_KEY);

            var sender = await _userRepository.GetUserById((Guid)requestDownload.SenderId);
            var receiver = await _shareFileReceiverRepository.GetReceiverById((Guid)requestDownload.ReceiverId);

            var requestDatafiles = await _requestDownLoadFilesRepository.GetRequestDownLoadFiles(requestDownload.Id);

            var files = new List<FileMetaDataResponse>();
            foreach (var requestDatafile in requestDatafiles)
            {
                var file = await _fileRepository.GetFileById((Guid)requestDatafile.FileMetadataId);
                files.Add(new FileMetaDataResponse
                {
                    FileId = file.FileId,
                    Name = file.Name,
                    Type = file.Type,
                    FileUrl = file.FileUrl,
                });
            }

            var requestDownloadFiles = new RequestDownloadFileResponse
            {
                requestDownloadId = requestDownload.Id,
                sender = new UserModel
                {
                    Id = sender.Id,
                    Email = sender.Email,
                    CompanyId = sender.CompanyId,
                    Name = sender.Name,
                    Type = sender.Type
                },
                receiver = new ReceiverModel
                {
                    Id = (Guid)receiver.ReceiverId,
                    ReceiverEmail = receiver.ReceiverEmail
                },
                files = files
            };

            return Json(requestDownloadFiles);
        }

        [HttpDelete, Route("rejectrequestdownload/{key}")]
        public async Task<IActionResult> DeleteRequestDownload(string key)
        {
            if (string.IsNullOrEmpty(key))
                return Content(ConstantMessage.INVALID_PARAMETER);

            var requestDownload = await _requestDownloadRepository.GetRequestDownloadByKey(key);

            if (requestDownload == null)
                return Content(ConstantMessage.DATA_NOT_EXIST_WITH_KEY);

            var sender = await _userRepository.GetUserById((Guid)requestDownload.SenderId);
            var receiver = await _shareFileReceiverRepository.GetReceiverById((Guid)requestDownload.ReceiverId);

            var requestDatafiles = await _requestDownLoadFilesRepository.GetRequestDownLoadFiles(requestDownload.Id);

            var files = new List<FileMetaDataResponse>();
            foreach (var requestDatafile in requestDatafiles)
            {
                _requestDownLoadFilesRepository.DeleteRequestDownLoadFile(requestDatafile.Id);
                await _requestDownLoadFilesRepository.Save();
            }
            _requestDownloadRepository.DeleteRequestDownload(requestDownload.Id);
            await _requestDownloadRepository.Save();

            return Ok("Request data has been deleted");
        }

        //[ServiceFilter(typeof(AuthAttribute))]
        [HttpGet, Route("files/{otp}")]
        public async Task<IActionResult> GetFiles(string otp)
        {
            if (string.IsNullOrEmpty(otp))
                return Content(ConstantMessage.INVALID_PARAMETER);

            var sharedataFileReceiver = await _shareFileReceiverRepository.GetShareDataReceiver(otp);

            if (sharedataFileReceiver == null)
                return Content(ConstantMessage.DATA_NOT_EXIST_WITH_KEY);

            var sharedata = await _shareDataRepository.GetShareDataById((Guid)sharedataFileReceiver.ShareDataId);
            var shareDatafiles = await _shareDataFileRepository.GetShareDataFiles(sharedata.Id);

            var sender = await _userRepository.GetUserById((Guid)sharedata.SenderId);
            var receiver = await _shareFileReceiverRepository.GetShareDataReceiver(otp);

            var files = new List<FileMetaDataResponse>();
            foreach (var shareDatafile in shareDatafiles)
            {
                var file = await _fileRepository.GetFileById((Guid)shareDatafile.FileId);
                if (file.IsDeleted != true)
                {
                    files.Add(new FileMetaDataResponse
                    {
                        FileId = file.FileId,
                        Name = file.Name,
                        Type = file.Type,
                        FileUrl = file.FileUrl,
                        Mode = shareDatafile.Mode,
                        ExpDate = file.ExpDate
                    });
                }
            }

            var requestDownloadFiles = new RequestDownloadFileResponse
            {
                shareId = sharedata.Id,
                sender = new UserModel
                {
                    Id = sender.Id,
                    Email = sender.Email,
                    CompanyId = sender.CompanyId,
                    Name = sender.Name,
                    Type = sender.Type
                },
                receiver = new ReceiverModel
                {
                    Id = (Guid)receiver.ReceiverId,
                    ReceiverEmail = receiver.ReceiverEmail
                },
                files = files
            };

            return Json(requestDownloadFiles);
        }

        [ServiceFilter(typeof(AuthAttribute))]
        [HttpGet, Route("filemetadatas")]
        public async Task<IActionResult> GetFileMetadatas()
        {
            var fileMetadatas = await _fileRepository.GetAllFileMetadatas();
            return Json(fileMetadatas);
        }

        // PUT: api/FileStorage/5
        [ServiceFilter(typeof(AuthAttribute))]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [ServiceFilter(typeof(AuthAttribute))]
        [HttpDelete("{id}")]
        public async Task<string> Delete(Guid id)
        {
            try
            {
                var fileInfo = await _fileRepository.GetFileById(id);
                CloudBlobClient blobClient = _storageAccount.CreateCloudBlobClient();

                CloudBlockBlob blockBlob = new CloudBlockBlob(new Uri(fileInfo.FileUrl), blobClient);

                var isDeleted = await blockBlob.DeleteIfExistsAsync();
                _surveillanceRepository.Info(HttpContext, null, ActionType.FileUpload, $"blob file {fileInfo?.FileUrl} deleted succesffully");
                if (isDeleted)
                {
                    fileInfo.IsDeleted = true;
                    fileInfo.DeletedDate = DateTime.UtcNow;
                    _fileRepository.UpdateFile(fileInfo);
                    await _fileRepository.Save();
                }
                return fileInfo.Name;
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(HttpContext, null, $"blob file id = {id} failed to delete. Error: {ex.Message}", Severity.Medium, ex, ActionType.FileUpload);
                return null;
            }
        }

        private async Task<FileMetaData> UploadToBlobStorage(IFormFile file, User user)
        {
            try
            {
                string newfileName = Path.GetFileName(file.FileName);
                var container = await GetBlobContainer(user);
                if(container == null)
                {
                    throw new Exception($"Blob container isn't found for user '{user?.Name}({user?.Email})'");
                }
                CloudBlockBlob blockBlob = container.GetBlockBlobReference(string.Concat(user?.Name?.ToLower(), "/", newfileName));
                if(blockBlob == null)
                {
                    throw new Exception($"Cloud block blob isn't found for user '{user?.Name}({user?.Email})'");
                }
                int i = 0;
                while (await blockBlob.ExistsAsync())
                {
                    newfileName = string.Format("{0}-{1}{2}", Path.GetFileNameWithoutExtension(file.FileName), i.ToString("0000"), Path.GetExtension(file.FileName));
                    blockBlob = container.GetBlockBlobReference(string.Concat(user.Name.ToLower(), "/", newfileName));
                    i++;
                }

                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var byteArray = ms.ToArray();
                    await blockBlob.UploadFromByteArrayAsync(byteArray, 0, byteArray.Length);
                }

                var fileLifeSetting = _configuration.ShareFileLife;
                var fileMetaData = new FileMetaData
                {
                    FileId = Guid.NewGuid(),
                    Name = newfileName,
                    Type = file.ContentType,
                    Size = file.Length,
                    FileUrl = blockBlob.Uri.ToString(),
                    ExpDate = DateTime.UtcNow.AddDays(fileLifeSetting ?? 3)
                };
                return fileMetaData;
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(HttpContext, null, $"File {file?.FileName} failed to upload to blob. Error: {ex.Message}, File Size: {file.Length}", Severity.Medium, ex, ActionType.FileUpload);
                throw ex;
            }
        }

        private async Task<FileMetaData> UploadTextToBlobStorage(UploadFile fileUpload, User user)
        {
            try
            {
                //string fileName = Regex.Replace(fileUpload.fileName, @"[^a-zA-Z0-9+-]+", "-");            
                string fileName = fileUpload.fileName;
                fileName = fileName.Trim(new Char[] { ' ', '-', '_', '+', '=' });
                fileName = fileName.Length > 150 ? fileName.Substring(0, 150) : (fileName.Length == 0 ? "Secure Message" : fileName);
                string newfileName = $"{fileName}.txt";
                var container = await GetBlobContainer(user);

                if (fileUpload.fileId.HasValue)
                {
                    var fileMetaDataOld = await _fileRepository.GetFileById(fileUpload.fileId.Value);
                    CloudBlockBlob blobToDelete = container.GetBlockBlobReference(string.Concat(user.Name.ToLower(), "/", fileMetaDataOld.Name));
                    var isDeleted = await blobToDelete.DeleteIfExistsAsync();
                }

                CloudBlockBlob blockBlob = container.GetBlockBlobReference(string.Concat(user.Name.ToLower(), "/", newfileName));
                int i = 0;
                while (await blockBlob.ExistsAsync())
                {
                    newfileName = $"{fileName}-{i.ToString("0000")}.txt";
                    blockBlob = container.GetBlockBlobReference(string.Concat(user.Name.ToLower(), "/", newfileName));
                    i++;
                }

                using (var ms = GenerateStreamFromString($"{fileUpload.fileName}\r\n\r\n{fileUpload.textContent}"))
                {
                    var byteArray = ms.ToArray();
                    await blockBlob.UploadFromByteArrayAsync(byteArray, 0, byteArray.Length);
                }

                var fileLifeSetting = _configuration.ShareFileLife;
                var fileMetaData = new FileMetaData
                {
                    FileId = Guid.NewGuid(),
                    Name = newfileName,
                    Type = "text/plain",
                    Size = fileUpload.textContent.Length,
                    FileUrl = blockBlob.Uri.ToString(),
                    ExpDate = DateTime.UtcNow.AddDays(fileLifeSetting ?? 3)
                };
                return fileMetaData;
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(HttpContext, null, $"Text file {fileUpload?.fileName} failed to upload to blob. Error: {ex.Message}", Severity.Medium, ex, ActionType.FileUpload);
                throw ex;
            }
        }

        private async Task<CloudBlobContainer> GetBlobContainer(User user)
        {
            try
            {
                CloudBlobClient blobClient = _storageAccount.CreateCloudBlobClient();
                string usercompanyname = Regex.Replace(user.Company.Name, @"[^a-zA-Z0-9+-]+", "-");
                usercompanyname = usercompanyname.Trim(new Char[] { ' ', '-' });
                if (usercompanyname.Length > 63)
                {
                    usercompanyname = usercompanyname.Substring(0, 61);
                }
                CloudBlobContainer container = blobClient.GetContainerReference(usercompanyname.Replace(" ", "").ToLower());

                bool created = await container.CreateIfNotExistsAsync();

                await container.SetPermissionsAsync(new BlobContainerPermissions { PublicAccess = BlobContainerPublicAccessType.Off });

                return container;
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(HttpContext, null, $"Get blob container for user {user?.Email} failed. Error: {ex.Message}", Severity.Low, ex, ActionType.FileUpload);
                return null;
            }
        }
        [ServiceFilter(typeof(SchedulerJobAttribute))]
        [HttpGet, Route("deleteexpiredfile")]
        public async Task<IActionResult> DeleteExpiredFile()
        {
            var fileMetadatas = await _fileRepository.GetAllFileMetadatas();
            var expiredFileLlist = fileMetadatas.Where(p => p.ExpDate != null && p.ExpDate < DateTime.UtcNow && p.IsDeleted != true).ToList();
            int deletedCount = 0;
            foreach (var fileInfo in expiredFileLlist)
            {
                try
                {
                    CloudBlobClient blobClient = _storageAccount.CreateCloudBlobClient();
                    CloudBlockBlob blockBlob = new CloudBlockBlob(new Uri(fileInfo.FileUrl), blobClient);

                    var isDeleted = false;
                    var isExist = await blockBlob.ExistsAsync();

                    if (isExist)
                    {
                        isDeleted = await blockBlob.DeleteIfExistsAsync();
                    }
                    else
                    {
                        isDeleted = true;
                    }

                    if (isDeleted)
                    {
                        fileInfo.IsDeleted = true;
                        fileInfo.DeletedDate = DateTime.UtcNow;
                        _fileRepository.UpdateFile(fileInfo);
                        await _fileRepository.Save();
                    }
                    deletedCount++;
                }
                catch (Exception ex)
                {
                    _surveillanceRepository.Error(HttpContext, null, $"blob file {fileInfo?.Name} failed to delete. Error: {ex.Message}", Severity.Low, ex, ActionType.FileUpload);
                    continue;
                }
            }
            return Json(new { ExpiredFileCount = expiredFileLlist.Count, DeletedFileCount = deletedCount });
        }

        [HttpHead, Route("downloadblob/{fileid}")]
        public async Task<IActionResult> downloadblob(Guid fileid)
        {
            if (fileid == null && fileid == Guid.Empty)
                return Content("Invalid param");
            var file = await _fileRepository.GetFileById(fileid);

            if (file == null)
                return Content("File not found");

            try
            {
                CloudBlobClient blobClient = _storageAccount.CreateCloudBlobClient();

                Uri blobUri = new Uri(file.FileUrl);
                CloudBlockBlob blob = new CloudBlockBlob(blobUri, blobClient);//added storageCredentials

                MemoryStream mem = new MemoryStream();
                await blob.DownloadToStreamAsync(mem);
                return File(mem.ToArray(), "application / pdf", file.Name);

            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        [HttpGet, Route("downloadblob/{fileid}")]
        public async Task<IActionResult> downloadblobget(Guid fileid)
        {
            if (fileid == null && fileid == Guid.Empty)
                return Content("Invalid param");
            var file = await _fileRepository.GetFileById(fileid);

            if (file == null)
                return Content("File not found");

            try
            {
                CloudBlobClient blobClient = _storageAccount.CreateCloudBlobClient();

                Uri blobUri = new Uri(file.FileUrl);
                CloudBlockBlob blob = new CloudBlockBlob(blobUri, blobClient);//added storageCredentials

                MemoryStream mem = new MemoryStream();
                await blob.DownloadToStreamAsync(mem);
                return File(mem.ToArray(), file.Type, file.Name);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        [HttpGet, Route("viewblob/{fileid}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> viewblob(Guid fileid)
        {
            if (fileid == null && fileid == Guid.Empty)
                return Content("Invalid param");
            var file = await _fileRepository.GetFileById(fileid);

            if (file == null)
                return Content("File not found");

            try
            {
                CloudBlobClient blobClient = _storageAccount.CreateCloudBlobClient();

                Uri blobUri = new Uri(file.FileUrl);
                CloudBlockBlob blob = new CloudBlockBlob(blobUri, blobClient);//added storageCredentials

                SharedAccessBlobPolicy sasConstraints = new SharedAccessBlobPolicy
                {
                    SharedAccessExpiryTime = DateTime.UtcNow.AddDays(2),
                    Permissions = SharedAccessBlobPermissions.Read
                };

                string sasBlobToken = blob.GetSharedAccessSignature(sasConstraints);

                return Ok(blob.Uri + sasBlobToken);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }
        [HttpGet, HttpHead, Route("viewfile/{fileid}/{fileName}")]
        public async Task<IActionResult> ViewFile(Guid fileid, string fileNale)
        {
            if (fileid == null && fileid == Guid.Empty)
                return Content("Invalid param");
            var file = await _fileRepository.GetFileById(fileid);

            if (file == null)
                return Content("File not found");

            try
            {
                var blobClient = _storageAccount.CreateCloudBlobClient();

                var blobUri = new Uri(file.FileUrl);
                var blob = new CloudBlockBlob(blobUri, blobClient);

                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", HostingDirectory.Files);

                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                var filePath = $"{path}/{fileid}_{Guid.NewGuid()}_{file.Name}";
                await blob.DownloadToFileAsync(filePath, FileMode.Create);
                var fileContent = System.IO.File.ReadAllBytes(filePath);
                if (System.IO.File.Exists(filePath))
                    System.IO.File.Delete(filePath);
                return File(fileContent, file.Type);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }
        [HttpGet, Route("viewbloburl/{fileid}")]
        public async Task<IActionResult> ViewBlobUrl(Guid fileid)
        {
            if (fileid == null && fileid == Guid.Empty)
                return Content("Invalid param");
            var file = await _fileRepository.GetFileById(fileid);

            if (file == null)
                return Content("File not found");

            try
            {
                CloudBlobClient blobClient = _storageAccount.CreateCloudBlobClient();

                Uri blobUri = new Uri(file.FileUrl);
                CloudBlockBlob blob = new CloudBlockBlob(blobUri, blobClient);//added storageCredentials
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", HostingDirectory.Files, fileid.ToString());

                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                var filePath = path + "/" + file.Name;
                await blob.DownloadToFileAsync(filePath, FileMode.Create);

                return Ok(fileid + "/" + file.Name);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        [HttpDelete, Route("deletetemp")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> DeleteTemp()
        {
            try
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", HostingDirectory.Files);

                if (Directory.Exists(path))
                {
                    Directory.Delete(path, true);
                }
                return Ok("Temp deleted successfully");
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        [HttpGet, Route("getlanguage/{language}")]
        public ActionResult GetLanguage(string language)
        {
            var webRoot = _env.WebRootPath;
            var filecontent = Utils.ReadLanguageFile(webRoot, language);
            return Ok(filecontent);
        }

        [HttpGet, Route("getlanguage/{language}/{key}")]
        public ActionResult GetTranslation(string language, string key)
        {
            var webRoot = _env.WebRootPath;
            var translation = Utils.GetLanguageTranslation(webRoot, language, key);
            return Ok(translation);
        }

        [HttpGet, Route("getcountrycode")]
        public ActionResult GetCountryCode()
        {
            var webRoot = _env.WebRootPath;
            var filepath = System.IO.Path.Combine(webRoot, "Resources/country.json");
            var filecontent = System.IO.File.ReadAllText(filepath);
            var dd = JsonConvert.DeserializeObject(filecontent);
            return Ok(filecontent);
        }

        private MemoryStream GenerateStreamFromString(string s)
        {
            var stream = new MemoryStream();
            var writer = new StreamWriter(stream);
            writer.Write(s);
            writer.Flush();
            stream.Position = 0;
            return stream;
        }
    }
}
