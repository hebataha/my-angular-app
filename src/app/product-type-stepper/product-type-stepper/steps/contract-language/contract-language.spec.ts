import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractLanguage } from './contract-language';

describe('ContractLanguage', () => {
  let component: ContractLanguage;
  let fixture: ComponentFixture<ContractLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractLanguage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
