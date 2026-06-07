import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialInformation } from './dial-information';

describe('DialInformation', () => {
  let component: DialInformation;
  let fixture: ComponentFixture<DialInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
