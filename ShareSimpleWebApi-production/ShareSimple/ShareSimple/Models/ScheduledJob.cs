using System;

namespace ShareSimple.Models
{
    public class ScheduledJob
    {
        public ScheduledJob()
        {

        }
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public Int16 JobType { get; set; }
        public Int16 JobStatus { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ExecuteOn { get; set; }
        public DateTime? ExecutedTime { get; set; }
        public string ExecutionResult { get; set; }

        public virtual Company Company { get; set; }
    }
}
