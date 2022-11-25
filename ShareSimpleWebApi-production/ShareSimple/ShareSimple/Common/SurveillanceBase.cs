using Microsoft.AspNetCore.Http;
using System;

namespace ShareSimple.Common
{
    public class SurveillanceBase
    {
        private readonly HttpContext _httpContext;
        public SurveillanceBase(HttpContext httpContext)
        {
            _httpContext = httpContext;
        }
        public string MachineName => _httpContext?.Connection?.RemoteIpAddress?.ToString() ?? "";
        public string MachineIP => _httpContext?.Connection?.RemoteIpAddress?.ToString() ?? "";
        public string UserAgent => _httpContext?.Request?.Headers["User-Agent"].ToString() ?? "";
        public Guid? UserId
        {
            get
            {
                var userId = _httpContext?.Request?.Headers["userid"];
                if(userId.HasValue && userId.Value.Count > 0)
                {
                    if (!string.IsNullOrWhiteSpace(userId.Value[0]))
                        return new Guid(userId.Value[0]);
                }
                return null;
            }
        }
        public string AppVersion => GetType()?.Assembly?.GetName()?.Version?.ToString() ?? "1.0.0.0";
    }
}
