using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IConsentRepository : IDisposable
    {
        Task<IEnumerable<Consent>> GetConsents(Guid? companyId);
        Task<Consent> GetConsentById(Guid ConsentId);
        Task<Consent> GetConsentByName(string name);
        Task<Consent> GetConsentByType(Guid? companyId, string type);
        Task<IEnumerable<Consent>> GetConsentsByType(Guid? companyId, string type);
        void InsertConsent(Consent consent);
        void DeleteConsent(Guid id);
        void UpdateConsent(Consent consent);
        Task Save();

    }
}
