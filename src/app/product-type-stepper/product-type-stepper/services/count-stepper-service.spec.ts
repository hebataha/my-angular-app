import { TestBed } from '@angular/core/testing';

import { CountStepperService } from './count-stepper-service';

describe('CountStepperService', () => {
  let service: CountStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
