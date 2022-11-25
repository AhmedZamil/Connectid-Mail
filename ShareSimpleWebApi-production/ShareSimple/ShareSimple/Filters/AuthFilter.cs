using Microsoft.AspNetCore.Mvc.Filters;
using ShareSimple.Common;
using ShareSimple.Interface;
using System;
using System.Linq;

namespace ShareSimple.Filters
{
    public class AuthAttribute : ActionFilterAttribute
    {
        private readonly IUserRepository _userRepository;
        public AuthAttribute(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public override void OnActionExecuted(ActionExecutedContext context)
        {

        }
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var userIdH = filterContext.HttpContext.Request.Headers["userid"];
            var tokenH = filterContext.HttpContext.Request.Headers["token"];

            if (userIdH.Count() <= 0 || tokenH.Count() <= 0)
                throw new SeverityException("Invalid token", Common.Enums.Severity.Low);

            var userId = new Guid(userIdH[0]);
            var token = tokenH[0].ToString();

            var user = _userRepository.GetUserById(userId).Result;

            if (user != null && user.ShareSimpleToken == token)
            {
                // do nothing 
            }
            else
            {
                throw new SeverityException("Invalid token", Common.Enums.Severity.Low);
            }
        }
    }
}