import { TestBed } from '@angular/core/testing';

import { PrtNumDocfisServService } from './prt-num-docfis-serv.service';

describe('PrtNumDocfisServService', () => {
  let service: PrtNumDocfisServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrtNumDocfisServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
