import { Component, OnInit, Input } from '@angular/core';
import { IJob } from '../job';
import { Router, ActivatedRoute } from '@angular/router';
import { JobServiceService } from '../job-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-modal-form',
    templateUrl: './modal-form.component.html',
    styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

    //@Input() job: IJob
    // ngOnInit() {
    // }
    private sub: Subscription;
    job: IJob;
    freqTypes: string[]
    executionTypes: string[]
    title: string
    freqError: boolean
    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _jobService: JobServiceService) {
    }
    onSave(): void {
        var result = this._jobService.save(this.job);
        if (result) {
            this._router.navigate(['/joblist']);
        }
    }
    onCancel(): void {
        this._router.navigate(['/joblist']);

    }
    onFrequencyBlur(event):void{
        this.freqError  =  this.job.frequency === "default";
        console.log(event, this.job.frequency)
    }
    ngOnInit(): void {
        this.freqTypes = this._jobService.getFrequecies();
        this.executionTypes = this._jobService.getExecutionTypes();
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.job = JSON.parse(JSON.stringify(this._jobService.getJob(id)));
            });
        this.title= this.job.jobName;
    }
}
