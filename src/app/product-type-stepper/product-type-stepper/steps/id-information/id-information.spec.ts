import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdInformation } from './id-information';

describe('IdInformation', () => {
  let component: IdInformation;
  let fixture: ComponentFixture<IdInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
