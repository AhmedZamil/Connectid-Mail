using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Collections.Generic;
using System.Linq;

namespace ShareSimple.Filters
{
    public class AddRequiredHeaderParameter : IOperationFilter
    {
        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {
            var actFilters = context.ApiDescription.ActionDescriptor.FilterDescriptors;
            var hasDataboxFilter = actFilters.Select(f => f.Filter).OfType<ValidateDataBoxClientToken>().Any();
            if (hasDataboxFilter)
            {
                if (operation.Parameters == null)
                    operation.Parameters = new List<OpenApiParameter>();
                var clientIdParam = new OpenApiParameter
                {
                    Name = "client_id",
                    In = ParameterLocation.Header,
                    Description = "client id",
                    Required = true,
                };

                operation.Parameters.Add(clientIdParam);
                var secreteParam = new OpenApiParameter
                {
                    Name = "client_secrete",
                    In = ParameterLocation.Header,
                    Description = "client secrete",
                    Required = true
                };
                operation.Parameters.Add(secreteParam);
            }
            var serviceFilters = actFilters.Select(f => f.Filter).OfType<ServiceFilterAttribute>();
            var hasSuperAdminFilter = serviceFilters.Where(x => x.ServiceType.Name == nameof(SuperAdminAttribute)).Any();
            if (hasSuperAdminFilter)
            {
                if (operation.Parameters == null)
                    operation.Parameters = new List<OpenApiParameter>();
                var userIdParam = new OpenApiParameter
                {
                    Name = "userid",
                    In = ParameterLocation.Header,
                    Description = "user id",
                    Required = true,
                };
                operation.Parameters.Add(userIdParam);
            }
            var hasJobFilter = serviceFilters.Where(x => x.ServiceType.Name == nameof(SchedulerJobAttribute)).Any();
            if (hasJobFilter)
            {
                if (operation.Parameters == null)
                    operation.Parameters = new List<OpenApiParameter>();
                var appIdParam = new OpenApiParameter
                {
                    Name = "appid",
                    In = ParameterLocation.Header,
                    Description = "external app id",
                    Required = true,
                };
                operation.Parameters.Add(appIdParam);
            }
            bool hasAuthFilter = serviceFilters.Where(x => x.ServiceType.Name == nameof(AuthAttribute)).Any();
            if (hasAuthFilter)
            {
                if (operation.Parameters == null)
                    operation.Parameters = new List<OpenApiParameter>();
                var userIdParam = new OpenApiParameter
                {
                    Name = "userid",
                    In = ParameterLocation.Header,
                    Description = "user id",
                    Required = true,
                };

                operation.Parameters.Add(userIdParam);
                var tokenParam = new OpenApiParameter
                {
                    Name = "token",
                    In = ParameterLocation.Header,
                    Description = "token",
                    Required = true
                };
                operation.Parameters.Add(tokenParam);
            }
        }
    }
}
