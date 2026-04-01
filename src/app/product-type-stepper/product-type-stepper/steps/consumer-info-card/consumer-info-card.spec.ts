import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerInfoCard } from './consumer-info-card';

describe('ConsumerInfoCard', () => {
  let component: ConsumerInfoCard;
  let fixture: ComponentFixture<ConsumerInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
