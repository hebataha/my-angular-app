import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialBox } from './dial-box';

describe('DialBox', () => {
  let component: DialBox;
  let fixture: ComponentFixture<DialBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
