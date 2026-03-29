import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupOptions } from './setup-options';

describe('SetupOptions', () => {
  let component: SetupOptions;
  let fixture: ComponentFixture<SetupOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
