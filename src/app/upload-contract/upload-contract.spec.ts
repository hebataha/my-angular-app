import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadContract } from './upload-contract';

describe('UploadContract', () => {
  let component: UploadContract;
  let fixture: ComponentFixture<UploadContract>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadContract]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadContract);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
