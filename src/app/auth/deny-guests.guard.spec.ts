import { TestBed } from '@angular/core/testing';

import { DenyGuestsGuard } from './deny-guests.guard';

describe('DenyGuestsGuard', () => {
  let guard: DenyGuestsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DenyGuestsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
