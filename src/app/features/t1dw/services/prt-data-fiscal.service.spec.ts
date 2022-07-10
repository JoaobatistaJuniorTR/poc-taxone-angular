import { TestBed } from '@angular/core/testing';

import { PrtDataFiscalService } from './prt-data-fiscal.service';

describe('PrtDataFiscalService', () => {
  let service: PrtDataFiscalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrtDataFiscalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
