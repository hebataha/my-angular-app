import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryTotalDetails } from './summery-total-details';

describe('SummeryTotalDetails', () => {
  let component: SummeryTotalDetails;
  let fixture: ComponentFixture<SummeryTotalDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummeryTotalDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummeryTotalDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
