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
    [Route("api/postdata")]

    public class PostDataController : Controller
    {
        private readonly IHostingEnvironment _env;
        private readonly EmailManager _emailManager;
        private readonly IFileRepository _fileRepository;
        private readonly IUserRepository _userRepository;
        private readonly ICompanyRepository _companyRepository;
        private readonly IPostDataRepository _postDataRepository;
        private readonly IPostDataFieldRepository _postDataFieldRepository;
        private readonly IPostDataFilesRepository _postDataFileRepository;
        private readonly IPostDataReceiverRepository _postDataReceiverRepository;
        private readonly IPostDataFieldValueRepository _postDataFieldValueRepository;
        private readonly IAdminFolderRepository _adminFolderRepository;
        private readonly IShareDataFilesRepository _shareDataFilesRepository;
        private readonly ISharedFolderFileRepository _sharedFolderFileRepository;
        private readonly ISharedFolderRepository _sharedFolderRepository;
        private readonly IStorageConfigRepository _storageConfigRepository;
        private readonly ShareSimpleConfiguration _configuration;
        private readonly ISurveillanceRepository _surveillanceRepository;
        public PostDataController(
            IHostingEnvironment env,
            EmailManager emailManager,
            IFileRepository fileRepository,
            IUserRepository userRepository,
            ICompanyRepository companyRepository,
            IPostDataFilesRepository postDataFilesRepository,
            IPostDataFieldRepository postDataFieldRepository,
            IPostDataReceiverRepository postDataReceiverRepository,
            IPostDataFieldValueRepository postDataFieldValueRepository,
            IPostDataRepository postDataRepository,
            ShareSimpleConfiguration configuration,
            IAdminFolderRepository adminFolderRepository,
            IShareDataFilesRepository shareDataFilesRepository,
            ISharedFolderFileRepository sharedFolderFileRepository,
            ISharedFolderRepository sharedFolderRepository,
            IStorageConfigRepository storageConfigRepository,
            ISurveillanceRepository surveillanceRepository)
        {
            _env = env;
            _emailManager = emailManager;
            _fileRepository = fileRepository;
            _userRepository = userRepository;
            _postDataFileRepository = postDataFilesRepository;
            _postDataFieldRepository = postDataFieldRepository;
            _postDataReceiverRepository = postDataReceiverRepository;
            _postDataFieldValueRepository = postDataFieldValueRepository;
            _postDataRepository = postDataRepository;
            _configuration = configuration;
            _adminFolderRepository = adminFolderRepository;
            _shareDataFilesRepository = shareDataFilesRepository;
            _sharedFolderFileRepository = sharedFolderFileRepository;
            _sharedFolderRepository = sharedFolderRepository;
            _storageConfigRepository = storageConfigRepository;
            _companyRepository = companyRepository;
            _surveillanceRepository = surveillanceRepository;
        }

        // POST: api/postdata
        [ServiceFilter(typeof(AuthAttribute))]
        [HttpPost]
        public async Task<IActionResult> PostData([FromBody] PostDataModel postData)
        {
            if (postData.PostDataFields == null || postData.PostDataFields.Count() <= 0)
                return Content("Post Data Field missing");

            if (string.IsNullOrEmpty(postData.SenderEmail))
                return Content("Sender can not be empty");

            var sender = await _userRepository.GetUserByEmail(postData.SenderEmail);

            if (sender == null)
                return Content("Invalid Sender");
            else
                postData.SenderId = sender.Id;

            if (postData.Id == Guid.Empty || postData.Id == null)
            {
                postData.Id = Guid.NewGuid();

                _postDataRepository.InsertPostData(new PostData
                {
                    Id = (Guid)postData.Id,
                    SenderId = postData.SenderId,
                    SendDate = DateTime.UtcNow
                });
                await _postDataRepository.Save();

                foreach (var pField in postData.PostDataFields)
                {
                    var postdataField = new PostDataField
                    {
                        Id = Guid.NewGuid(),
                        PostDataId = (Guid)postData.Id,
                        FieldName = pField.FieldName,
                        FieldType = pField.FieldType,
                        SendDate = DateTime.UtcNow
                    };
                    _postDataFieldRepository.InsertPostDataField(postdataField);
                    await _postDataFieldRepository.Save();
                    pField.Id = postdataField.Id;
                }
            }
            else
            {
                var postdataObj = await _postDataRepository.GetPostDataById((Guid)postData.Id);

                if (postdataObj == null)
                    return Content("Invalid postdata");

                foreach (var pField in postData.PostDataFields)
                {
                    var postdataField = new PostDataField
                    {
                        Id = Guid.NewGuid(),
                        PostDataId = (Guid)postdataObj.Id,
                        FieldName = pField.FieldName,
                        FieldType = pField.FieldType,
                        SendDate = DateTime.UtcNow
                    };
                    _postDataFieldRepository.InsertPostDataField(postdataField);
                    await _postDataFieldRepository.Save();
                    pField.Id = postdataField.Id;
                }
            }

            return Json(postData);
        }


        [HttpGet, Route("trustedlink/{key}")]
        public async Task<IActionResult> GetTrustedLink(string key)
        {
            if (string.IsNullOrEmpty(key))
                return Content("Invalid param");
            var tlId = Guid.Empty;
            try
            {
                tlId = new Guid(Utils.DecodeToBase64(key));
            }
            catch ( Exception ex)
            {
                return Content("Invalid param");
            }

            if (tlId == null || tlId == Guid.Empty)
            {
                return Content("Invalid param");
            }

            var adminFolder = await _adminFolderRepository.GetAdminFolderById(tlId);
            if (adminFolder != null)
            {
                var linkCompany = await _companyRepository.GetCompanyById(adminFolder.CompanyId.Value);
                adminFolder.Company = new Company
                {
                    Id = linkCompany.Id,
                    Name = linkCompany.Name,
                    Address = linkCompany.Address,
                    LogoUrl = linkCompany.LogoUrl,
                    WebSite = linkCompany.WebSite,
                    Domain = linkCompany.Domain
                };
                return Json(adminFolder);
            }

            return Json(new { });
        }
        // POST: api/file
        [HttpPost, Route("upload")]
        //[ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> UploadFile(UploadFile uploadfile)
        {
            if (uploadfile.receiverId == null || uploadfile.receiverId == Guid.Empty)
                return Content("Receiver Id can not be null.");

            if (uploadfile.file == null || uploadfile.file.Length <= 0)
                return Content("File not selected");

            if (uploadfile.PostDataId == null)
                return Content("Post data id can't null");

            if (uploadfile.PostDataFieldId == null)
                return Content("Post data field id can't null");

            if (String.IsNullOrEmpty(uploadfile.senderEmail))
                return Content("Sender can not be empty");

            var sender = await _userRepository.GetUserByEmail(uploadfile.senderEmail);
            var receiver = await _postDataReceiverRepository.GetReceiverById((Guid)uploadfile.receiverId);

            if (sender == null)
                return Content("Invalid Sender");
            else
            {
                uploadfile.senderId = sender.Id;
                sender.Company = await _companyRepository.GetCompanyById((Guid)sender.CompanyId);
            }

            var postdataObj = await _postDataRepository.GetPostDataById((Guid)uploadfile.PostDataId);

            if (postdataObj == null)
                return Content("Invalid postdata");

            var file = uploadfile.file;
            FileMetaData fileMetaData = new FileMetaData();
            bool storeToBlob = _configuration.UseBlobStorage;
            if (storeToBlob)
            {
                fileMetaData = await UploadToBlobStorage(file, sender, receiver, postdataObj.Id);
                _surveillanceRepository.Info(HttpContext, null, ActionType.FileUpload, $"File {file.FileName} uploaded to blob storage successfully");
            }
            else
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.FileName);

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
                _surveillanceRepository.Info(HttpContext, null, ActionType.FileUpload, $"File {file.FileName} uploaded to file system '{path}' successfully");
            }

            fileMetaData.CreatedDate = DateTime.UtcNow;
            _fileRepository.InsertFile(fileMetaData);
            await _fileRepository.Save();
            uploadfile.fileId = fileMetaData.FileId;

            //save file into PostDataFiles
            _postDataFileRepository.InsertPostDataFile(new PostDataFiles
            {
                FileId = fileMetaData.FileId,
                PostDataId = (Guid)uploadfile.PostDataId,
                PostDataFieldId = uploadfile.PostDataFieldId,
                ReceiverId = uploadfile.receiverId,
                //Mode = uploadfile.mode
            });

            await _postDataFileRepository.Save();
            uploadfile.fileName = fileMetaData.Name;
            return Json(uploadfile);
        }

        // POST: api/updatefield
        [HttpPost, Route("senddata")]
        public async Task<IActionResult> UpdatePostDataField([FromBody] PostDataModel postData)
        {

            if (postData.Id == Guid.Empty || postData.Id == null)
                return Content("Invalid postdata Id");

            if (postData.ReceiverId == Guid.Empty || postData.ReceiverId == null)
                return Content("Invalid receiver Id");

            var postdataObj = await _postDataRepository.GetPostDataById((Guid)postData.Id);

            if (postdataObj == null)
                return Content("Invalid postdata");

            var sender = await _userRepository.GetUserById((Guid)postData.SenderId);
            var receiver = await _postDataReceiverRepository.GetReceiverById((Guid)postData.ReceiverId);
            var receiverUser = await _userRepository.GetUserByEmail(receiver?.ReceiverEmail);
            var files = await _postDataFileRepository.GetPostDataFiles((Guid)postData.Id, (Guid)postData.ReceiverId);

            string filenames = string.Empty;
            int? fileLifeSetting;
            var company = await _companyRepository.GetCompanyById((Guid)sender.CompanyId);
            var sConfig = await _storageConfigRepository.GetStorageConfigByCompId(company.Id);
            if (sConfig != null && sConfig.FileAvailability != null)
            {
                fileLifeSetting = sConfig.FileAvailability;
            }
            else
            {
                fileLifeSetting = _configuration.RequestedFileLife;
            }

            foreach (var file in files)
            {
                var fileMetaData = await _fileRepository.GetFileById((Guid)file.FileId);
                filenames += fileMetaData.Name + "<br>";

                fileMetaData.ExpDate = DateTime.Now.AddDays(fileLifeSetting ?? 3);
            }

            string postdataFields = string.Empty;
            foreach (var postdataField in postData.PostDataFields)
            {
                var field = await _postDataFieldRepository.GetPostDataFieldById(postdataField.Id);

                _postDataFieldValueRepository.InsertPostDataFieldValue(new PostDataFieldValue
                {
                    FieldValue = postdataField.FieldValue,
                    ReceiverId = postData.ReceiverId,
                    FieldId = postdataField.Id
                });

                await _postDataFieldValueRepository.Save();
                postdataFields += field.FieldName + "<br>";
            }

            receiver.Submitted = true;
            await _postDataReceiverRepository.Save();

            var baseurl = _configuration.LinkConfig.BaseUrl;
            var emailModel = new EmailModel
            {
                receivername = receiverUser?.Name,
                receivermail = receiver.ReceiverEmail,
                postdatafields = postdataFields,
                postdatafiles = filenames,
                url = baseurl + "otp" + "/" + postdataObj.PostDataKey + "_" + postData.ReceiverId + "/" + "showpostdata",
                contactSupport = _configuration.LinkConfig.ContactSupport
            };
            try
            {
                await _emailManager.Send(
                    receiver.ReceiverEmail,
                    sender.Email,
                    Utils.GetLanguageTranslation(_env.WebRootPath, sender.Language, MailTemplate.POSTDATA_SHARE_SUBJECT),
                    MailTemplate.POSTDATA_SHARE_BODY,
                    sender.Language,
                    emailModel,
                    HttpContext,
                    null,
                    "Post data share email"
                    );
            }

            catch (Exception ex)
            {
                await _emailManager.Send(
                    _configuration.EmailConfig.SenderEmail,
                    sender.Email,
                    Utils.GetLanguageTranslation(_env.WebRootPath, sender.Language, MailTemplate.POSTDATA_SHARE_SUBJECT),
                    MailTemplate.POSTDATA_SHARE_BODY,
                    sender.Language,
                    emailModel,
                    HttpContext,
                     null,
                    "Post data share email"
                    );
            }

            return Ok("Mail sent successfully");
        }
        // Post data folder report
        [HttpGet, Route("company/{companyId}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> GetPostDataByCompId(Guid companyId)
        {
            if (companyId == Guid.Empty || companyId == null)
                return Content("Invalid company Id");

            var users = await _userRepository.GetUsersByCompanyId(companyId);

            List<PostDataResponse> postDataResponses = null;

            var folderResponse = new List<FolderResponse>();

            foreach (var user in users)
            {
                var postDatas = await _postDataRepository.GetAllPostData(user.Id);
                postDataResponses = new List<PostDataResponse>();
                foreach (var postData in postDatas)
                {
                    var postDataReceivers = (await _postDataReceiverRepository.GetReceivers(postData.Id)).Where(x => x.Submitted == true && x.IsSavedDataGenerated == true);

                    foreach (var postDataReceiver in postDataReceivers)
                    {
                        var pdataFiles = new List<PostDataFiles>();

                        var files = await _postDataFileRepository.GetPostDataFiles(postDataReceiver.PostDataId.Value, postDataReceiver.ReceiverId.Value);
                        foreach (var file in files)
                        {
                            var fileMetaData = await _fileRepository.GetFileById((Guid)file.FileId);
                            if (fileMetaData.IsDeleted != true)
                            {
                                pdataFiles.Add(file);
                            }
                        }

                        var postdataFiles = new List<FileMetaDataResponse>();

                        foreach (var file in pdataFiles)
                        {
                            var postdataResponse = new PostDataResponse
                            {
                                Id = postData.Id,
                                PostDataFiles = postdataFiles,
                                SenderName = user.Name,
                                SenderId = postData.SenderId,
                                PostDataKey = postData.PostDataKey,
                                SenderEmail = user.Email,
                                SentDate = postData.SendDate,
                                NoOfFiles = 1
                            };

                            postDataResponses.Add(postdataResponse);
                        }
                    }
                }

                folderResponse.Add(new FolderResponse
                {
                    postDatas = postDataResponses,
                    userModel = new UserModel
                    {
                        Id = user.Id,
                        Email = user.Email,
                        Name = user.Name,
                    }
                });
            }

            return Json(folderResponse);
        }

        // Post data folder report
        [HttpGet, Route("user/{userId}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> GetPostDataByUserId(Guid userId)
        {
            if (userId == Guid.Empty || userId == null)
                return Content("Invalid user Id");

            var user = await _userRepository.GetUserById(userId);

            if (user == null)
                return Content("Invalid user Id");

            var postDataResponses = new List<PostDataResponse>();

            var postDatas = await _postDataRepository.GetAllPostData(user.Id);

            foreach (var postData in postDatas)
            {
                var postDataReceivers = (await _postDataReceiverRepository.GetReceivers(postData.Id)).Where(x => x.Submitted == true && x.IsSavedDataGenerated == true);

                foreach (var postDataReceiver in postDataReceivers)
                {
                    var files = await _postDataFileRepository.GetPostDataFiles(postDataReceiver.PostDataId.Value, postDataReceiver.ReceiverId.Value);

                    var postdataFiles = new List<FileMetaDataResponse>();

                    foreach (var file in files)
                    {
                        var fileMetaData = await _fileRepository.GetFileById((Guid)file.FileId);
                        if (fileMetaData.IsDeleted != true)
                        {
                            postdataFiles.Add(new FileMetaDataResponse
                            {
                                FileId = fileMetaData.FileId,
                                FileUrl = fileMetaData.FileUrl,
                                Name = fileMetaData.Name,
                                Size = fileMetaData.Size,
                                Type = fileMetaData.Type,
                                ExpDate = fileMetaData.ExpDate,
                                FileFolder = fileMetaData.FileFolder,
                                IsDeleted = fileMetaData.IsDeleted,
                                DeletedDate = fileMetaData.DeletedDate,
                                CreatedDate = fileMetaData.CreatedDate
                            });
                        }
                    }

                    var postdataResponse = new PostDataResponse
                    {
                        Id = postData.Id,
                        PostDataFiles = postdataFiles,
                        SenderName = user.Name,
                        SenderId = postData.SenderId,
                        PostDataKey = postData.PostDataKey,
                        SenderEmail = user.Email,
                        SentDate = postData.SendDate,
                        NoOfFiles = files.Count(),
                    };

                    postDataResponses.Add(postdataResponse);
                }
            }

            postDataResponses = postDataResponses.OrderByDescending(x => x.SentDate).ToList();

            return Json(postDataResponses);
        }

        [HttpGet, Route("{key}/{receiverId}")]
        public async Task<IActionResult> GetPostData(string key, Guid receiverId)
        {
            if (string.IsNullOrEmpty(key))
                return Content("Invalid params");

            var postData = await _postDataRepository.GetPostDataByKey(key);
            if (postData == null)
                return Content("Data does not exixts with the key");
            var user = await _userRepository.GetUserById((Guid)postData.SenderId);

            var foldername = string.Empty;
            var fields = await _postDataFieldRepository.GetPostDataFields(postData.Id);
            fields = fields.OrderBy(f => f.SendDate);
            var files = await _postDataFileRepository.GetPostDataFiles(postData.Id, receiverId);
            var postdataFields = new List<PostDataFieldModel>();
            var postdataFiles = new List<FileMetaDataResponse>();

            foreach (var f in fields)
            {
                var fieldValueObj = await _postDataFieldValueRepository.GetPostDataFieldValueById(f.Id, receiverId);
                postdataFields.Add(new PostDataFieldModel
                {
                    Id = f.Id,
                    FieldName = f.FieldName,
                    FieldType = f.FieldType,
                    FieldValue = fieldValueObj != null ? fieldValueObj.FieldValue : "",
                    PostDataId = postData.Id
                });
            }

            foreach (var file in files)
            {
                var fileMetaData = await _fileRepository.GetFileById((Guid)file.FileId);

                var pfield = postdataFields.SingleOrDefault(pf => pf.Id == file.PostDataFieldId);

                if (pfield != null && file.PostDataFieldId == pfield.Id)
                {
                    if (pfield.FieldValues == null || pfield.FieldValues.Count() <= 0)
                    {
                        pfield.FieldValues = new List<FileMetaDataResponse>();
                    }

                    var fmResponse = new FileMetaDataResponse
                    {
                        FileId = fileMetaData.FileId,
                        FileUrl = fileMetaData.FileUrl,
                        Name = fileMetaData.Name,
                        Size = fileMetaData.Size,
                        Type = fileMetaData.Type,
                        ExpDate = fileMetaData.ExpDate,
                        FileFolder = fileMetaData.FileFolder
                    };
                    pfield.FieldValues.Add(fmResponse);

                    foldername = fileMetaData.FileFolder;
                    postdataFiles.Add(fmResponse);
                }
            }

            var postdataResponse = new PostDataResponse
            {
                Id = postData.Id,
                PostDataFields = postdataFields,
                SenderId = postData.SenderId,
                PostDataKey = postData.PostDataKey,
                SenderEmail = user.Email,
                SenderName = user.Name,
                FolderName = foldername,
                PostDataFiles = postdataFiles,
                ReceiverId = receiverId,
            };

            return Json(postdataResponse);
        }

        [HttpGet, Route("receiveByRequestor/{key}/{receiverId}")]
        public async Task<IActionResult> ReceiveByRequestor(string key, Guid receiverId)
        {
            if (string.IsNullOrEmpty(key))
                return Content("Invalid params");
            try
            {
                var postData = await _postDataRepository.GetPostDataByKey(key);
                var postDataReceiver = await _postDataReceiverRepository.GetPostDataReceiverById(receiverId, postData.Id);
                postDataReceiver.OtpVerified = true;
                await _postDataReceiverRepository.Save();
                return Content("Post data received by requestor.");
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }

        [HttpPost, Route("receivers")]
        public async Task<IActionResult> UpdatePostDataReceivers([FromBody] FileReceivers fileReceivers)
        {
            if (fileReceivers.postDataId == null || fileReceivers.receiverEmails.Count() == 0)
                return Content("Invalid params");

            var postData = await _postDataRepository.GetPostDataById((Guid)fileReceivers.postDataId);

            if (postData == null)
                return Content("PostData id does not exixts");

            foreach (var receiverEmail in fileReceivers.receiverEmails)
            {
                var postDataReceiver = new PostDataReceivers
                {
                    PostDataId = fileReceivers.postDataId,
                    ReceiverEmail = receiverEmail,
                    ReceiverId = Guid.NewGuid()
                };

                _postDataReceiverRepository.InsertPostDataReceiver(postDataReceiver);
                await _postDataReceiverRepository.Save();
            }

            return Ok("File Receivers are saved succesfully");
        }

        [HttpPost, Route("link/{id}/{mode}")]
        public async Task<IActionResult> GenerateLink(Guid id, short? mode)
        {
            if (id == null)
                return Content("Invalid params");

            var postdata = await _postDataRepository.GetPostDataById(id);

            if (postdata == null)
                return Content("Id does not exixts");

            var key = id.ToString().GetHashCode().ToString("x");

            postdata.PostDataKey = key;
            postdata.Mode = mode;

            _postDataRepository.UpdatePostData(postdata);
            await _postDataRepository.Save();

            var baseurl = _configuration.LinkConfig.BaseUrl;

            return Json(new LinkResponse
            {
                postDataid = postdata.Id,
                key = key,
                baseUrl = baseurl
            });
        }

        [HttpGet, Route("receivers/{key}")]
        public async Task<IActionResult> GenerateOtp(string key)
        {
            try
            {
                if (string.IsNullOrEmpty(key))
                    return Content("Invalid params");

                var postData = await _postDataRepository.GetPostDataByKey(key);
                var user = await _userRepository.GetUserById((Guid)postData.SenderId);
                var company = await _companyRepository.GetCompanyById((Guid)user.CompanyId);

                if (postData == null)
                    return Content("Data does not exixts with the key");
                var receiversList = new List<ReceiverModel>();
                var receivers = await _postDataReceiverRepository.GetReceivers(postData.Id);
                foreach (var receiver in receivers)
                {
                    receiver.Otp = Guid.NewGuid().GetHashCode().ToString("x");
                    _postDataReceiverRepository.UpdatePostDataReceiver(receiver);
                    await _postDataReceiverRepository.Save();

                    var receiverModel = new ReceiverModel
                    {
                        ReceiverId = receiver.ReceiverId,
                        ReceiverEmail = receiver.ReceiverEmail,
                        Otp = receiver.Otp,
                        PostDataId = receiver.PostDataId,
                        IsFilled = receiver.Submitted.HasValue ? receiver.Submitted.Value : false
                    };

                    receiversList.Add(receiverModel);
                }

                return Json(new
                {
                    receivers = receiversList,
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
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        [HttpGet, Route("fields/{otp}")]
        //[ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> GetFields(string otp)
        {
            if (string.IsNullOrEmpty(otp))
                return Content("Invalid params");

            var postDataReceiver = await _postDataReceiverRepository.GetPostDataReceiver(otp);

            if (postDataReceiver == null)
                return Content("Data does not exixts with the given otp");

            var postdata = await _postDataRepository.GetPostDataById((Guid)postDataReceiver.PostDataId);
            var postDataeFields = await _postDataFieldRepository.GetPostDataFields(postdata.Id);
            postDataeFields = postDataeFields.OrderBy(pd => pd.SendDate);

            var sender = await _userRepository.GetUserById((Guid)postdata.SenderId);

            var fields = new List<PostDataFieldModel>();
            foreach (var postdataField in postDataeFields)
            {
                fields.Add(new PostDataFieldModel
                {
                    Id = postdataField.Id,
                    FieldName = postdataField.FieldName,
                    FieldType = postdataField.FieldType,
                    PostDataId = postdataField.PostDataId,
                    FieldValue = postdataField.FieldValue
                });
            }

            var postDataFieldsResponse = new PostDataFieldsResponse
            {
                postdataId = postdata.Id,
                fields = fields,
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
                    Id = (Guid)postDataReceiver.ReceiverId,
                    ReceiverEmail = postDataReceiver.ReceiverEmail,
                    Otp = postDataReceiver.Otp
                }
            };

            return Json(postDataFieldsResponse);
        }


        [HttpPost(), Route("senderemail/{key}")]
        public async Task<IActionResult> GetSender(string key)
        {
            if (key != string.Empty && key != null)
            {
                var postData = await _postDataRepository.GetPostDataByKey(key);

                var sender = await _userRepository.GetUserById((Guid)postData.SenderId);
                var company = await _companyRepository.GetCompanyById((Guid)sender.CompanyId);

                if (sender == null)
                    return Content("Invalid sender");

                return Json(new
                {
                    sender = new UserModel
                    {
                        Id = sender.Id,
                        Name = sender.Name,
                        Email = sender.Email
                    },
                    company = new CompanyModel
                    {
                        Id = company.Id,
                        Name = company.Name,
                        LogoUrl = company.LogoUrl,
                        IsOtpRequestdataView = company.IsOtpRequestdataView
                    }
                });
            }
            else
            {
                return Content("Invalid key");
            }
        }


        [HttpPost(), Route("senderotp/{key}")]
        public async Task<IActionResult> SenderOtpMail(string key)
        {
            if (key != string.Empty && key != null)
            {
                var postData = await _postDataRepository.GetPostDataByKey(key);

                var sender = await _userRepository.GetUserById((Guid)postData.SenderId);
                var company = await _companyRepository.GetCompanyById((Guid)sender.CompanyId);

                if (sender == null)
                    return Content("Invalid sender");

                await _emailManager.Send(
                    _configuration.EmailConfig.SenderEmail,
                    sender.Email,
                    Utils.GetLanguageTranslation(_env.WebRootPath, sender.Language, MailTemplate.OTP_SEND_SUBJECT),
                    MailTemplate.OTP_SEND_BODY,
                    sender.Language,
                    new EmailModel
                    {
                        otp = key,
                        url = _configuration.LinkConfig.ContactSupport
                    },
                    HttpContext,
                    null,
                    "OTP sending via mail"
                    );
                _surveillanceRepository.Info(HttpContext, null, ActionType.OTP, $"OTP '{key}' is sent to {sender.Email} successfully.");
                var otpLife = _configuration.OtpLife;
                return Json(new
                {
                    sender = new UserModel
                    {
                        Id = sender.Id,
                        Name = sender.Name,
                        Email = sender.Email
                    },
                    OtpExpDate = DateTime.UtcNow.AddMinutes(otpLife ?? 10)
                });
            }
            else
            {
                return Content("Invalid key");
            }
        }

        [HttpPost(), Route("sendotp/{receiverId}")]
        public async Task<IActionResult> SendOtpMail(Guid receiverId)
        {
            if (receiverId != Guid.Empty && receiverId != null)
            {
                var receiver = await _postDataReceiverRepository.GetReceiverById(receiverId);
                if (receiver == null)
                    return Content("Invalid receiver");
                var receiverUser = await _userRepository.GetUserByEmail(receiver.ReceiverEmail);
                var language = "en-US";
                if (receiverUser != null && !string.IsNullOrWhiteSpace(receiverUser.Language))
                {
                    language = receiverUser.Language;
                }
                else
                {
                    var postData = await _postDataRepository.GetPostDataById(receiver.PostDataId.Value);
                    var senderUser = await _userRepository.GetUserById(postData.SenderId.Value);
                    if (senderUser != null && !string.IsNullOrWhiteSpace(senderUser.Language))
                        language = senderUser.Language;
                }
                await _emailManager.Send(
                    _configuration.EmailConfig.SenderEmail,
                    receiver.ReceiverEmail,
                    Utils.GetLanguageTranslation(_env.WebRootPath, language, MailTemplate.OTP_SEND_SUBJECT),
                    MailTemplate.OTP_SEND_BODY,
                    language,
                    new EmailModel
                    {
                        otp = receiver.Otp,
                        url = _configuration.LinkConfig.ContactSupport
                    },
                    HttpContext,
                    null,
                    "OTP sending via mail"
                    );
                _surveillanceRepository.Info(HttpContext, null, ActionType.OTP, $"OTP '{receiver.Otp}' is sent to { receiver.ReceiverEmail} successfully.");
                var otpLife = _configuration.OtpLife;
                return Json(new { receiver = receiver, OtpExpDate = DateTime.UtcNow.AddMinutes(otpLife ?? 10) });
            }
            else
            {
                return Content("Invalid receiver");
            }
        }

        [HttpPost(), Route("issavedata/{postdataid}/{receiverid}")]
        public async Task<IActionResult> IsSaveData(Guid postdataid, Guid receiverid)
        {
            if (postdataid == null || postdataid == Guid.Empty)
                return Content("Invalid param");
            if (receiverid == null || receiverid == Guid.Empty)
                return Content("Invalid param");

            var pDataReceiver = await _postDataReceiverRepository.GetPostDataReceiverById(receiverid, postdataid);
            var result = pDataReceiver == null || pDataReceiver.IsSavedDataGenerated == null || pDataReceiver.IsSavedDataGenerated == false ? false : true;
            return Json(new { data = result });
        }


        [HttpPost(), Route("savedata/{folderid}/{ispersonal}")]
        public async Task<IActionResult> SaveData([FromBody] PostDataResponse postData, Guid folderid,
            bool ispersonal = false)
        {
            if (postData.Id == null || postData.Id == Guid.Empty || !postData.PostDataFields.Any())
                return Content("Invalid request data");

            if (ispersonal == false && (folderid == null || folderid == Guid.Empty))
                return Content("folderid can't be empty");

            if (postData.PostDataFields.Count() <= 0)
                return Content("No fields found.");

            if (postData.SenderId == null || postData.SenderId == Guid.Empty)
                return Content("Invalid sender id");
            if (postData.FolderName == string.Empty && folderid == Guid.Empty)
            {
                ispersonal = true;
                var requestsender = await _postDataReceiverRepository.GetReceiverById((Guid)postData.ReceiverId);
                var timeStamp = DateTime.UtcNow.Day.ToString() + DateTime.UtcNow.Month.ToString() + DateTime.UtcNow.Year.ToString().Substring(2, 2) + "_" + DateTime.UtcNow.TimeOfDay.Hours.ToString() + DateTime.UtcNow.TimeOfDay.Minutes.ToString();
                postData.FolderName = requestsender.ReceiverEmail + "_" + timeStamp;
            }

            var pFields = postData.PostDataFields;
            var folderName = string.Empty;
            var fileName = string.Empty;
            var user = await _userRepository.GetUserById((Guid)postData.SenderId);
            var company = await _companyRepository.GetCompanyById((Guid)user.CompanyId);
            AdminFolder adminfolder = null;
            user.Company = company;

            if (ispersonal == false)
            {
                adminfolder = await _adminFolderRepository.GetAdminFolderById(folderid);
                if (adminfolder == null)
                    return Content("Invalid folder id");
                var requestsender = await _postDataReceiverRepository.GetReceiverById((Guid)postData.ReceiverId);
                folderName = adminfolder.FolderName;
                var timeStamp = DateTime.UtcNow.Day.ToString() + DateTime.UtcNow.Month.ToString() + DateTime.UtcNow.Year.ToString().Substring(2, 2) + "_" + DateTime.UtcNow.TimeOfDay.Hours.ToString() + DateTime.UtcNow.TimeOfDay.Minutes.ToString();
                fileName = requestsender.ReceiverEmail + "_" + timeStamp + ".txt";
            }
            else
            {
                folderName = postData.FolderName;
                var timeStamp = DateTime.UtcNow.Day.ToString() + DateTime.UtcNow.Month.ToString() + DateTime.UtcNow.Year.ToString().Substring(2, 2) + "_" + DateTime.UtcNow.TimeOfDay.Hours.ToString() + DateTime.UtcNow.TimeOfDay.Minutes.ToString();
                fileName = postData.FolderName + ".txt";
            }

            var directorypath = Path.Combine(
                Directory.GetCurrentDirectory(), "wwwroot", HostingDirectory.SharedFiles,
                postData.Id.ToString(), folderName);

            var physicalfilePath = Path.Combine(directorypath, fileName);
            var text = string.Empty;

            foreach (var pfield in pFields)
            {
                if (pfield.FieldType != "uploadfile")
                {
                    text += pfield.FieldName + ":" + pfield.FieldValue + Environment.NewLine;
                }
                else
                {
                    var filenames = string.Empty;
                    if (pfield.FieldValues != null && pfield.FieldValues.Count() > 1)
                    {
                        foreach (var fileValue in pfield.FieldValues)
                        {
                            filenames += string.IsNullOrEmpty(filenames) ? fileValue.Name : ", " + fileValue.Name;
                        }
                        text += pfield.FieldName + ":" + filenames + Environment.NewLine;
                    }
                    else if (pfield.FieldValues != null && pfield.FieldValues.Count() == 1)
                    {
                        text += pfield.FieldName + ":" + pfield.FieldValues[0].Name + Environment.NewLine;
                    }
                    else
                    {
                        continue;
                    }
                }
            }
            try
            {
                if (!Directory.Exists(directorypath))
                {
                    Directory.CreateDirectory(directorypath);
                }
                // Write the text asynchronously to a new file named "WriteTextAsync.txt".
                using (StreamWriter outputFile = new StreamWriter(physicalfilePath))
                {
                    await outputFile.WriteAsync(text);

                    // set IsSavedDataGenerated to postDataReceiver table
                    var pDataReceiver = await _postDataReceiverRepository.GetReceiverById((Guid)postData.ReceiverId);
                    pDataReceiver.IsSavedDataGenerated = true;
                    _postDataReceiverRepository.UpdatePostDataReceiver(pDataReceiver);
                    await _postDataReceiverRepository.Save();
                }
                //open file from the disk (file path is the path to the file to be opened)
                using (var fileStream = System.IO.File.OpenRead(physicalfilePath))
                {
                    //create new MemoryStream object
                    var ms = new MemoryStream();
                    ms.SetLength(fileStream.Length);
                    //read file to MemoryStream
                    fileStream.Read(ms.GetBuffer(), 0, (int)fileStream.Length);

                    var container = await GetBlobContainer(user);
                    var blobfilePath = string.Concat(user.Name.ToLower(), "/", folderName, "/", fileName);
                    var blockBlob = container.GetBlockBlobReference(blobfilePath);
                    var byteArray = ms.ToArray();

                    await blockBlob.UploadFromByteArrayAsync(byteArray, 0, byteArray.Length);

                    int? fileLifeSetting;
                    var sConfig = await _storageConfigRepository.GetStorageConfigByCompId(company.Id);

                    if (sConfig != null && sConfig.FileAvailability != null)
                    {
                        fileLifeSetting = sConfig.FileAvailability;
                    }
                    else
                    {
                        fileLifeSetting = _configuration.RequestedFileLife;
                    }

                    var fileMetaData = new FileMetaData
                    {
                        FileId = Guid.NewGuid(),
                        Type = "text/plain",
                        Size = fileStream.Length,
                        Name = fileName,
                        FileUrl = blockBlob.Uri.ToString(),
                        ExpDate = DateTime.UtcNow.AddDays(fileLifeSetting ?? 3),
                        FileFolder = folderName
                    };
                    fileMetaData.CreatedDate = DateTime.UtcNow;
                    _fileRepository.InsertFile(fileMetaData);
                    await _fileRepository.Save();

                    if (ispersonal == true)
                    {
                        _postDataFileRepository.InsertPostDataFile(new PostDataFiles
                        {
                            FileId = fileMetaData.FileId,
                            PostDataId = postData.Id,
                            ReceiverId = postData.ReceiverId
                        });
                        await _postDataFileRepository.Save();
                    }

                    if (ispersonal == false)
                    {
                        //Save text file
                        _sharedFolderFileRepository.InsertSharedFolderFile(new SharedFolderFile
                        {
                            FolderId = adminfolder.Id,
                            FileId = fileMetaData.FileId
                        });
                        await _sharedFolderFileRepository.Save();

                        //Copy paste blob folder
                        var sourceFolderPath = string.Concat(user.Name.ToLower(), "/", postData.FolderName);
                        var destinationFolderPath = string.Concat(user.Name.ToLower(), "/", folderName);

                        var sourceBlockBlob = container.GetDirectoryReference(sourceFolderPath);
                        var sourceBlobItems = await sourceBlockBlob.ListBlobsSegmentedAsync(false, BlobListingDetails.Metadata, 100, null, null, null);
                        var blobitems = sourceBlobItems.Results.ToList();

                        foreach (var srcFile in blobitems)
                        {
                            var filename = srcFile.Uri.ToString().Substring(srcFile.Uri.ToString().LastIndexOf("/") + 1);
                            var destLocation = destinationFolderPath + "/" + filename;
                            var destFile = container.GetBlockBlobReference(destLocation);
                            await destFile.StartCopyAsync(srcFile.Uri);
                        }

                        foreach (var pFile in postData.PostDataFiles)
                        {
                            _sharedFolderFileRepository.InsertSharedFolderFile(new SharedFolderFile
                            {
                                FolderId = adminfolder.Id,
                                FileId = pFile.FileId
                            });

                            await _sharedFolderFileRepository.Save();

                            var fMetadata = await _fileRepository.GetFileById(pFile.FileId);
                            var fileurl = fMetadata.FileUrl.Replace(postData.FolderName, folderName);
                            fMetadata.FileUrl = fileurl;

                            _fileRepository.UpdateFile(fileMetaData);
                            await _fileRepository.Save();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return Json(new { isSucess = false, error = "Opration failed" });
            }

            return Json(new { isSucess = true, postaData = postData });
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("postdatafield/{id}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> DeletePostDataField(Guid id)
        {
            if (id == Guid.Empty || id == null)
                return Content("Invalid Id");

            _postDataFieldRepository.DeletePostDataField(id);
            await _postDataFieldRepository.Save();

            return Ok("Deleted succesfully");
        }

        // DELETE: api/postdata/file/5
        [HttpDelete("file/{id}")]
        public async Task<string> DeleteFile(Guid id)
        {
            try
            {
                var fileInfo = await _fileRepository.GetFileById(id);

                var storageConnectionString = _configuration.StorageConnectionString;
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();

                CloudBlockBlob blockBlob = new CloudBlockBlob(new Uri(fileInfo.FileUrl), blobClient);

                var isDeleted = await blockBlob.DeleteIfExistsAsync();

                if (isDeleted)
                {
                    fileInfo.IsDeleted = true;
                    fileInfo.DeletedDate = DateTime.UtcNow;
                    _fileRepository.UpdateFile(fileInfo);
                    await _fileRepository.Save();

                    //delete postdata file
                    _postDataFileRepository.DeletePostDataFile(id);
                    await _postDataFileRepository.Save();
                }
                return fileInfo.Name;
            }
            catch (Exception ex)
            {
                return null;
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
                var storageConnectionString = _configuration.StorageConnectionString;
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();

                Uri blobUri = new Uri(file.FileUrl);
                CloudBlockBlob blob = new CloudBlockBlob(blobUri, blobClient);//added storageCredentials

                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", HostingDirectory.Files, fileid.ToString());

                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                var filePath = path + "/" + file.Name;

                await blob.DownloadToFileAsync(filePath, FileMode.Create);

                if (System.IO.File.Exists(filePath))
                    System.IO.File.Delete(filePath);

                return Ok(fileid + "/" + Uri.EscapeDataString(file.Name));
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
                var storageConnectionString = _configuration.StorageConnectionString;
                var storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                var blobClient = storageAccount.CreateCloudBlobClient();

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
        [HttpDelete, Route("deletetemp")]
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

        private async Task<FileMetaData> UploadToBlobStorage(IFormFile file, User user, PostDataReceivers receiver, Guid pDataId)
        {
            try
            {
                string newfileName = file.FileName;
                var container = await GetBlobContainer(user);
                var filePath = string.Empty;
                var pDataFiles = await _postDataFileRepository.GetPostDataFiles(pDataId, (Guid)receiver.ReceiverId);
                var folderName = string.Empty;
                if (pDataFiles.Count() > 0)
                {
                    var pDataFile = pDataFiles.Last();
                    var pfileMetaData = await _fileRepository.GetFileById((Guid)pDataFile.FileId);
                    folderName = pfileMetaData.FileFolder;
                    filePath = string.Concat(user.Name.ToLower(), "/", folderName, "/", newfileName);
                }
                else
                {
                    var timeStamp = DateTime.UtcNow.Day.ToString() + DateTime.UtcNow.Month.ToString() + DateTime.UtcNow.Year.ToString().Substring(2, 2) + "_" + DateTime.UtcNow.TimeOfDay.Hours.ToString() + DateTime.UtcNow.TimeOfDay.Minutes.ToString();
                    folderName = receiver.ReceiverEmail + "_" + timeStamp;
                    filePath = string.Concat(user.Name.ToLower(), "/", folderName, "/", newfileName);
                }

                CloudBlockBlob blockBlob = container.GetBlockBlobReference(filePath);

                int i = 0;
                while (await blockBlob.ExistsAsync())
                {
                    newfileName = string.Format("{0}-{1}{2}", Path.GetFileNameWithoutExtension(file.FileName), i.ToString("0000"), Path.GetExtension(file.FileName));
                    filePath = string.Concat(user.Name.ToLower(), "/", folderName, "/", newfileName);
                    blockBlob = container.GetBlockBlobReference(filePath);
                    i++;
                }

                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var byteArray = ms.ToArray();
                    await blockBlob.UploadFromByteArrayAsync(byteArray, 0, byteArray.Length);
                }

                int? fileLifeSetting;
                var company = await _companyRepository.GetCompanyById((Guid)user.CompanyId);
                var sConfig = await _storageConfigRepository.GetStorageConfigByCompId(company.Id);
                if (sConfig != null && sConfig.FileAvailability != null)
                {
                    fileLifeSetting = sConfig.FileAvailability;
                }
                else
                {
                    fileLifeSetting = _configuration.RequestedFileLife;
                }

                var fileMetaData = new FileMetaData
                {
                    FileId = Guid.NewGuid(),
                    Name = newfileName,
                    Type = file.ContentType,
                    Size = file.Length,
                    FileUrl = blockBlob.Uri.ToString(),
                    //ExpDate = DateTime.UtcNow.AddDays(fileLifeSetting ?? 3),
                    FileFolder = folderName
                };
                return fileMetaData;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return null;
            }
        }

        private async Task<CloudBlobContainer> GetBlobContainer(User user)
        {
            try
            {
                var storageConnectionString = _configuration.StorageConnectionString; //"DefaultEndpointsProtocol=https;AccountName=sharesimplefilestorage;AccountKey=+nGSOw8K+8TsT1fjIOppdjJiNWXNCZeAJO0Fnqc1jpFrXt8E9NkH5O3U8v9ZrvEgW0sxibQvOCsq7PRIABEIIg==;EndpointSuffix=core.windows.net";
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
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
                return null;
            }
        }
    }
}
