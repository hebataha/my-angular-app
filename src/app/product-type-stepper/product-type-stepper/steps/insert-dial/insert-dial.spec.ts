import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDial } from './insert-dial';

describe('InsertDial', () => {
  let component: InsertDial;
  let fixture: ComponentFixture<InsertDial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertDial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
