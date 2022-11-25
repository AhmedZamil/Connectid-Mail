using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace ShareSimple.Authorization
{
    public class OfficeAuthorizeFilterAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext context)
        {
            if (context.Request.Headers.Contains("Authorization"))
            {
                var headers = context.Request.Headers.GetValues("Authorization").ToArray();
            }
                
        }
    }
}
