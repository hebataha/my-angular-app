import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimNumber } from './sim-number';

describe('SimNumber', () => {
  let component: SimNumber;
  let fixture: ComponentFixture<SimNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimNumber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimNumber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
