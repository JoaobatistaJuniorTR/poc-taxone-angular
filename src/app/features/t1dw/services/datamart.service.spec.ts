import { TestBed } from '@angular/core/testing';

import { DatamartService } from './datamart.service';

describe('DatamartService', () => {
  let service: DatamartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
