using System;

namespace ShareSimple.Models
{
    public class Surveillance
    {
        public Guid Id { get; set; }
        public DateTime LogTime { get; set; }
        public string ActionName { get; set; }
        public string LogMessage { get; set; }
        public string MessageType { get; set; }
        public int Severity { get; set; }
        public string Result { get; set; }
        public string EntityName { get; set; }
        public string OldObject { get; set; }
        public string NewObject { get; set; }
        public string ModuleName { get; set; }
        public string SubModuleName { get; set; }
        public string MachineName { get; set; }
        public string MachineIP { get; set; }
        public string UserAgent { get; set; }
        public string AppVersion { get; set; }
        public Guid? UserId { get; set; }
    }
}
