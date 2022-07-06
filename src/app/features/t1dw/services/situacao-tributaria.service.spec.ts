import { TestBed } from '@angular/core/testing';

import { SituacaoTributariaService } from './situacao-tributaria.service';

describe('SituacaoTributariaService', () => {
  let service: SituacaoTributariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SituacaoTributariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
