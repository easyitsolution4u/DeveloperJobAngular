import { Component } from '@angular/core';

import { DeveloperJobView } from '../../model/developerjob';
import { DeveloperJobDataService } from '../../services/developerjob.dataservice';





@Component({
    selector: 'add-job',
    templateUrl: './viewjob.component.html',
    styleUrls: ['./viewjob.component.css'],

})



export class ViewjobComponent {

    public developerJobs: DeveloperJobView[];

    constructor(private devDataService: DeveloperJobDataService) {

        this.bindDeveloperJob();
    }


    deleteDeveloperJob(jobId: number) {


        if (jobId && jobId > 0) {
            let message = window.confirm("Are you sure, you want to delete this record ?");
            if (message == true) {

                this.devDataService.removeDeveloperJob(jobId).subscribe(result => {
                    
                    if (result.ok) {
                        alert("record deleted successfuly");

                        this.bindDeveloperJob();
                    }
                }, error => console.error(error));
            }

        }
    }


    private bindDeveloperJob() {

        this.devDataService.getAllDeveloperJobs()
            .subscribe(result => {
                this.developerJobs = result.json() as DeveloperJobView[];
                console.log(this.developerJobs);
            }, error => console.error(error));
    }

   
}