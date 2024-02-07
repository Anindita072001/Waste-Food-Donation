import { TestBed } from '@angular/core/testing';

import { AuthHomeGuardService } from './auth-home-guard.service';

describe('AuthHomeGuardService', () => {
  let service: AuthHomeGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHomeGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
