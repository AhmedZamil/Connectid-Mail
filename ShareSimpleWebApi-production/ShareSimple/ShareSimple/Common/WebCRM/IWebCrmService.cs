using Microsoft.AspNetCore.Http;
using ShareSimple.Models;
using System;

namespace ShareSimple.Common.WebCRM
{
    public interface IWebCrmService
    {
        int? AddOrganisation(Company company, HttpContext httpContext = null, Guid? userId = null);
        int? UpdateOrganisation(Company company, HttpContext httpContext = null, Guid? userId = null);
        int? UpdateOrganisationStatus(Company company, string status, HttpContext httpContext = null, Guid? userId = null);
        int? AddPerson(int organisationId, User user, HttpContext httpContext = null, Guid? userId = null);
        int? UpdatePerson(int organisationId, User user, HttpContext httpContext = null, Guid? userId = null);
    }
}
