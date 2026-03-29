import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDialOptions } from './choose-dial-options';

describe('ChooseDialOptions', () => {
  let component: ChooseDialOptions;
  let fixture: ComponentFixture<ChooseDialOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseDialOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseDialOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
