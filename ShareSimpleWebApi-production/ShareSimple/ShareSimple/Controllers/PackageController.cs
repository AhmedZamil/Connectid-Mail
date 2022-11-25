using Microsoft.AspNetCore.Mvc;
using ShareSimple.Interface;
using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Controllers
{
    [Produces("application/json")]
    [Route("api/package")]
    public class PackageController : Controller
    {
        private readonly IPackageRepository _packageRepository;
        public PackageController(IPackageRepository packageRepository)
        {
            _packageRepository = packageRepository;
        }

        // GET: api/package
        [HttpGet]
        public async Task<IEnumerable<Package>> Get()
        {
            return await _packageRepository.GetPackages();
        }

        // GET: api/package/5
        [HttpGet("{id}")]
        public async Task<Package> Get(Guid id)
        {
            return await _packageRepository.GetPackageById(id);
        }

        // POST: api/package
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Package package)
        {
            if (package.Id == Guid.Empty || package.Id == null)
                package.Id = Guid.NewGuid();

            _packageRepository.InsertPackage(package);
            await _packageRepository.Save();

            return Ok("Save succesfully");
        }

        // PUT: api/package/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, [FromBody]Package package)
        {
            _packageRepository.UpdatePackage(package);
            await _packageRepository.Save();

            return Ok("Update succesfully");
        }

        // DELETE: api/package/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            _packageRepository.DeletePackage(id);
            await _packageRepository.Save();

            return Ok("Deleted succesfully");
        }
    }
}
