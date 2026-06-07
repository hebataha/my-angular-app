import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPopup } from './product-popup';

describe('ProductPopup', () => {
  let component: ProductPopup;
  let fixture: ComponentFixture<ProductPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
