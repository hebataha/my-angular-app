import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialPatternContainer } from './dial-pattern-container';

describe('DialPatternContainer', () => {
  let component: DialPatternContainer;
  let fixture: ComponentFixture<DialPatternContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialPatternContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialPatternContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
