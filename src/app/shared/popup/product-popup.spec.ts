import { TestBed } from '@angular/core/testing';

import { ProductPopup } from './product-popup';

describe('ProductPopup', () => {
  let service: ProductPopup;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPopup);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
