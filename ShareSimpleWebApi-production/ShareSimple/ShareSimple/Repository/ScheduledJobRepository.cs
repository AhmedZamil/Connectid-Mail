using Microsoft.EntityFrameworkCore;
using ShareSimple.Common.Enums;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Repository
{
    public class ScheduledJobRepository : IScheduledJobRepository, IDisposable
    {
        private readonly SharesimpleContext _context;
        private bool disposed = false;
        public ScheduledJobRepository(SharesimpleContext sharesimpleContext)
        {
            _context = sharesimpleContext;
        }
        public async Task<IEnumerable<ScheduledJob>> GetAll()
        {
            return await _context.ScheduledJobs.ToListAsync();
        }

        public async Task<IEnumerable<ScheduledJob>> GetAllPending(DateTime? date = null)
        {
            var toDate = date.HasValue ? date.Value.Date : DateTime.UtcNow.Date;
            return await _context.ScheduledJobs.Where(x => (x.JobStatus == (int)JobStatus.Pending || x.JobStatus == (int)JobStatus.Failed) && x.ExecuteOn.Date <= toDate).ToListAsync();
        }
        public async Task<ScheduledJob> GetById(Guid id)
        {
            return await _context.ScheduledJobs.FindAsync(id);
        }
        public async Task<IEnumerable<ScheduledJob>> GetByCompanyId(Guid companyId)
        {
            return await _context.ScheduledJobs.Where(u => u.CompanyId == companyId).ToListAsync();
        }
        public void Insert(ScheduledJob scheduledJob)
        {
            _context.ScheduledJobs.Add(scheduledJob);
        }
        public void Update(ScheduledJob scheduledJob)
        {
            _context.Entry(scheduledJob).State = EntityState.Modified;
        }
        public void Delete(Guid id)
        {
            var scheduledJob = _context.ScheduledJobs.Find(id);
            if (scheduledJob != null)
                _context.ScheduledJobs.Remove(scheduledJob);
        }
        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }
        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
