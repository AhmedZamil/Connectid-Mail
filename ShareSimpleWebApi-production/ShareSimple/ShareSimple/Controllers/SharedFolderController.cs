using Microsoft.AspNetCore.Mvc;
using ShareSimple.Common;
using ShareSimple.Common.WebCRM;
using ShareSimple.Filters;
using ShareSimple.Interface;
using ShareSimple.Models;
using ShareSimple.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminFolderModel = ShareSimple.ViewModels.AdminFolderModel;

namespace ShareSimple.Controllers
{
    [Produces("application/json")]
    [Route("api/sharedfolder")]
    //[ServiceFilter(typeof(AuthAttribute))]
    public class SharedFolderController : Controller
    {
        private readonly EmailManager _emailManager;
        private readonly IWebCrmService _webCrmService;
        private readonly ShareSimpleConfiguration _configuration;
        private readonly IFileRepository _fileRepository;
        private readonly IPackageRepository _packageRepository;
        private readonly IAdminFolderRepository _adminFolderRepository;
        private readonly IShareDataFilesRepository _shareDataFilesRepository;
        private readonly ISharedFolderRepository _sharedFolderRepository;
        private readonly ISharedFolderFileRepository _sharedFolderFileRepository;
        private readonly IUserRepository _userRepository;
        private readonly ICompanyRepository _companyRepository;
        private readonly ICompanyHistoryRepository _companyHistoryRepository;
        private readonly IShareDataRepository _shareDataRepository;
        private readonly IPostDataRepository _postDataRepository;
        private readonly IPostDataFilesRepository _postDataFileRepository;
        private readonly IPostDataReceiverRepository _postDataReceiverRepository;
        private readonly IShareDataFilesRepository _shareDataFileRepository;
        private readonly IShareFileReceiverRepository _shareFileReceiverRepository;
        private readonly IRequestDownloadRepository _requestDownloadRepository;
        private readonly IRequestDownLoadFilesRepository _requestDownLoadFilesRepository;
        private readonly IUserHistoryRepository _userHistoryRepository;

        public SharedFolderController(
            EmailManager emailManager,
            IWebCrmService webCrmService,
            ShareSimpleConfiguration configuration,
            IFileRepository fileRepository,
            IUserRepository userRepository,
            IUserHistoryRepository userHistoryRepository,
            ICompanyRepository companyRepository,
            ICompanyHistoryRepository companyHistoryRepository,
            IShareDataRepository shareDataRepository,
            IPostDataRepository postDataRepository,
            IPostDataFilesRepository postDataFilesRepository,
            IPostDataReceiverRepository postDataReceiverRepository,
            IShareDataFilesRepository shareDataFileRepository,
            IShareFileReceiverRepository shareFileReceiverRepository,
            IRequestDownloadRepository requestDownloadRepository,
            IRequestDownLoadFilesRepository requestDownLoadFilesRepository,
            IPackageRepository packageRepository,
            IAdminFolderRepository adminFolderRepository,
            IShareDataFilesRepository shareDataFilesRepository,
            ISharedFolderFileRepository sharedFolderFileRepository,
            ISharedFolderRepository sharedFolderRepository)
        {
            _emailManager = emailManager;
            _webCrmService = webCrmService;
            _configuration = configuration;
            _fileRepository = fileRepository;
            _userRepository = userRepository;
            _userHistoryRepository = userHistoryRepository;
            _companyRepository = companyRepository;
            _companyHistoryRepository = companyHistoryRepository;
            _postDataRepository = postDataRepository;
            _shareDataRepository = shareDataRepository;
            _shareDataFileRepository = shareDataFileRepository;
            _postDataReceiverRepository = postDataReceiverRepository;
            _shareFileReceiverRepository = shareFileReceiverRepository;
            _requestDownloadRepository = requestDownloadRepository;
            _requestDownLoadFilesRepository = requestDownLoadFilesRepository;
            _postDataFileRepository = postDataFilesRepository;
            _packageRepository = packageRepository;
            _adminFolderRepository = adminFolderRepository;
            _shareDataFilesRepository = shareDataFilesRepository;
            _sharedFolderFileRepository = sharedFolderFileRepository;
            _sharedFolderRepository = sharedFolderRepository;
        }

        [ServiceFilter(typeof(AuthAttribute))]
        [HttpGet, Route("folders/{companyid}")]
        public async Task<IActionResult> GetFolders(Guid companyid)
        {
            if (companyid == null || companyid == Guid.Empty)
                return Content("Invalid param");

            var users = await _userRepository.GetUsersByCompanyId(companyid);
            var postDatas = await _postDataRepository.GetAllPostData();
            var adminFolders = await _adminFolderRepository.GetAdminFolders(companyid);

            var rSharedFolderFiles = new List<SharedFolderFile>();
            var tlSharedFolderFiles = new List<SharedFolderFile>();
            var rPostDatas = new List<PostData>();
            var rDataFiles = new List<PostDataFiles>();

            foreach (var aUser in users)
            {
                var pDatas = postDatas.Where(pd => pd.SenderId == aUser.Id);
                rPostDatas.AddRange(pDatas);
            }

            foreach (var pData in rPostDatas)
            {
                var pDataFiles = await _postDataFileRepository.GetPostDataFiles(pData.Id);
                foreach (var pdfile in pDataFiles)
                {
                    var fileMetaData = await _fileRepository.GetFileById((Guid)pdfile.FileId);
                    //if (fileMetaData.ExpDate > DateTime.UtcNow)
                    var postDataReceiver = await _postDataReceiverRepository.GetPostDataReceiverById(pdfile.ReceiverId.Value, pdfile.PostDataId.Value);

                    if (postDataReceiver.IsSavedDataGenerated == true && fileMetaData.IsDeleted != true)
                        rDataFiles.Add(pdfile);
                }
            }

            foreach (var adminFolder in adminFolders)
            {
                var sharedFolderFiles =
                    await _sharedFolderFileRepository.GetSharedFolderFilesByFolderId(adminFolder.Id);
                if (adminFolder.IsTrustedLink == true)
                {
                    tlSharedFolderFiles.AddRange(sharedFolderFiles);
                }
                else
                {
                    rSharedFolderFiles.AddRange(sharedFolderFiles);
                }
            }

            return Json(
                new
                {
                    userfolders =
                        new
                        {
                            noOfFiles = rDataFiles.Count(),
                            modifiedDate = !rPostDatas.Any() ? null : rPostDatas.Last().SendDate,
                            companyid = companyid
                        },
                    sharedFolders = new
                    {
                        noOfFiles = rSharedFolderFiles.Count(),
                        modifiedDate = !adminFolders.Any(x => (x.IsTrustedLink.HasValue == false || x.IsTrustedLink == false)) ? null : adminFolders.OrderBy(x => x.CreateDate).Last(x => (x.IsTrustedLink.HasValue == false || x.IsTrustedLink == false)).CreateDate,
                        companyid = companyid
                    },
                    trustedLinks = new
                    {
                        noOfFiles = tlSharedFolderFiles.Count(),
                        modifiedDate = !adminFolders.Any(x => x.IsTrustedLink == true) ? null : adminFolders.OrderBy(x => x.CreateDate).Last(x => x.IsTrustedLink == true).CreateDate,
                        companyid = companyid
                    }
                });
        }

        [HttpGet, Route("userfolderhome/{userid}")]
        public async Task<IActionResult> GetUserFoldersHome(Guid userid)
        {
            if (userid == null || userid == Guid.Empty)
                return Content("Invalid param");

            var user = await _userRepository.GetUserById(userid);
            var company = await _companyRepository.GetCompanyById((Guid)user.CompanyId);
            var postDatas = await _postDataRepository.GetAllPostData();
            var sharedFolders = await _sharedFolderRepository.GetSharedFolderByUserId(userid);

            var rSharedFolderFiles = new List<SharedFolderFile>();
            var trustedLinkFiles = new List<SharedFolderFile>();
            var rPostDatas = new List<PostData>();
            var rDataFiles = new List<PostDataFiles>();

            var pDatas = postDatas.Where(pd => pd.SenderId == user.Id);
            rPostDatas.AddRange(pDatas);

            foreach (var pData in rPostDatas)
            {
                var postDataReceivers = (await _postDataReceiverRepository.GetReceivers(pData.Id)).Where(x => x.Submitted == true && x.IsSavedDataGenerated == true);

                foreach (var postDataReceiver in postDataReceivers)
                {
                    var files = await _postDataFileRepository.GetPostDataFiles(postDataReceiver.PostDataId.Value, postDataReceiver.ReceiverId.Value);

                    foreach (var file in files)
                    {
                        var fileMetaData = await _fileRepository.GetFileById((Guid)file.FileId);
                        if (fileMetaData.IsDeleted != true)
                        {
                            rDataFiles.Add(file);
                        }
                    }
                }
            }

            DateTime? sharedFolderModifiedDate = null;
            DateTime? trustedLinksModifiedDate = null;

            foreach (var sharedFolder in sharedFolders)
            {

                var sharedFiles =
                    await _sharedFolderFileRepository.GetSharedFolderFilesByFolderId((Guid)sharedFolder.FolderId);
                var adminFolder = await _adminFolderRepository.GetAdminFolderById(sharedFolder.FolderId.Value);
                if (adminFolder.IsTrustedLink.HasValue && adminFolder.IsTrustedLink == true)
                {
                    trustedLinkFiles.AddRange(sharedFiles);
                    if (trustedLinksModifiedDate.HasValue == false || trustedLinksModifiedDate.Value < sharedFolder.SharedDate)
                    {
                        trustedLinksModifiedDate = sharedFolder.SharedDate;
                    }
                }
                else
                {
                    rSharedFolderFiles.AddRange(sharedFiles);
                    if (sharedFolderModifiedDate.HasValue == false || sharedFolderModifiedDate.Value < sharedFolder.SharedDate)
                    {
                        sharedFolderModifiedDate = sharedFolder.SharedDate;
                    }
                }
            }

            return Json(
                new
                {
                    userfolders = new
                    {
                        noOfFiles = rDataFiles.Count(),
                        modifiedDate = !rPostDatas.Any() ? null : rPostDatas.Last().SendDate,
                        companyid = company.Id
                    },
                    sharedFolders = new
                    {
                        noOfFiles = rSharedFolderFiles.Count(),
                        modifiedDate = sharedFolderModifiedDate,
                        companyid = company.Id
                    },
                    trustedLinks = new
                    {
                        noOfFiles = trustedLinkFiles.Count(),
                        modifiedDate = trustedLinksModifiedDate,
                        companyid = company.Id
                    }
                });
        }

        [HttpGet, Route("companyfolders/{companyid}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> GetCompanyFolders(Guid companyid)
        {
            if (companyid == null || companyid == Guid.Empty)
                return Content("Invalid param");

            var adminFolders = await _adminFolderRepository.GetAdminFolders(companyid);
            var sharedFolderResponses = new List<SharedFolderResponse>();

            foreach (var adminFolder in adminFolders)
            {
                var sharedFolderFiles =
                    await _sharedFolderFileRepository.GetSharedFolderFilesByFolderId(adminFolder.Id);
                var sharedFolders = await _sharedFolderRepository.GetSharedFoldersByFolderId(adminFolder.Id);


                sharedFolderResponses.Add(new SharedFolderResponse
                {
                    AdminFolder = new AdminFolderModel
                    {
                        Id = adminFolder.Id,
                        FolderName = adminFolder.FolderName,
                        CreateDate = adminFolder.CreateDate,
                        CompanyId = adminFolder.CompanyId,
                        UpdateDate = adminFolder.UpdateDate,
                        IsDeleted = adminFolder.IsDeleted,
                        IsTrustedLink = adminFolder.IsTrustedLink
                    },
                    NoOfFiles = sharedFolderFiles.Count(),
                    SharedWith = sharedFolders.Count()
                });
            }

            return Json(sharedFolderResponses);
        }

        [HttpGet, Route("userfolders/{userid}")]
        public async Task<IActionResult> GetUserSharedFolders(Guid userid)
        {
            if (userid == null || userid == Guid.Empty)
                return Content("Invalid param");

            var sfolders = await _sharedFolderRepository.GetSharedFolderByUserId(userid);
            var adminFolders = new List<AdminFolder>();

            foreach (var sfolder in sfolders)
            {
                var afolder = await _adminFolderRepository.GetAdminFolderById((Guid)sfolder.FolderId);
                adminFolders.Add(afolder);
            }

            var sharedFolderResponses = new List<SharedFolderResponse>();

            foreach (var adminFolder in adminFolders)
            {
                var sharedFolderFiles =
                    await _sharedFolderFileRepository.GetSharedFolderFilesByFolderId(adminFolder.Id);
                var sharedFolders = await _sharedFolderRepository.GetSharedFoldersByFolderId(adminFolder.Id);


                sharedFolderResponses.Add(new SharedFolderResponse
                {
                    AdminFolder = new AdminFolderModel
                    {
                        Id = adminFolder.Id,
                        FolderName = adminFolder.FolderName,
                        CreateDate = adminFolder.CreateDate,
                        CompanyId = adminFolder.CompanyId,
                        UpdateDate = adminFolder.UpdateDate,
                        IsDeleted = adminFolder.IsDeleted,
                        IsTrustedLink = adminFolder.IsTrustedLink
                    },
                    NoOfFiles = sharedFolderFiles.Count(),
                    SharedWith = sharedFolders.Count(),
                    //Files = fileMetaDatas
                });
            }

            return Json(sharedFolderResponses);
        }

        [HttpGet, Route("files/{folderid}/{userid}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> GetCompanyFolderFiles(Guid folderid, Guid userid)
        {
            if (folderid == null || folderid == Guid.Empty || userid == null || userid == Guid.Empty)
                return Content("Invalid param");
            var sfolders = await _sharedFolderRepository.GetSharedFolderByUserId(userid);
            var folder = sfolders.Where(f => f.FolderId == folderid);
            var fileMetaDatas = new List<FileMetaDataResponse>();
            if (folder.Count() > 0)
            {
                var sharedFolderFiles =
                await _sharedFolderFileRepository.GetSharedFolderFilesByFolderId(folderid);



                foreach (var sharedFolderFile in sharedFolderFiles)
                {
                    var file = await _fileRepository.GetFileById((Guid)sharedFolderFile.FileId);
                    fileMetaDatas.Add(new FileMetaDataResponse
                    {
                        FileId = file.FileId,
                        Name = file.Name,
                        ExpDate = file.ExpDate,
                        FileFolder = file.FileFolder,
                        FileUrl = file.FileUrl,
                        Size = file.Size,
                        Type = file.Type
                    });
                }
            }

            return Json(fileMetaDatas);
        }

        [HttpGet, Route("users/{folderid}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> GetUsersByFolderId(Guid folderid)
        {
            if (folderid == null || folderid == Guid.Empty)
                return Content("Invalid param");
            
            var folder = await _adminFolderRepository.GetAdminFolderById(folderid);
            if (folder == null)
                return Content("Invalid param");
            var sharedFolders = await _sharedFolderRepository.GetSharedFoldersByFolderId(folderid);

            var loggedInUserId = new Guid(HttpContext.Request.Headers["userid"][0]);
            var loggedInUser = await _userRepository.GetUserById(loggedInUserId);

            var userModels = new List<UserModel>();

            foreach (var sharedFolder in sharedFolders)
            {
                var user = await _userRepository.GetUserById((Guid)sharedFolder.UserId);
                userModels.Add(new UserModel
                {
                    Id = user.Id,
                    Name = user.Name,
                    Email = user.Email
                });
            }

            if (loggedInUser.IsSuperAdmin == true || (loggedInUser.Type == true && loggedInUser.CompanyId == folder.CompanyId) || userModels.Exists(u => u.Id == loggedInUserId))
            {
                return Json(new
                {
                    users = userModels,
                    folder = new AdminFolderModel
                    {
                        Id = folder.Id,
                        FolderName = folder.FolderName,
                        CompanyId = folder.CompanyId,
                        CreateDate = folder.CreateDate,
                        UpdateDate = folder.UpdateDate,
                        IsDeleted = folder.IsDeleted,
                        IsTrustedLink = folder.IsTrustedLink
                    }
                });
            }
            else
            {
                return Json(new { });
            }

        }

        // POST:
        [HttpPost, Route("adminfolder")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> AddAdminFolder([FromBody] AdminFolder adminFolder)
        {
            if (adminFolder.Id == Guid.Empty || adminFolder.Id == null)
                adminFolder.Id = Guid.NewGuid();
            if (adminFolder.CompanyId == Guid.Empty || adminFolder.CompanyId == null)
                return Content("Invalid company Id");

            adminFolder.CreateDate = DateTime.UtcNow;
            adminFolder.UpdateDate = DateTime.UtcNow;

            _adminFolderRepository.InsertAdminFolder(adminFolder);
            await _adminFolderRepository.Save();

            if (adminFolder.IsTrustedLink.HasValue && adminFolder.IsTrustedLink == true)
            {
                //Send Notification Email to Compliants
                var company = await _companyRepository.GetCompanyById(adminFolder.CompanyId.Value);
                var contactPerson = company.User.FirstOrDefault(x => x.IsContactPerson == true);
                await _emailManager.Send(
                        _configuration.EmailConfig.SenderEmail,
                        _configuration.EmailConfig.ComplianceEmail,
                        MailTemplate.TRUSTED_LINK_CREATION_NOTIFICATION_TO_COMPLIANCE_SUBJECT,
                        MailTemplate.TRUSTED_LINK_CREATION_NOTIFICATION_TO_COMPLIANCE_BODY,
                        "en-US",
                        HttpContext,
                        new Guid(HttpContext.Request.Headers["userid"][0]),
                        "Trusted Link Creation",
                        company.Name,
                        contactPerson.Name,
                        contactPerson.Email,
                        adminFolder.FolderName,
                        adminFolder.CreateDate.Value.ToString(MailTemplate.DATE_FORMAT));

                //Update WebCRM & DB with a check mark option of the client
                if (!(company.EnabledTrustedLink.HasValue && company.EnabledTrustedLink == true))
                {
                    string prevStatus = company.EnabledTrustedLink.HasValue ? "Trusted Link Disabled" : "Trusted Link Not Initialized";
                    string comment = company.EnabledTrustedLink.HasValue ? "Trusted Link Re-Enabled" : "Trusted Link Enabled";

                    company.EnabledTrustedLink = true;
                    company.Updated = DateTime.UtcNow;

                    int? orgId = _webCrmService.UpdateOrganisation(company, HttpContext);
                    if (orgId.HasValue)
                    {
                        company.CrmId = orgId.ToString();
                    }

                    _companyRepository.UpdateCompany(company);
                    _companyHistoryRepository.InsertCompanyHistory(new CompanyHistory { CompanyId = company.Id, PrevStatus = prevStatus, StatusDate = company.Updated, Status = "Trusted Link Enabled", Comment = comment });
                    await _companyRepository.Save();
                }
            }

            var createdFolder = new AdminFolderModel
            {
                Id = adminFolder.Id,
                FolderName = adminFolder.FolderName,
                CompanyId = adminFolder.CompanyId,
                CreateDate = adminFolder.CreateDate,
                UpdateDate = adminFolder.UpdateDate,
                IsDeleted = adminFolder.IsDeleted,
                IsTrustedLink = adminFolder.IsTrustedLink
            };

            return Json(createdFolder);
        }

        // POST:
        [HttpPost, Route("assignusersfolder")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> AddSharedFolderUsers([FromBody] AssignUserfolderModel assignusersfolder)
        {
            if (assignusersfolder.UserIds.Count() <= 0)
                return Content("Invalid params");

            if (assignusersfolder.FolderId == Guid.Empty || assignusersfolder.FolderId == null)
                return Content("Invalid params");

            var adminFolder = await _adminFolderRepository.GetAdminFolderById(assignusersfolder.FolderId.Value);

            foreach (var user in assignusersfolder.UserIds)
            {
                var sharedFolder = new SharedFolder
                {
                    UserId = user.Id,
                    FolderId = assignusersfolder.FolderId,
                    SharedDate = DateTime.UtcNow
                };

                _sharedFolderRepository.InsertSharedFolder(sharedFolder);
                await _sharedFolderRepository.Save();

                if (adminFolder.IsTrustedLink == true)
                {
                    var assignedUser = await _userRepository.GetUserById(user.Id);
                    string trustedLink = $"{_configuration.LinkConfig.BaseUrl}admin/{adminFolder.CompanyId}/sharedfolderfile/{adminFolder.Id}";

                    await _emailManager.Send(
                        _configuration.EmailConfig.SenderEmail,
                        assignedUser.Email,
                        MailTemplate.TRUSTED_LINK_SHARED_NOTIFICATION_SUBJECT,
                        MailTemplate.TRUSTED_LINK_SHARED_NOTIFICATION_BODY,
                        assignedUser.Language,
                        HttpContext,
                        new Guid(HttpContext.Request.Headers["userid"][0]),
                        "Trusted Link Shared Notification",
                        trustedLink);
                }
            }

            return Json(assignusersfolder);
        }

        // POST:
        [HttpPost, Route("assignsharedfolder")]
        public async Task<IActionResult> AddSharedFolder([FromBody] SharedFolder sharedFolder)
        {
            if (sharedFolder.UserId == Guid.Empty || sharedFolder.UserId == null)
                return Content("Invalid params");

            if (sharedFolder.FolderId == Guid.Empty || sharedFolder.FolderId == null)
                return Content("Invalid params");

            sharedFolder.SharedDate = DateTime.UtcNow;

            _sharedFolderRepository.InsertSharedFolder(sharedFolder);
            await _sharedFolderRepository.Save();

            return Json(sharedFolder);
        }

        // DELETE: api/sharedfolder/removesharedfolder
        [HttpPost("removesharedfolder")]
        public async Task<IActionResult> DeleteSharedFolder([FromBody] SharedFolder sharedFolder)
        {
            if (sharedFolder.UserId == Guid.Empty || sharedFolder.UserId == null)
                return Content("Invalid params");

            if (sharedFolder.FolderId == Guid.Empty || sharedFolder.FolderId == null)
                return Content("Invalid params");

            var sharedFolderObj = await _sharedFolderRepository.GetSharedFolder((Guid)sharedFolder.UserId, (Guid)sharedFolder.FolderId);

            _sharedFolderRepository.DeleteSharedFolder(sharedFolderObj.Id);
            await _sharedFolderRepository.Save();

            return Ok("Deleted succesfully");
        }

        // PUT: api/sharedfolder/adminfolder/5
        [HttpPut("adminfolder/{id}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> UpdateAdminFolder([FromBody] AdminFolder adminFolder, Guid id)
        {
            var dataentity = await _adminFolderRepository.GetAdminFolderById(id);
            dataentity.FolderName = adminFolder.FolderName;
            dataentity.UpdateDate = DateTime.UtcNow;
            _adminFolderRepository.UpdateAdminFolder(dataentity);
            await _adminFolderRepository.Save();

            return Json(dataentity);
        }
        // DELETE: api/sharedfolder/adminfolder/5
        [HttpDelete("adminfolder/{id}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> DeleteAdminFolder(Guid id)
        {
            var message = new { isSuccess = false, messgae = "" };
            try
            {
                _adminFolderRepository.DeleteAdminFolder(id);
                await _adminFolderRepository.Save();
                message = new { isSuccess = true, messgae = "Successfully deleted" };
            }
            catch (Exception ex)
            {
                message = new { isSuccess = false, messgae = "Folder with existing data cannot be deleted." };
            }
            return Json(message);
        }

    }
}
