import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryCustomerInformation } from './summery-customer-information';

describe('SummeryCustomerInformation', () => {
  let component: SummeryCustomerInformation;
  let fixture: ComponentFixture<SummeryCustomerInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummeryCustomerInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummeryCustomerInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
