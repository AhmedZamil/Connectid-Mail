using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IAuditLogRepository : IDisposable
    {
        Task<IEnumerable<Company>> GetCompanies();
        Task<Company> GetCompanyById(Guid companyId);
        void InsertCompany(Company company);
        void DeleteCompany(Guid companyId);
        void UpdateCompany(Company company);
        Task Save();

    }
}
