import { TestBed } from '@angular/core/testing';

import { GridFilterService } from './grid-filter.service';

describe('GridFilterService', () => {
  let service: GridFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
