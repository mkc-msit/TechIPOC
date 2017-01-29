/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JobServiceService } from './job-service.service';

describe('JobServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobServiceService]
    });
  });

  it('should ...', inject([JobServiceService], (service: JobServiceService) => {
    expect(service).toBeTruthy();
  }));
});
