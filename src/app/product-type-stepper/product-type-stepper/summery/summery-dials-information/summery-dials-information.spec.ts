import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryDialsInfornation } from './summery-dials-information';

describe('SummeryDialsInfornation', () => {
  let component: SummeryDialsInfornation;
  let fixture: ComponentFixture<SummeryDialsInfornation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummeryDialsInfornation]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SummeryDialsInfornation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
