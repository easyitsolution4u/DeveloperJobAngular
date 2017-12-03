
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { DeveloperJob } from  '../model/developerjob';

@Injectable()
export class DeveloperJobDataService {


    private baseUrl: string = "http://localhost:51626/api/";
    constructor(private http: Http) {

    }


    public saveDeveloperJob(developerJob: DeveloperJob) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "DeveloperJobs", developerJob, options);
    }


    public removeDeveloperJob(jobId: number) {

        let url = this.baseUrl + "DeveloperJobs/" + jobId;
        return this.http.delete(url);
    }

    public getAllIndustryTypes() {
        return this.http.get(this.baseUrl + "Industries");
    }

    public getAllCompanyTypes() {
        return this.http.get(this.baseUrl + "CompanyTypes");
    }

    public getAllJobTypes() {
        return this.http.get(this.baseUrl + "JobTypes");
    }


    public getAllDeveloperJobs() {
        return this.http.get(this.baseUrl + "DeveloperJobs");
    }


    
}
