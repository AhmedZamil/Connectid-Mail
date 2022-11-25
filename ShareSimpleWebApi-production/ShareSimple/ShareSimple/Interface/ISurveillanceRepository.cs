using Microsoft.AspNetCore.Http;
using ShareSimple.Common.Enums;
using ShareSimple.ViewModels;
using System;
using System.Collections.Generic;

namespace ShareSimple.Interface
{
    public interface ISurveillanceRepository : IDisposable
    {
        IEnumerable<SurveillanceModel> Get(SearchSurveillanceRequest request);
        SurveillanceModel Get(Guid id);
        void Log(HttpContext context = null, Guid? userId = null, string logMessage = null, MessageType messageType = MessageType.Info, Severity severity = Severity.NotSet, object result = null, ActionType actionName = ActionType.NotSet, string entityName = null, object oldObject = null, object newObject = null, string moduleName = null, string submoduleName = null);
        void Error(HttpContext context = null, Guid? userId = null, string logMessage = null, Severity severity = Severity.NotSet, object result = null, ActionType actionName = ActionType.NotSet, string entityName = null, object oldObject = null, object newObject = null, string moduleName = null, string submoduleName = null);
        void Debug(HttpContext context = null, Guid? userId = null, string logMessage = null, Severity severity = Severity.NotSet, object result = null, ActionType actionName = ActionType.NotSet, string entityName = null, object oldObject = null, object newObject = null, string moduleName = null, string submoduleName = null);
        void Info(HttpContext context = null, Guid? userId = null, ActionType actionType = ActionType.NotSet, string logMessage = null, string moduleName = null, string submoduleName = null);
        void Warning(HttpContext context = null, Guid? userId = null, ActionType actionType = ActionType.NotSet, string logMessage = null, string moduleName = null, string submoduleName = null);
        void EntityAdded(HttpContext context = null, Guid? userId = null, string entityName = null, object newObject = null, string logMessage = null, string moduleName = null, string submoduleName = null);
        void EntityUpdated(HttpContext context = null, Guid? userId = null, string entityName = null, object oldObject = null, object newObject = null, string logMessage = null, string moduleName = null, string submoduleName = null);
        void EntityDeleted(HttpContext context = null, Guid? userId = null, string entityName = null, object oldObject = null, string logMessage = null, string moduleName = null, string submoduleName = null);
        bool CleanSurveillances();
    }
}
