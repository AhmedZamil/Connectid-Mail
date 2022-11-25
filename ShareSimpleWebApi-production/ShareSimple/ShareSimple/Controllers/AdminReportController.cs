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
    [Route("api/report")]
    [ServiceFilter(typeof(AuthAttribute))]
    public class AdminReportController : Controller
    {
        private readonly IFileRepository _fileRepository;
        private readonly IPackageRepository _packageRepository;
        private readonly IPriceCompanyRepository _priceCompanyRepository;
        private readonly IUserRepository _userRepository;
        private readonly ICompanyRepository _companyRepository;
        private readonly IShareDataRepository _shareDataRepository;
        private readonly IPostDataRepository _postDataRepository;
        private readonly IShareDataFilesRepository _shareDataFileRepository;
        private readonly IShareFileReceiverRepository _shareFileReceiverRepository;
        private readonly IRequestDownloadRepository _requestDownloadRepository;
        private readonly IRequestDownLoadFilesRepository _requestDownLoadFilesRepository;
        private readonly IUserHistoryRepository _userHistoryRepository;
        private readonly ShareSimpleConfiguration _configuration;
        public AdminReportController(
            IFileRepository fileRepository,
            IUserRepository userRepository,
            IUserHistoryRepository userHistoryRepository,
            ICompanyRepository companyRepository,
            IShareDataRepository shareDataRepository,
            IPostDataRepository postDataRepository,
            IShareDataFilesRepository shareDataFileRepository,
            IShareFileReceiverRepository shareFileReceiverRepository,
            IRequestDownloadRepository requestDownloadRepository,
            IRequestDownLoadFilesRepository requestDownLoadFilesRepository,
            IPackageRepository packageRepository,
             IPriceCompanyRepository priceCompanyRepository,
            ShareSimpleConfiguration configuration
        )
        {
            _fileRepository = fileRepository;
            _userRepository = userRepository;
            _userHistoryRepository = userHistoryRepository;
            _companyRepository = companyRepository;
            _postDataRepository = postDataRepository;
            _shareDataRepository = shareDataRepository;
            _shareDataFileRepository = shareDataFileRepository;
            _shareFileReceiverRepository = shareFileReceiverRepository;
            _requestDownloadRepository = requestDownloadRepository;
            _requestDownLoadFilesRepository = requestDownLoadFilesRepository;
            _packageRepository = packageRepository;
            _priceCompanyRepository = priceCompanyRepository;
            _configuration = configuration;
        }

        [HttpGet, Route("billings/{companyid}")]
        public async Task<IActionResult> GetBillingReport(Guid companyid)
        {
            var users = await _userRepository.GetUsersByCompanyId(companyid);
            var userHistories = await _userHistoryRepository.GetUserHistoriesById(companyid);

            var sharedatas = await _shareDataRepository.GetAllShareData();
            var postDatas = await _postDataRepository.GetAllPostData();

            var rShareDatas = new List<ShareData>();
            var rPostDatas = new List<PostData>();

            foreach (var aUser in users)
            {
                var sDatas = sharedatas.Where(sd => sd.SenderId == aUser.Id);
                foreach (var data in sDatas)
                {
                    //data.Sender = null;
                    rShareDatas.Add(data);
                }

                var pDatas = postDatas.Where(pd => pd.SenderId == aUser.Id);
                foreach (var data in pDatas)
                {
                    //data.Sender = null;
                    rPostDatas.Add(data);
                }
            }

            var reportSharedData = rShareDatas.GroupBy(rs => new
            {
                month = rs.SendDate.Value.Month,
                year = rs.SendDate.Value.Year
            })
            .Select(d => new
            {
                Month = d.Key.month,
                Year = d.Key.year,
                Total = d.Count()
            })
            .OrderByDescending(a => a.Year)
            .ThenByDescending(a => a.Month)
            .ToList();

            var reportPostData = rPostDatas.GroupBy(rs => new
            {
                month = rs.SendDate.Value.Month,
                year = rs.SendDate.Value.Year
            })
            .Select(d => new
            {
                Month = d.Key.month,
                Year = d.Key.year,
                Total = d.Count()
            })
            .OrderByDescending(a => a.Year)
            .ThenByDescending(a => a.Month)
            .ToList();

            var rShareDatamy = reportSharedData.Select(rs => new { month = rs.Month, year = rs.Year });
            var rPostDatamy = reportPostData.Select(rs => new { month = rs.Month, year = rs.Year });

            var totmy = rShareDatamy.Concat(rPostDatamy);

            var yearmonths = totmy.GroupBy(rs => new
            {
                year = rs.year,
                month = rs.month
            });

            var bResponses = new List<BillingReportResponse>();

            foreach (var obj in yearmonths)
            {
                var noOfSData = reportSharedData.SingleOrDefault(rs => rs.Month == obj.Key.month && rs.Year == obj.Key.year);
                var noOfPData = reportPostData.SingleOrDefault(rs => rs.Month == obj.Key.month && rs.Year == obj.Key.year);

                bResponses.Add(new BillingReportResponse
                {
                    month = obj.Key.month,
                    year = obj.Key.year,
                    yearmonth = new DateTime(obj.Key.year, obj.Key.month, 1).ToString("Y"),
                    noOfPostData = noOfPData != null ? noOfPData.Total : 0,
                    noOfShared = noOfSData != null ? noOfSData.Total : 0,
                    noOfUsers = users.Count()
                });

            }

            return Json(bResponses);
        }

        [HttpGet, Route("company")]
        public async Task<IActionResult> GetAllCompanyReport([FromQuery]bool activeOnly = false)
        {
            var companies = await _companyRepository.GetCompanies(activeOnly);
            var compResponses = new List<CompanyReportResponse>();
            var trialPeriod = _configuration.TrialDays;
            foreach (var company in companies)
            {
                var package = _priceCompanyRepository.GetPriceCompanyByCompanyId(company.Id)?.FirstOrDefault(x => x.IsActive == true);
                var companyAge = ((TimeSpan)(DateTime.UtcNow - company.Created)).TotalDays;

                var users = await _userRepository.GetUsersByCompanyId(company.Id);
                var adminUser = users.FirstOrDefault(u => u.Type == true);
                var activeUserCount = users.Count(u => u.IsActive == true && u.IsDeleted != true);
                var rAdminUser = new UserModel();
                if (adminUser != null)
                {
                    rAdminUser.Name = adminUser.Name;
                    rAdminUser.Email = adminUser.Email;
                    rAdminUser.CreateDate = adminUser.CreateDate;
                    rAdminUser.Id = adminUser.Id;
                    rAdminUser.IsActive = adminUser.IsActive;
                    rAdminUser.IsSuperAdmin = adminUser.IsSuperAdmin;
                }

                compResponses.Add(new CompanyReportResponse
                {
                    Id = company.Id,
                    AdminUser = rAdminUser,
                    Name = company.Name,
                    Domain = company.Domain,
                    IsActive = company.IsActive,
                    IsDeleted = company.IsDeleted,
                    DeletedTime = company.DeletedTime,
                    AutoRenewal = company.AutoRenewal,
                    SubscriptionType = company.SubscriptionType,
                    Address = company.Address,
                    Package = package,
                    NoOfActiveUsers = activeUserCount,
                    Created = company.Created,
                    Updated = company.Updated,
                    PromotionCode = company.PromotionCode
                });
            }

            return Json(compResponses.OrderByDescending(x => x.Package.Created));
        }

    }
}
