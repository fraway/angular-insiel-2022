import { TestBed } from '@angular/core/testing';

import { AuthNgrxService } from './auth-ngrx.service';

describe('AuthNgrxService', () => {
  let service: AuthNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
