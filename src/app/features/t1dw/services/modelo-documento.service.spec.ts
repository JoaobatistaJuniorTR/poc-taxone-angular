import { TestBed } from '@angular/core/testing';

import { ModeloDocumentoService } from './modelo-documento.service';

describe('ModeloDocumentoService', () => {
  let service: ModeloDocumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeloDocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
