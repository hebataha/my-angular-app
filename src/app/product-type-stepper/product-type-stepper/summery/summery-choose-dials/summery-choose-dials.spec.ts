import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryChooseDials } from './summery-choose-dials';

describe('SummeryChooseDials', () => {
  let component: SummeryChooseDials;
  let fixture: ComponentFixture<SummeryChooseDials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummeryChooseDials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummeryChooseDials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
