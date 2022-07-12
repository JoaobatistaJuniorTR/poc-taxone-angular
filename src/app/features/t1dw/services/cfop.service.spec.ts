import { TestBed } from '@angular/core/testing';

import { CfopService } from './cfop.service';

describe('CfopService', () => {
  let service: CfopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
