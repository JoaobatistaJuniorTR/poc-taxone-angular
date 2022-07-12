import { TestBed } from '@angular/core/testing';

import { InscricaoEstadualService } from './inscricao-estadual.service';

describe('InscricaoEstadualService', () => {
  let service: InscricaoEstadualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscricaoEstadualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
