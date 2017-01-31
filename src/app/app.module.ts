import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobTypeActionsComponent } from './job-type-actions/job-type-actions.component';
import { StatusIconPipe } from './status-icon.pipe';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { JobServiceService } from './job-service.service';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobTypeActionsComponent,
    StatusIconPipe,
    ModalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'joblist', component: JobListComponent },
      { path: 'job/:id', component: ModalFormComponent },
      { path: '', redirectTo: 'joblist', pathMatch: 'full' },
      { path: '**', redirectTo: 'joblist', pathMatch: 'full' }
    ]),
  ],
  providers: [JobServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
