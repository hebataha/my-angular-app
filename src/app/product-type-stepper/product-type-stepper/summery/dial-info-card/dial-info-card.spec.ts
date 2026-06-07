import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialInfoCard } from './dial-info-card';

describe('DialInfoCard', () => {
  let component: DialInfoCard;
  let fixture: ComponentFixture<DialInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
