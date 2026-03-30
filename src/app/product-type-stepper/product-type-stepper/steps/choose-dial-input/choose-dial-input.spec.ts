import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDialInput } from './choose-dial-input';

describe('ChooseDialInput', () => {
  let component: ChooseDialInput;
  let fixture: ComponentFixture<ChooseDialInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseDialInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseDialInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
