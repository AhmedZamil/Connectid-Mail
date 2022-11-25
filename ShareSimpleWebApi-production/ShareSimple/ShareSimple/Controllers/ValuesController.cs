using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ShareSimple.Common;
using ShareSimple.Common.eConomic;
using ShareSimple.Common.WebCRM;
using ShareSimple.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ShareSimple.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly ShareSimpleConfiguration _configuration;
        private IHostingEnvironment _env;
        private readonly IWebCrmService _webCrmService;
        private readonly IEconomicService _economicService;
        private readonly ICompanyRepository _companyRepository;
        private readonly IUserRepository _userRepository;
        private readonly IInvoiceRepository _invoiceRepository;
        public ValuesController(ShareSimpleConfiguration configuration, IHostingEnvironment env,
            IWebCrmService webCrmService, IEconomicService economicService,
            ICompanyRepository companyRepository, IUserRepository userRepository,
            IInvoiceRepository invoiceRepository
            )
        {
            _configuration = configuration;
            _env = env;
            _webCrmService = webCrmService;
            _economicService = economicService;
            _companyRepository = companyRepository;
            _userRepository = userRepository;
            _invoiceRepository = invoiceRepository;
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/clientId
        [HttpGet("{key}")]
        public string Get(string key)
        {
            var azureAdClientSettings = _configuration.GetSection("AzureAdClientSettings");
            return azureAdClientSettings.GetValue<string>(key);
        }
        [HttpGet("config/{section}")]
        public object GetConfig(string section)
        {
            var settings = _configuration.GetSection(section);
            var values = new Dictionary<string, object>();
            foreach (var setting in settings.AsEnumerable())
            {
                if (setting.Key.ToLower() != section.ToLower())
                {
                    var key = setting.Key.Replace($"{section}:", "", System.StringComparison.InvariantCultureIgnoreCase);
                    var firstChar = key.Substring(0, 1).ToLower();
                    key = firstChar + key.Substring(1);
                    values.Add(key, setting.Value);
                }
            }
            return values;
        }
        [HttpGet("config/{section}/{key}")]
        public object GetConfig(string section, string key)
        {
            var settings = _configuration.GetSection(section);
            return settings.GetValue<object>(key);
        }
        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
