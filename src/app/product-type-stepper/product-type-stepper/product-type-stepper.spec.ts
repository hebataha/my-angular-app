import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeStepper } from './product-type-stepper';

describe('ProductTypeStepper', () => {
  let component: ProductTypeStepper;
  let fixture: ComponentFixture<ProductTypeStepper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTypeStepper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTypeStepper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
