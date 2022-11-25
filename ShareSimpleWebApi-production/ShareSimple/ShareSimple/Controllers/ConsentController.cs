using Microsoft.AspNetCore.Mvc;
using ShareSimple.Common;
using ShareSimple.Common.Enums;
using ShareSimple.Filters;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Controllers
{
    [Produces("application/json")]
    [Route("api/consent")]
    public class ConsentController : Controller
    {
        private readonly IConsentRepository _consentRepository;
        private readonly ISurveillanceRepository _surveillanceRepository;
        public ConsentController(IConsentRepository consentRepository, ISurveillanceRepository surveillanceRepository)
        {
            _consentRepository = consentRepository;
            _surveillanceRepository = surveillanceRepository;
        }

        // GET: api/package
        [HttpGet("{companyId}")]
        public async Task<IEnumerable<Consent>> Get(Guid companyId)
        {
            return await _consentRepository.GetConsents(companyId);
        }

        // GET: api/package/5
        [HttpGet("type/{companyId}/{type}")]
        public async Task<Consent> GetByType(Guid companyId, string type)
        {
            return await _consentRepository.GetConsentByType(companyId, type);
        }
        // POST: api/package
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Consent consent)
        {
            if (consent.Id == Guid.Empty || consent.Id == null)
                consent.Id = Guid.NewGuid();
            _surveillanceRepository.Info(HttpContext, null, ActionType.Consent, $"A new consent information is going to be added");
            if (consent.IsActive == true)
            {
                var consents = await _consentRepository.GetConsentsByType(consent.CompanyId, consent.Type);
                foreach (var c in consents)
                {
                    c.IsActive = false;
                    _consentRepository.UpdateConsent(c);
                    await _consentRepository.Save();
                }
                _surveillanceRepository.Warning(HttpContext, null, ActionType.Consent, $"Previous consent of type { consent?.Type} set to inactive for company id {consent?.CompanyId}");
            }
            consent.Created = DateTime.UtcNow;
            _consentRepository.InsertConsent(consent);
            await _consentRepository.Save();
            _surveillanceRepository.EntityAdded(HttpContext, null, "Consent", consent);
            _surveillanceRepository.Info(HttpContext, null, ActionType.Consent, $"A new consent of type { consent?.Type} is added for company id {consent?.CompanyId}");
            return Ok("Save succesfully");
        }

        // PUT: api/package/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, [FromBody]Consent consent)
        {
            var consentObj = await _consentRepository.GetConsentById((Guid)consent.Id);
            _surveillanceRepository.Info(HttpContext, null, ActionType.Consent, $"A consent information is going to be updated");
            if (consent.IsActive == true)
            {
                var consents = await _consentRepository.GetConsentsByType(consent.CompanyId, consent.Type);
                foreach (var c in consents)
                {
                    c.IsActive = false;
                    _consentRepository.UpdateConsent(c);
                    await _consentRepository.Save();
                }
                _surveillanceRepository.Warning(HttpContext, null, ActionType.Consent, $"Previous consent of type { consent?.Type} set to inactive for company id {consent?.CompanyId}");
            }
            //else if ((consentObj.IsActive == true) && (consent.IsActive == false))
            //{
            //    var consents = await _consentRepository.GetConsentsByType(consent.CompanyId, consent.Type);
            //    var inactiveC = consents.Where(c => c.IsActive == false).ToList();
            //    if (inactiveC.Count == consents.Count() - 1)
            //        return Ok("Falied");
            //}

            try
            {
                consentObj.Name = consent.Name;
                consentObj.Type = consent.Type;
                consentObj.IsActive = consent.IsActive;
                consentObj.ConsentText = consent.ConsentText;
                consentObj.Updated = DateTime.UtcNow;

                _consentRepository.UpdateConsent(consentObj);
                await _consentRepository.Save();
                _surveillanceRepository.Info(HttpContext, null, ActionType.Consent, $"A consent of type { consent?.Type} is updated for company id {consent?.CompanyId}");
            }
            catch (Exception ex)
            {
                _surveillanceRepository.Error(HttpContext, null, $"Failed to update company consent info. Error: {ex.Message}", Severity.Low, ex, ActionType.Consent);
            }
            return Ok("Update succesfully");
        }

        // DELETE: api/package/5
        [ServiceFilter(typeof(AuthAttribute))]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            _consentRepository.DeleteConsent(id);
            await _consentRepository.Save();
            _surveillanceRepository.Info(HttpContext, null, ActionType.Consent, $"A consent of id '{id}' deleted successfully");
            return Ok("Deleted succesfully");
        }
    }
}
