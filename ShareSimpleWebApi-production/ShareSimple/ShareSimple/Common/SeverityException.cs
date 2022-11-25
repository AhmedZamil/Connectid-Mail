using ShareSimple.Common.Enums;
using System;

namespace ShareSimple.Common
{
    public class SeverityException : Exception
    {
        public Severity Severity { get; set; } = Severity.NotSet;
        public SeverityException(Exception ex) : base()
        {

        }
        public SeverityException(string message, Severity severity = Severity.NotSet) : base(message)
        {
            Severity = severity;
        }
    }
}
