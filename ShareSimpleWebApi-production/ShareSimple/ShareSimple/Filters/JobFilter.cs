using Microsoft.AspNetCore.Mvc.Filters;
using ShareSimple.Common;
using System.Linq;

namespace ShareSimple.Filters
{
    public class SchedulerJobAttribute : ActionFilterAttribute
    {
        public SchedulerJobAttribute()
        {
        }
        public override void OnActionExecuted(ActionExecutedContext context)
        {

        }
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var appId = filterContext.HttpContext.Request.Headers["appid"];
            // 31780fbb-8bd0-4f25-a40d-23ec2e6bebcf - ShareSimpleExpiredFileCleaner GUID
            if (appId.Count() <= 0 || !(appId == "31780fbb-8bd0-4f25-a40d-23ec2e6bebcf"))
                throw new SeverityException("The app isn't allowed to access it", Common.Enums.Severity.Low);

        }
    }
}