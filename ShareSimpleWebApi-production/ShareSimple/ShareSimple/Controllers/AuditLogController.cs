using Microsoft.AspNetCore.Mvc;
using ShareSimple.Common;
using ShareSimple.Interface;
using ShareSimple.Models;
using ShareSimple.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Controllers
{
    [Produces("application/json")]
    [Route("api/log")]
    //[ServiceFilter(typeof(AuthAttribute))]
    public class AuditLogController : Controller
    {
        private readonly IFileRepository _fileRepository;
        private readonly IUserRepository _userRepository;
        private readonly IShareDataRepository _shareDataRepository;
        private readonly IShareDataFilesRepository _shareDataFileRepository;
        private readonly IShareFileReceiverRepository _shareFileReceiverRepository;
        private readonly IPostDataRepository _postDataRepository;
        private readonly IPostDataFilesRepository _postDataFileRepository;
        private readonly IPostDataReceiverRepository _postDataReceiverRepository;
        public AuditLogController(
            IFileRepository fileRepository,
            IUserRepository userRepository,
            ICompanyRepository companyRepository,
            IShareDataRepository shareDataRepository,
            IShareDataFilesRepository shareDataFileRepository,
            IShareFileReceiverRepository shareFileReceiverRepository,
            IPostDataFilesRepository postDataFilesRepository,
            IPostDataReceiverRepository postDataReceiverRepository,
            IPostDataRepository postDataRepository)
        {
            _fileRepository = fileRepository;
            _userRepository = userRepository;
            _shareDataRepository = shareDataRepository;
            _shareDataFileRepository = shareDataFileRepository;
            _shareFileReceiverRepository = shareFileReceiverRepository;
            _postDataFileRepository = postDataFilesRepository;
            _postDataReceiverRepository = postDataReceiverRepository;
            _postDataRepository = postDataRepository;
        }

        [HttpGet, Route("sharedata/{companyId}")]
        public async Task<IActionResult> GetSharedataLogs(Guid companyId)
        {
            if (companyId == null || companyId == Guid.Empty)
                return Content(ConstantMessage.COMPANY_ID_CANNOT_BE_EMPTY);

            var users = await _userRepository.GetUsersByCompanyId(companyId);

            var shareDatas = new List<ShareData>();
            foreach (var sender in users)
            {
                var shareDataObjs = await _shareDataRepository.GetAllShareData(sender.Id);
                shareDatas.AddRange(shareDataObjs);
            }

            var logs = new List<AuditLogReponse>();

            foreach (var shareData in shareDatas)
            {
                var files = new List<FileMetaDataResponse>();
                var receivers = new List<ReceiverModel>();
                var sender = await _userRepository.GetUserById((Guid)shareData.SenderId);
                var shareDaraReceivers = await _shareFileReceiverRepository.GetShareDataReceiverByShareId(shareData.Id);
                foreach (var receiver in shareDaraReceivers)
                {
                    receivers.Add(new ReceiverModel
                    {
                        Id = (Guid)receiver.ReceiverId,
                        ReceiverEmail = receiver.ReceiverEmail
                    });
                }

                var shareDataFiles = await _shareDataFileRepository.GetShareDataFiles(shareData.Id);
                foreach (var file in shareDataFiles)
                {
                    var fileMetadata = await _fileRepository.GetFileById((Guid)file.FileId);
                    files.Add(new FileMetaDataResponse
                    {
                        FileId = fileMetadata.FileId,
                        Name = fileMetadata.Name,
                        FileUrl = fileMetadata.FileUrl,
                        Size = fileMetadata.Size,
                        DeletedDate = fileMetadata.DeletedDate,
                        IsDeleted = fileMetadata.IsDeleted
                    });
                }

                logs.Add(new AuditLogReponse
                {
                    Receivers = receivers,
                    ShareDataId = shareData.Id,
                    Files = files,
                    Sender = new UserModel
                    {
                        Id = sender.Id,
                        Name = sender.Name,
                        CompanyId = sender.CompanyId,
                        Email = sender.Email,
                        Type = sender.Type
                    },
                    Mode = shareData.Mode,
                    SentDate = shareData.SendDate
                });
            }

            logs = logs.OrderByDescending(x => x.SentDate).ToList();

            return Json(logs);
        }

        [HttpGet, Route("postdata/{companyId}")]
        public async Task<IActionResult> GetPostDataLogs(Guid companyId)
        {
            if (companyId == null || companyId == Guid.Empty)
                return Content(ConstantMessage.COMPANY_ID_CANNOT_BE_EMPTY);

            var users = await _userRepository.GetUsersByCompanyId(companyId);

            var postDatas = new List<PostData>();
            foreach (var sender in users)
            {
                var postdataObjs = await _postDataRepository.GetAllPostData(sender.Id);
                postDatas.AddRange(postdataObjs);
            }

            var logs = new List<AuditLogReponse>();

            foreach (var postData in postDatas)
            {

                var sender = await _userRepository.GetUserById((Guid)postData.SenderId);
                var postDaraReceivers = await _postDataReceiverRepository.GetReceivers(postData.Id);

                var postDataFiles = await _postDataFileRepository.GetPostDataFiles(postData.Id);


                foreach (var receiver in postDaraReceivers)
                {
                    var files = new List<FileMetaDataResponse>();
                    var receivers = new List<ReceiverModel>();
                    receivers.Add(new ReceiverModel
                    {
                        Id = (Guid)receiver.ReceiverId,
                        ReceiverEmail = receiver.ReceiverEmail
                    });

                    foreach (var file in postDataFiles.Where(pf => pf.ReceiverId == (Guid)receiver.ReceiverId))
                    {
                        var fileMetadata = await _fileRepository.GetFileById((Guid)file.FileId);
                        files.Add(new FileMetaDataResponse
                        {
                            FileId = fileMetadata.FileId,
                            Name = fileMetadata.Name,
                            FileUrl = fileMetadata.FileUrl,
                            Size = fileMetadata.Size,
                            DeletedDate = fileMetadata.DeletedDate,
                            IsDeleted = fileMetadata.IsDeleted,
                            CreatedDate = fileMetadata.CreatedDate
                        });
                    }

                    logs.Add(new AuditLogReponse
                    {
                        Receivers = receivers,
                        PostDataId = postData.Id,
                        Files = files,
                        Sender = new UserModel
                        {
                            Id = sender.Id,
                            Name = sender.Name,
                            CompanyId = sender.CompanyId,
                            Email = sender.Email,
                            Type = sender.Type
                        },
                        SentDate = postData.SendDate
                    });
                }

            }

            logs = logs.OrderByDescending(x => x.SentDate).ToList();

            return Json(logs);
        }

    }
}
