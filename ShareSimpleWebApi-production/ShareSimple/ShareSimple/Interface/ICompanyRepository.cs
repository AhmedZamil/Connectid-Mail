using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface ICompanyRepository : IDisposable
    {
        Task<IEnumerable<Company>> GetCompanies(bool activeOnly = false);
        Task<Company> GetCompanyById(Guid companyId);
        void InsertCompany(Company company);
        void DeleteCompany(Guid companyId);
        void UpdateCompany(Company company);
        Task<Company> GetCompanyByDomain(string domain);
        Task Save();
        
    }
}
