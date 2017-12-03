using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DeveloperJobApplicationTwo.DB;
using DeveloperJobApplicationTwo.Model;
using DeveloperJobApplicationTwo.ViewModel;

namespace DeveloperJobApplicationTwo.Controllers
{
    [Produces("application/json")]
    [Route("api/DeveloperJobs")]
    public class DeveloperJobsController : Controller
    {
        private readonly DeveloperJobContext _context;

        public DeveloperJobsController(DeveloperJobContext context)
        {
            _context = context;
        }

        // GET: api/DeveloperJobs
        [HttpGet]
        public IEnumerable<DeveloperJobView> GetDeveloperJobs()
        {
            return _context.DeveloperJobs
                    .Include(job => job.CompanyAddress)
                    .Include(job => job.JobType)
                    .Include(job => job.Industry)
                    .Include(job => job.CompanyType)
                    .Select(job => new DeveloperJobView
                    {
                        DeveloperJobId = job.Id,
                        CompanyAddress = job.CompanyAddress,
                        CompanyName = job.CompanyName,
                        CompanySize = job.CompanySize,
                        CompanyTypName = job.CompanyType.Name,
                        ExperienceLevel = job.ExperienceLevel,
                        IndustryName = job.Industry.Name,
                        JobTitle = job.JobTitle,
                        JobTypeName = job.JobType.Name,
                        SalaryRange = job.SalaryRange,
                        CreatedDate = job.CreatedDate.Value

                    })

                    .OrderByDescending(job => job.CreatedDate);
                    ;

               
        }

        // GET: api/DeveloperJobs/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDeveloperJob([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var developerJob = await _context.DeveloperJobs.SingleOrDefaultAsync(m => m.Id == id);

            if (developerJob == null)
            {
                return NotFound();
            }

            return Ok(developerJob);
        }

        // PUT: api/DeveloperJobs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeveloperJob([FromRoute] int id, [FromBody] DeveloperJob developerJob)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != developerJob.Id)
            {
                return BadRequest();
            }

            _context.Entry(developerJob).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeveloperJobExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DeveloperJobs
        [HttpPost]
        public async Task<IActionResult> PostDeveloperJob([FromBody] DeveloperJob developerJob)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            developerJob.IsActive = true;
            developerJob.CreatedDate = DateTime.Now;

            _context.DeveloperJobs.Add(developerJob);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDeveloperJob", new { id = developerJob.Id }, developerJob);
        }

        // DELETE: api/DeveloperJobs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeveloperJob([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var developerJob = await _context.DeveloperJobs.SingleOrDefaultAsync(m => m.Id == id);
            if (developerJob == null)
            {
                return NotFound();
            }

            _context.DeveloperJobs.Remove(developerJob);

            
            await _context.SaveChangesAsync();

            return Ok(developerJob);
        }

        private bool DeveloperJobExists(int id)
        {
            return _context.DeveloperJobs.Any(e => e.Id == id);
        }
    }
}