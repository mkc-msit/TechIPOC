import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IJob } from '../job';
import { JobServiceService } from '../job-service.service';
import { StatusIconPipe } from '../status-icon.pipe';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
title: string = "Tech POC Jobs";
jobs: IJob[];
constructor (private _jobService: JobServiceService) {}
  ngOnInit() {
    this.jobs = this._jobService.getJobs();
    console.log("JobListComponent init", this.jobs);    
  }

}
