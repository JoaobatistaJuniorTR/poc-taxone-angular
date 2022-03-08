import { TestBed } from '@angular/core/testing';

import { ManagerBarInfoService } from './manager-bar-info.service';

describe('ManagerBarInfoService', () => {
  let service: ManagerBarInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerBarInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
