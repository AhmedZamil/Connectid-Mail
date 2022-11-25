using System;

namespace ShareSimple.Common.WebCRM
{
    public class WebCrmException : Exception
    {
        public WebCrmException(string message) : base(message) { }
    }
}
