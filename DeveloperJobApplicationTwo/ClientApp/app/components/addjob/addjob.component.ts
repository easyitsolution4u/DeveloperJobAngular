import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
 
import { IIndustryType, ICompanyType, IJobType } from '../../model/IndustryType';

import { DeveloperJob, CompanyAddress } from '../../model/developerjob';

import { DeveloperJobDataService } from '../../services/developerjob.dataservice';

import { IUsState, UsStates } from '../../resources/usStates';

import { Country, countries } from '../../resources/countries';




@Component({
    selector: 'add-job',
    templateUrl: './addjob.component.html',
    styleUrls: ['./addjob.component.css'],

    providers: [DeveloperJobDataService]
})



export class AddjobComponent {

    public usStates: IUsState[] = UsStates;
    public countries: Country[] = countries;
    public industryTypes: IIndustryType[];
    public jobTypes: IJobType[];
    public companyTypes: ICompanyType[];
    public devJob: DeveloperJob = this.initializeDeveloperJob();



   private initializeDeveloperJob() {

       return new DeveloperJob(
          0, "", "", new CompanyAddress(0, "", "", "", "", "", ""), "", false, false, 0, "", 0, 0,0,"");
   }
    constructor(
        private dataService: DeveloperJobDataService,
        private router: Router
    ) {


        console.log(this.countries);
        this.dataService.getAllIndustryTypes()
            .subscribe(result => {
                this.industryTypes = result.json() as IIndustryType[];
                console.log(this.industryTypes);
            }, error => console.error(error));


        this.dataService.getAllCompanyTypes()
            .subscribe(result => {
                this.companyTypes = result.json() as ICompanyType[];
                console.log(this.companyTypes);
            }, error => console.error(error));


        this.dataService.getAllJobTypes()
            .subscribe(result => {
                this.jobTypes = result.json() as IJobType[];
                console.log(this.jobTypes);
            }, error => console.error(error));
   }


    onSubmit() {
        console.log(this.devJob);

        if (this.devJob && this.devJob.jobTitle && this.devJob.jobTitle.length > 0) {

            this.dataService.saveDeveloperJob(this.devJob)
                .subscribe(resp => {

                    if (resp.ok) {

                        var jobId = resp.json().id;
                        alert("Developer job saved successfully with jobId : " + jobId);

                        this.router.navigate(['/view-job']);

                    }

                }, error => {

                    console.log(error);
                });
        }
        
    }

   
}
