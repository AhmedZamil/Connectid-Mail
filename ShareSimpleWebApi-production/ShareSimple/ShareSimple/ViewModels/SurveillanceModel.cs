using ShareSimple.Common.Enums;
using ShareSimple.Models;
using System;

namespace ShareSimple.ViewModels
{
    public class SurveillanceModel 
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
        public string CompanyName { get; set; }
        public string CompanyDomain { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string SeverityName => ((Severity)Severity).ToString();
    }
}
