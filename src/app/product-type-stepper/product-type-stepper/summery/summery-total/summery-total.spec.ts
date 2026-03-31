import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryTotal } from './summery-total';

describe('SummeryTotal', () => {
  let component: SummeryTotal;
  let fixture: ComponentFixture<SummeryTotal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummeryTotal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummeryTotal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
