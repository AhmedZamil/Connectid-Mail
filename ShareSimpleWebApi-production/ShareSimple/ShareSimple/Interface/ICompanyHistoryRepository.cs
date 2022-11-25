using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface ICompanyHistoryRepository : IDisposable
    {
        Task<IEnumerable<CompanyHistory>> GetCompanyHistories();
        Task<IEnumerable<CompanyHistory>> GetCompanyHistoriesById(Guid companyId);
        void InsertCompanyHistory(CompanyHistory companyHistory);
        void UpdateCompanyHistory(CompanyHistory companyHistory);
        void DeleteCompanyHistory(int id);
        Task Save();
    }
}
