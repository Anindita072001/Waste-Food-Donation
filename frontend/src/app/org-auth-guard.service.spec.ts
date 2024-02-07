import { TestBed } from '@angular/core/testing';

import { OrgAuthGuardService } from './org-auth-guard.service';

describe('OrgAuthGuardService', () => {
  let service: OrgAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
