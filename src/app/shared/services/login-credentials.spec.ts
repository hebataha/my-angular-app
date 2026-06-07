import { TestBed } from '@angular/core/testing';

import { LoginCredentials } from './login-credentials';

describe('LoginCredentials', () => {
  let service: LoginCredentials;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCredentials);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
