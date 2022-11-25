using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ShareSimple.Controllers
{
    [Produces("application/json")]
    [Route("api/Log")]
    public class LogController : Controller
    {
        private readonly IHostingEnvironment env;
        public LogController(IHostingEnvironment env)
        {
            this.env = env;
        }

        [HttpPost]
        public ActionResult Index(string message) {
            var logDate = DateTime.UtcNow;
            message = string.Format("Message: {0} \tCreatedAt: {1}", message, logDate);
            var logFilePath = env.WebRootPath + "\\Logs\\log.txt";
            System.IO.File.AppendAllLines(logFilePath, new string[] { message });
            return Json(true);
        }
    }
}