import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IJob} from '../job';
@Component({
  selector: 'job-type-actions',
  templateUrl: './job-type-actions.component.html',
  styleUrls: ['./job-type-actions.component.css']
})
export class JobTypeActionsComponent implements OnInit {

  constructor() { }
@Input() job: any
@Output() onEditClicked: EventEmitter<string> =
        new EventEmitter<string>();
  ngOnInit() {
  }

}
