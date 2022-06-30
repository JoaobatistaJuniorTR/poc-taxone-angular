import { TestBed } from '@angular/core/testing';

import { TempTableService } from './temp-table.service';

describe('TempTableService', () => {
  let service: TempTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
