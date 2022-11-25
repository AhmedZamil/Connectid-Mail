using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Options;
using ShareSimple.Common;
using ShareSimple.Common.Enums;
using ShareSimple.Interface;
using System;
using System.IO;
using System.Net;
using System.Text;

namespace ShareSimple.Filters
{
    public class SurveillanceFilter : IActionFilter
    {
        private readonly ISurveillanceRepository _logRepository;
        private readonly SurveillanceSettings _surveillanceSettings;
        public SurveillanceFilter(ISurveillanceRepository logRepository, IOptions<SurveillanceSettings> surveillanceSettings)
        {
            _logRepository = logRepository;
            _surveillanceSettings = surveillanceSettings.Value;
        }
        public void OnActionExecuting(ActionExecutingContext context)
        {

        }
        public string BodyToString(HttpRequest request)
        {
            try
            {
                var returnValue = string.Empty;
                request.EnableRewind();
                //ensure we read from the begining of the stream - in case a reader failed to read to end before us.
                request.Body.Position = 0;
                //use the leaveOpen parameter as true so further reading and processing of the request body can be done down the pipeline
                using (var stream = new StreamReader(request.Body, Encoding.UTF8, true, 1024, leaveOpen: true))
                {
                    returnValue = stream.ReadToEnd();
                }
                //reset position to ensure other readers have a clear view of the stream 
                request.Body.Position = 0;
                return returnValue;
            }
            catch
            {
                return string.Empty;
            }
        }
        public string FormDataToString(HttpRequest request)
        {
            try
            {
                var formData = "{";
                if (request.Form != null && request.Form.Keys.Count > 0)
                {
                    var i = 0;
                    foreach (var key in request.Form.Keys)
                    {
                        formData += $"\"{key}\": \"{request.Form[key]}\"";
                        if (i < request.Form.Keys.Count - 1)
                            formData += ",";
                        i++;
                    }
                }
                formData += "}";
                return formData;
            }
            catch
            {
                return string.Empty;
            }
        }
        public void OnActionExecuted(ActionExecutedContext context)
        {
            try
            {
                if (_surveillanceSettings.KeepApiLog != true) return;
                var actionDescriptor = (ControllerActionDescriptor)context?.ActionDescriptor;
                var controllterName = actionDescriptor?.ControllerName;
                var actionName = actionDescriptor?.ActionName;
                var method = context?.HttpContext?.Request?.Method;
                var api = $"{context?.HttpContext?.Request?.Path}{context?.HttpContext?.Request?.QueryString}";
                if (api.StartsWith("/api/surveillance"))
                {
                    return;
                }
                //var formData = context?.HttpContext?.Request?.Form;
                //var payload = context?.HttpContext?.Request?.Body;
                var statusCode = HttpStatusCode.OK;
                var severity = Severity.NotSet;
                var messageType = MessageType.Info;
                object resultValue = null;
                Exception exception = null;
                if (context.Exception != null)
                {
                    if (context.Exception is SeverityException)
                    {
                        severity = ((SeverityException)context.Exception)?.Severity ?? Severity.NotSet;
                    }
                    statusCode = HttpStatusCode.InternalServerError;
                    exception = context.Exception;
                }
                if (context.Result != null)
                {
                    var statusCodeProp = context.Result.GetType().GetProperty("StatusCode");
                    if (statusCodeProp != null)
                    {
                        var statusCodePropValue = statusCodeProp.GetValue(context.Result);
                        if (statusCodePropValue != null)
                        {
                            statusCode = (HttpStatusCode)statusCodePropValue;
                        }
                    }
                    var resultValueProp = context.Result.GetType().GetProperty("Value");
                    if (resultValueProp != null)
                    {
                        resultValue = resultValueProp.GetValue(context.Result);
                    }
                }
                switch (statusCode)
                {
                    case HttpStatusCode.InternalServerError:
                    case HttpStatusCode.BadRequest:
                        if (severity == Severity.NotSet)
                            severity = Severity.High;
                        messageType = MessageType.Error;
                        break;
                    case HttpStatusCode.NotFound:
                    case HttpStatusCode.Unauthorized:
                    case HttpStatusCode.Forbidden:
                        if (severity == Severity.NotSet)
                            severity = Severity.Medium;
                        messageType = MessageType.Error;
                        break;
                }
                var payload = BodyToString(context?.HttpContext?.Request);
                var formData = FormDataToString(context?.HttpContext?.Request);
                var result = new { StatusCode = (int)statusCode, Payload = payload, FormData = formData, Value = resultValue, Exception = exception };
                _logRepository.Log(context.HttpContext, null, $"{method} {result.StatusCode} {api}", messageType, severity, result, ActionType.API, null, null, null, controllterName, actionName);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }
    }
}
