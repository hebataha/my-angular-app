import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraAddons } from './extra-addons';

describe('ExtraAddons', () => {
  let component: ExtraAddons;
  let fixture: ComponentFixture<ExtraAddons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraAddons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraAddons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
