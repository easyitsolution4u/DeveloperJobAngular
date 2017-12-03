using System;

namespace DeveloperJobApplicationTwo.Model
{
    public class CompanyType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public DateTime? CreatedDate { get; set; }
       
    }
}