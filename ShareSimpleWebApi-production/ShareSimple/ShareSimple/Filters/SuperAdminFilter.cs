using Microsoft.AspNetCore.Mvc.Filters;
using ShareSimple.Common;
using ShareSimple.Interface;
using System;
using System.Linq;

namespace ShareSimple.Filters
{
    public class SuperAdminAttribute : ActionFilterAttribute
    {
        private readonly IUserRepository _userRepository;
        public SuperAdminAttribute(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public override void OnActionExecuted(ActionExecutedContext context)
        {

        }
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var userIdH = filterContext.HttpContext.Request.Headers["userid"];
            
            if (userIdH.Count() <= 0)
                throw new SeverityException("You aren't super admin", Common.Enums.Severity.Low);

            var userId = new Guid(userIdH[0]);
            
            var user = _userRepository.GetUserById(userId).Result;

            if (user == null || user.IsSuperAdmin != true)
            {
                throw new SeverityException("You aren't super admin", Common.Enums.Severity.Low);
            }
        }
    }
}