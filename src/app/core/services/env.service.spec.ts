import { TestBed } from '@angular/core/testing';
import { EnvService } from './env.service';

describe('EnvService', () => {
  let service: EnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return apiUrl', async () => {
    await service.init();
    expect(service.apiUrl).not.toBeNull();
  });
});
