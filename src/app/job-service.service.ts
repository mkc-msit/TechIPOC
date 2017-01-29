import { Injectable } from '@angular/core';
import { IJob } from './job';

@Injectable()
export class JobServiceService {
    jobList: string = `[{
    "sourceApp": "Command",
    "jobId": "12345",
    "jobName": "Daily Tickets Command to ViewPoint1",
    "lastRunDate": "12/12/2016 11:43:45 AM",
    "frequency": "Daily",
    "executionType": "Scheduled",
    "currentStatus": "Success"
},
{
    "sourceApp": "ViewPoint",
    "jobId": "12346",
    "jobName": "Daily Tickets Command to ViewPoint2",
    "lastRunDate": "12/12/2016 11:43:45 AM",
    "frequency": "Weekly",
    "executionType": "Scheduled",
    "currentStatus": "On-hold"
},
{
    "sourceApp": "JWS",
    "jobId": "12347",
    "jobName": "Daily Tickets Command to ViewPoint3",
    "lastRunDate": "12/12/2016 11:43:45 AM",
    "frequency": "Monthly",
    "executionType": "Manual",
    "currentStatus": "Failed"
}
]`;
    jobs: IJob[];
    constructor() { }
    
     allJobs(): IJob[] {
        if (this.jobs && this.jobs.length) {
            return this.jobs;
        }
        else {
            this.jobs = <IJob[]>JSON.parse(this.jobList);
            return this.jobs;

        }
    }
    getJobs(): IJob[] {
        return this.allJobs();
    }

    getJob(id: number): IJob {
        return this.allJobs().find(job => job.jobId == id);
    }

    getFrequecies(): string[] {
        return ["Daily", "Weekly", "Monthly"];
    }
    getExecutionTypes(): string[] {
        return ["Manual", "Scheduled"];
    }
    save(job: IJob): boolean {
        this.jobs = this.allJobs().map(
            j => {
                if (j.jobId == job.jobId) {
                    j.jobName = job.jobName;
                    j.frequency = job.frequency;
                    j.executionType = job.executionType;
                }
                return j;
            }
        )
        return true;
    }
}
