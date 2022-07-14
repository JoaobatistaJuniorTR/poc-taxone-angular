import { TestBed } from '@angular/core/testing';

import { CanalDistribuicaoService } from './canal-distribuicao.service';

describe('CanalDistribuicaoService', () => {
  let service: CanalDistribuicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanalDistribuicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
