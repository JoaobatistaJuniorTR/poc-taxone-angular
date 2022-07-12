import { TestBed } from '@angular/core/testing';

import { NaturezaOperacaoService } from './natureza-operacao.service';

describe('NaturezaOperacaoService', () => {
  let service: NaturezaOperacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturezaOperacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
