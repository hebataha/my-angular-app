import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialCardAdvanced } from './dial-card-advanced';

describe('DialCardAdvanced', () => {
  let component: DialCardAdvanced;
  let fixture: ComponentFixture<DialCardAdvanced>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialCardAdvanced]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialCardAdvanced);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
