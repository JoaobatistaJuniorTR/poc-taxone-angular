import { TestBed } from '@angular/core/testing';

import { LonestarService } from './lonestar.service';

describe('LonestarService', () => {
  let service: LonestarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LonestarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
