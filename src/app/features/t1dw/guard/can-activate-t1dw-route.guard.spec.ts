import { TestBed } from '@angular/core/testing';

import { CanActivateT1dwRouteGuard } from './can-activate-t1dw-route.guard';

describe('CanActivateT1dwRouteGuard', () => {
  let guard: CanActivateT1dwRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateT1dwRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
