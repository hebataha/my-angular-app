import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Summery } from './summery';

describe('Summery', () => {
  let component: Summery;
  let fixture: ComponentFixture<Summery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Summery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Summery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
