import { TestBed } from '@angular/core/testing';

import { TributacaoInternaService } from './tributacao-interna.service';

describe('TributacaoInternaService', () => {
  let service: TributacaoInternaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TributacaoInternaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
