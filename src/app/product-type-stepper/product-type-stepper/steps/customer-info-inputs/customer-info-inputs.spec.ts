import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoInputs } from './customer-info-inputs';

describe('CustomerInfoInputs', () => {
  let component: CustomerInfoInputs;
  let fixture: ComponentFixture<CustomerInfoInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerInfoInputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerInfoInputs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
