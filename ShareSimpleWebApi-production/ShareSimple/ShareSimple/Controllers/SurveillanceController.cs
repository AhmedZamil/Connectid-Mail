using Microsoft.AspNetCore.Mvc;
using ShareSimple.Common.Enums;
using ShareSimple.Filters;
using ShareSimple.Interface;
using ShareSimple.ViewModels;
using System;
using System.Linq;

namespace ShareSimple.Controllers
{
    [Produces("application/json")]
    [Route("api/surveillance")]
    public class SurveillanceController : Controller
    {
        private readonly ISurveillanceRepository _logRepository;
        public SurveillanceController(ISurveillanceRepository logRepository)
        {
            _logRepository = logRepository;
        }
        [ServiceFilter(typeof(SuperAdminAttribute))]
        [HttpGet, Route("enums")]
        public IActionResult GetSeverities()
        {
            var severities = Enum.GetValues(typeof(Severity)).Cast<Severity>().Select(a => new { Id = a, Name = a.ToString() }).ToList();
            var actionTypes = Enum.GetValues(typeof(ActionType)).Cast<ActionType>().Select(a => a.ToString()).ToList();
            var messageTypes = Enum.GetValues(typeof(MessageType)).Cast<MessageType>().Select(a => a.ToString()).ToList();
            return Json(new { MessageTypes = messageTypes, ActionTypes = actionTypes, Severities = severities });
        }
        [ServiceFilter(typeof(SuperAdminAttribute))]
        [HttpPost, Route("")]
        public IActionResult GetSurveillances([FromBody]SearchSurveillanceRequest request)
        {
            return Json(_logRepository.Get(request));
        }
        [ServiceFilter(typeof(SuperAdminAttribute))]
        [HttpGet, Route("{id}")]
        public IActionResult GetSurveillances(Guid id)
        {
            return Json(_logRepository.Get(id));
        }
        [ServiceFilter(typeof(SchedulerJobAttribute))]
        [HttpGet, Route("clean")]
        public IActionResult ClearSurveillances()
        {
            return Json(_logRepository.CleanSurveillances());
        }
    }
}