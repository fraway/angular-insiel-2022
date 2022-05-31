import { TestBed } from '@angular/core/testing';

import { AuthRxService } from './auth-rx.service';

describe('AuthRxService', () => {
  let service: AuthRxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
