using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IScheduledJobRepository : IDisposable
    {
        Task<IEnumerable<ScheduledJob>> GetAll();
        Task<IEnumerable<ScheduledJob>> GetAllPending(DateTime? date = null);
        Task<ScheduledJob> GetById(Guid id);
        Task<IEnumerable<ScheduledJob>> GetByCompanyId(Guid companyId);
        void Insert(ScheduledJob scheduledJob);
        void Delete(Guid id);
        void Update(ScheduledJob scheduledJob);
        Task Save();
    }
}
