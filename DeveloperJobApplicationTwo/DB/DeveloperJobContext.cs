using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeveloperJobApplicationTwo.Model;
using Microsoft.EntityFrameworkCore;

namespace DeveloperJobApplicationTwo.DB
{
    public class DeveloperJobContext : DbContext
    {



        public DbSet<DeveloperJob> DeveloperJobs { get; set; }
        public DbSet<CompanyType> CompanyTypes { get; set; }
        public DbSet<Industry> Industries { get; set; }
        public DbSet<JobType> JobTypes { get; set; }


        public DeveloperJobContext(DbContextOptions<DeveloperJobContext> developerContextOptions) 
            : base(developerContextOptions) { }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

    }
}
