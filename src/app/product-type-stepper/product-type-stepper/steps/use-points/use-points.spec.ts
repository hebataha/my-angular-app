import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsePoints } from './use-points';

describe('UsePoints', () => {
  let component: UsePoints;
  let fixture: ComponentFixture<UsePoints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsePoints]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsePoints);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
