import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryCardAdvanced } from './summery-card-advanced';

describe('SummeryCardAdvanced', () => {
  let component: SummeryCardAdvanced;
  let fixture: ComponentFixture<SummeryCardAdvanced>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummeryCardAdvanced]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummeryCardAdvanced);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
