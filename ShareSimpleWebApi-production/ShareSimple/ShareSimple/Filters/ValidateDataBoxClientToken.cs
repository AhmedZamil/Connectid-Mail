using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Net;

namespace ShareSimple.Filters
{
    public class ValidateDataBoxClientToken : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (context.HttpContext.Request.Headers.ContainsKey("client_id") && context.HttpContext.Request.Headers.ContainsKey("client_secrete"))
            {
                var clientId = context.HttpContext.Request.Headers["client_id"];
                var clientSecrete = context.HttpContext.Request.Headers["client_secrete"];
                Guid.TryParse(clientId, out Guid clientGuid);
                if (clientGuid == Guid.Empty || string.IsNullOrWhiteSpace(clientSecrete) || Convert.ToBase64String(clientGuid.ToByteArray()) != clientSecrete)
                {
                    context.Result = new UnauthorizedResult();
                }
            }
            else
            {
                context.Result = new UnauthorizedResult();
            }
        }
    }
    internal class UnauthorizedResult : ActionResult
    {
        public override void ExecuteResult(ActionContext context)
        {
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
        }
    }
}
