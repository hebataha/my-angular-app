import { TestBed } from '@angular/core/testing';

import { ReservedDials } from './reserved-dials';

describe('ReservedDials', () => {
  let service: ReservedDials;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservedDials);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
