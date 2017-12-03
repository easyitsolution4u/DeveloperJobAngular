using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeveloperJobApplicationTwo.Model;

namespace DeveloperJobApplicationTwo.ViewModel
{
    public class DeveloperJobView
    {
        public int DeveloperJobId { get; set; }
        public string JobTitle { get; set; }
        public string CompanyName { get; set; }
        public virtual CompanyAddress CompanyAddress { get; set; }
        public string SalaryRange { get; set; }
        public string JobTypeName { get; set; }
        public string ExperienceLevel { get; set; }
        public string IndustryName { get; set; }
        public int CompanySize { get; set; }
        public string CompanyTypName { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsNewJob
        {

            get
            {

                var dateDiffInSeconds = (DateTime.Now.Subtract(this.CreatedDate)).TotalSeconds;
                return dateDiffInSeconds < 60;
            }
        }
        

    }
}
