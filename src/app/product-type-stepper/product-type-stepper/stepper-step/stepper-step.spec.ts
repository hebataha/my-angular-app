import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperStep } from './stepper-step';

describe('StepperStep', () => {
  let component: StepperStep;
  let fixture: ComponentFixture<StepperStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperStep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperStep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
