using Microsoft.AspNetCore.Mvc;
using ShareSimple.Common;
using ShareSimple.Filters;
using ShareSimple.Interface;
using ShareSimple.Models;
using ShareSimple.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Controllers
{
    [Produces("application/json")]
    [Route("api/config")]
    public class StorageConfigController : Controller
    {
        private readonly IStorageConfigRepository _StorageConfigRepository;
        private readonly ShareSimpleConfiguration _configuration;
        public StorageConfigController(
            IStorageConfigRepository StorageConfigRepository,
            ShareSimpleConfiguration configuration)
        {
            _StorageConfigRepository = StorageConfigRepository;
            _configuration = configuration;
        }

        // GET: api/StorageConfig
        [HttpGet]
        public async Task<IEnumerable<StorageConfig>> Get()
        {
            return await _StorageConfigRepository.GetStorageConfigs();
        }

        // GET: api/StorageConfig/5
        [HttpGet("{id}")]
        public async Task<StorageConfig> Get(Guid id)
        {
            return await _StorageConfigRepository.GetStorageConfigById(id);
        }
        [HttpGet("company/{companyid}")]
        public async Task<IActionResult> GetByCompId(Guid companyid)
        {
            var storagedata = new StorageConfig();
            var storageConfigModel = new StorageConfigModel();
            storagedata = await _StorageConfigRepository.GetStorageConfigByCompId(companyid);
            if (storagedata == null)
            {
                storageConfigModel.ConfigFileAvailability = _configuration.RequestedFileLife;
            }
            else
            {
                storageConfigModel.Id = storagedata.Id;
                storageConfigModel.FileAvailability = storagedata.FileAvailability;
                storageConfigModel.CompanyId = storagedata.CompanyId;
                storageConfigModel.ConfigFileAvailability = _configuration.RequestedFileLife;
            }
            return Json(storageConfigModel);
        }

        // POST: api/StorageConfig
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]StorageConfig StorageConfig)
        {
            if (StorageConfig.Id == Guid.Empty || StorageConfig.Id == null)
            {
                StorageConfig.Id = Guid.NewGuid();
            }

            _StorageConfigRepository.InsertStorageConfig(StorageConfig);
            await _StorageConfigRepository.Save();

            return Json(StorageConfig);
        }

        // PUT: api/StorageConfig/5
        [HttpPut("{id}")]
        [ServiceFilter(typeof(AuthAttribute))]
        public async Task<IActionResult> Put(Guid id, [FromBody]StorageConfig StorageConfig)
        {
            if (StorageConfig.Id == Guid.Empty || StorageConfig.Id == null)
            {
                StorageConfig.Id = Guid.NewGuid();
                _StorageConfigRepository.InsertStorageConfig(StorageConfig);
                await _StorageConfigRepository.Save();
            }
            else
            {
                var config = await _StorageConfigRepository.GetStorageConfigById(StorageConfig.Id);
                config.FileAvailability = StorageConfig.FileAvailability;
                try
                {
                    _StorageConfigRepository.UpdateStorageConfig(config);
                    await _StorageConfigRepository.Save();
                }
                catch (Exception ex)
                {

                }
            }
            return Ok("Update succesfully");
        }

        // DELETE: api/StorageConfig/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            _StorageConfigRepository.DeleteStorageConfig(id);
            await _StorageConfigRepository.Save();

            return Ok("Deleted succesfully");
        }
    }
}
