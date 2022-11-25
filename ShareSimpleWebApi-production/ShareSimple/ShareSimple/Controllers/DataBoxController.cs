using Microsoft.AspNetCore.Mvc;
using ShareSimple.Common;
using ShareSimple.Filters;
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
    [Route("api/databox")]
    [ValidateDataBoxClientToken]
    public class DataBoxController : Controller
    {
        private readonly ShareSimpleConfiguration _configuration;
        private readonly ICompanyRepository _companyRepository;
        private readonly ICompanyHistoryRepository _companyHistoryRepository;
        private readonly IShareDataRepository _shareDataRepository;
        private readonly IShareFileReceiverRepository _shareFileReceiverRepository;
        private readonly IPostDataRepository _postDataRepository;
        private readonly IPostDataReceiverRepository _postDataReceiverRepository;
        private readonly IUserRepository _userRepository;
        private readonly IShareDataFilesRepository _shareDataFileRepository;
        private readonly IPostDataFilesRepository _postDataFileRepository;
        private readonly IFileRepository _fileRepository;
        public DataBoxController(ICompanyRepository companyRepository,
            ShareSimpleConfiguration configuration,
            ICompanyHistoryRepository companyHistoryRepository,
            IShareDataRepository shareDataRepository,
            IShareFileReceiverRepository shareFileReceiverRepository,
            IPostDataRepository postDataRepository,
            IPostDataReceiverRepository postDataReceiverRepository,
            IUserRepository userRepository,
            IShareDataFilesRepository shareDataFileRepository,
            IFileRepository fileRepository,
            IPostDataFilesRepository postDataFileRepository
            )
        {
            _configuration = configuration;
            _companyRepository = companyRepository;
            _companyHistoryRepository = companyHistoryRepository;
            _shareDataRepository = shareDataRepository;
            _shareFileReceiverRepository = shareFileReceiverRepository;
            _postDataRepository = postDataRepository;
            _postDataReceiverRepository = postDataReceiverRepository;
            _userRepository = userRepository;
            _shareDataFileRepository = shareDataFileRepository;
            _fileRepository = fileRepository;
            _postDataFileRepository = postDataFileRepository;
        }
        [HttpGet("")]
        public async Task<DataBoxData> GetDataBoxData(DateTime? fromDate, DateTime? toDate)
        {
            var requestModel = new DataBoxRequestModel {FromDate = fromDate, ToDate = toDate };
            if (!requestModel.FromDate.HasValue)
                requestModel.FromDate = DateTime.UtcNow.AddHours(-1);
            if (!requestModel.ToDate.HasValue)
                requestModel.ToDate = DateTime.UtcNow;
            var companies = (await _companyRepository.GetCompanies()).Where(x => x.Created >= requestModel.FromDate.Value && x.Created <= requestModel.ToDate.Value);
            var customerCounts = companies.Select(x => new CustomerCount { Date = x.Created, NoOfCustomers = 1 }).OrderBy(x => x.Date).ToList();
            var countryWiseCustomerCount = companies.Select(x => new CountryWiseCustomerCount { Date = x.Created, Country = x.Country, NoOfCustomers = 1 }).OrderBy(x => x.Date).ToList();

            var companyHistories =(await _companyHistoryRepository.GetCompanyHistories()).Where(x => x.StatusDate >= requestModel.FromDate.Value && x.StatusDate <= requestModel.ToDate.Value);
            var statusWiseCustomerCount = companyHistories.Select(x => new StatusWiseCustomerCount { Date = x.StatusDate, Status = x.Status, NoOfCustomers = 1 }).OrderBy(x => x.Date).ToList();

            var shareDataObjs = (await _shareDataRepository.GetAllShareData()).Where(x => x.SendDate >= requestModel.FromDate.Value && x.SendDate <= requestModel.ToDate.Value);
            var postDataObjs = (await _postDataRepository.GetAllPostData()).Where(x=> x.SendDate >= requestModel.FromDate.Value && x.SendDate <= requestModel.ToDate.Value);

            var requestCounts = new List<RequestCount>();
            var requestSizes = new List<RequestSize>();
            var userWiseRequestCount = new List<UserWiseRequestCount>();
            var userWiseRequestsSize = new List<UserWiseRequestSize>();
            var requestTypeWiseCount = new List<TypeWiseRequestCount>();
            var typeWiseRequestSizes = new List<TypeWiseRequestSize>();
            var linkClicks = new List<LinkClick>();
            var linkClicksByType = new List<LinkClickByType>();
            var linksSentByCompany = new List<LinkSentByCompany>();
            foreach (var shareData in shareDataObjs)
            {
                var user = await _userRepository.GetUserById(shareData.SenderId.Value);
                requestCounts.Add(new RequestCount { Date = shareData.SendDate, NumberOfRequests = 1 });
                userWiseRequestCount.Add(new UserWiseRequestCount { Date = shareData.SendDate, NumberOfRequests = 1, User = user.Name });

                var shareDataFiles = await _shareDataFileRepository.GetShareDataFiles(shareData.Id);
                var requestSize = new RequestSize { Date = shareData.SendDate };
                var userRequest = new UserWiseRequestSize { User = user.Name, Date = shareData.SendDate };
                var typeWiseRequestSize = new TypeWiseRequestSize { Date = shareData.SendDate, RequestType = "Share Data" };
                foreach (var shareDataFile in shareDataFiles)
                {
                    var file = await _fileRepository.GetFileById(shareDataFile.FileId.Value);
                    requestSize.SizeOfRequest += file.Size.HasValue ? file.Size.Value : 0;
                }
                requestSizes.Add(requestSize);
                userRequest.SizeOfRequest = requestSize.SizeOfRequest;
                userWiseRequestsSize.Add(userRequest);
                typeWiseRequestSize.SizeOfRequest = requestSize.SizeOfRequest;
                typeWiseRequestSizes.Add(typeWiseRequestSize);

                requestTypeWiseCount.Add(new TypeWiseRequestCount { Date = shareData.SendDate, NumberOfRequests = 1, RequestType = "Share Data" });

                var shareFileReceivers = await _shareFileReceiverRepository.GetShareDataReceiverByShareId(shareData.Id);
                var linkClick = new LinkClick { Date = shareData.SendDate, NumberOfClicks = 0 };
                foreach (var shareFileReceiver in shareFileReceivers)
                {
                    if (shareFileReceiver.Otp != null)
                    {
                        linkClick.NumberOfClicks += 1;
                    }
                }
                if (linkClick.NumberOfClicks > 0)
                {
                    var company = await _companyRepository.GetCompanyById(user.CompanyId.Value);
                    linkClicks.Add(linkClick);
                    linkClicksByType.Add(new LinkClickByType { Date = linkClick.Date, NumberOfClicks = linkClick.NumberOfClicks, ClickType = "Share Data" });
                    linksSentByCompany.Add(new LinkSentByCompany { Date = linkClick.Date, NumberOfClicks = linkClick.NumberOfClicks, Company = company == null ? "" : company.Name });
                }
            }

            foreach (var postData in postDataObjs)
            {
                var user = await _userRepository.GetUserById(postData.SenderId.Value);
                requestCounts.Add(new RequestCount { Date = postData.SendDate, NumberOfRequests = 1 });
                userWiseRequestCount.Add(new UserWiseRequestCount { Date = postData.SendDate, NumberOfRequests = 1, User = user.Name });

                var postDataFiles = await _postDataFileRepository.GetPostDataFiles(postData.Id);
                var requestSize = new RequestSize { Date = postData.SendDate };
                var userRequest = new UserWiseRequestSize { User = user.Name, Date = postData.SendDate };
                var typeWiseRequestSize = new TypeWiseRequestSize { Date = postData.SendDate, RequestType = "Request Data" };
                foreach (var postDataFile in postDataFiles)
                {
                    var file = await _fileRepository.GetFileById(postDataFile.FileId.Value);
                    requestSize.SizeOfRequest += file.Size.HasValue ? file.Size.Value : 0;
                }

                requestSizes.Add(requestSize);
                userRequest.SizeOfRequest = requestSize.SizeOfRequest;
                userWiseRequestsSize.Add(userRequest);
                typeWiseRequestSize.SizeOfRequest = requestSize.SizeOfRequest;
                typeWiseRequestSizes.Add(typeWiseRequestSize);

                requestTypeWiseCount.Add(new TypeWiseRequestCount { Date = postData.SendDate, NumberOfRequests = 1, RequestType = "Request Data" });

                var postDataReceivers = await _postDataReceiverRepository.GetReceivers(postData.Id);
                var linkClick = new LinkClick { Date = postData.SendDate, NumberOfClicks = 0 };
                foreach (var postDataReceiver in postDataReceivers)
                {
                    if (postDataReceiver.Otp != null)
                    {
                        linkClick.NumberOfClicks += 1;
                    }
                    if (postDataReceiver.OtpVerified != null)
                    {
                        linkClick.NumberOfClicks += 1;
                    }
                }
                if (linkClick.NumberOfClicks > 0)
                {
                    var company = await _companyRepository.GetCompanyById(user.CompanyId.Value);
                    linkClicks.Add(linkClick);
                    linkClicksByType.Add(new LinkClickByType { Date = linkClick.Date, NumberOfClicks = linkClick.NumberOfClicks, ClickType = "Request Data" });
                    linksSentByCompany.Add(new LinkSentByCompany { Date = linkClick.Date, NumberOfClicks = linkClick.NumberOfClicks, Company = company == null ? "" : company.Name });
                }
            }
            var activeCompanies = await _companyRepository.GetCompanies(true);
            var today = DateTime.UtcNow.Date;
            var trialEndingCompanies = activeCompanies.Where(x => (today - x.Created.Value).TotalDays <= 14).Select(x => new CustomerTrialEndingInfo { Date = today, Customer = x.Name, TrialEndingDays = (int)(14 - (today - x.Created.Value).TotalDays) }).ToList();
            return new DataBoxData
            {
                CustomerCounts = customerCounts,
                CountryWiseCustomers = countryWiseCustomerCount,
                StatusWiseCustomers = statusWiseCustomerCount,
                RequestCounts = requestCounts.OrderBy(x => x.Date).ToList(),
                UserWiseRequestCounts = userWiseRequestCount.OrderBy(x => x.Date).ToList(),
                TypeWiseRequestCounts = requestTypeWiseCount.OrderBy(x => x.Date).ToList(),
                RequestSizes = requestSizes.OrderBy(x => x.Date).ToList(),
                UserWiseRequestSizes = userWiseRequestsSize.OrderBy(x => x.Date).ToList(),
                TypeWiseRequestSizes = typeWiseRequestSizes.OrderBy(x => x.Date).ToList(),
                LinkClicks = linkClicks.OrderBy(x => x.Date).ToList(),
                LinkClicksByType = linkClicksByType.OrderBy(x => x.Date).ToList(),
                LinksSentByCompany = linksSentByCompany.OrderBy(x => x.Date).ToList(),
                CustomerTrialEndingDays = trialEndingCompanies
            };
        }
    }
}
