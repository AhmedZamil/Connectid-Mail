using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IPriceCompanyRepository : IDisposable
    {
        Task<IEnumerable<PriceCompany>> GetPriceCompany();
        Task<PriceCompany> GetPriceCompanyById(Guid packageId);
        IQueryable<PriceCompany> GetPriceCompanyByCompanyId(Guid companyId);
        void InsertPriceCompany(PriceCompany package);
        void DeletePriceCompany(Guid packageId);
        void UpdatePriceCompany(PriceCompany package);
        Task Save();

    }
}
