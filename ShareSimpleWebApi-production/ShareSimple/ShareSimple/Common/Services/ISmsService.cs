using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace ShareSimple.Common.Services
{
    public interface ISmsService
    {
        Task<string> SendSms(string msgText, string to = "+8801717890883", HttpContext httpContext = null, Guid? userId = null);
    }
}
