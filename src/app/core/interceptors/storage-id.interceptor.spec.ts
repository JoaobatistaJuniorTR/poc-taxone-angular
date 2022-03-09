import { TestBed } from '@angular/core/testing';

import { StorageIdInterceptor } from './storage-id.interceptor';

describe('StorageIdInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [StorageIdInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: StorageIdInterceptor = TestBed.inject(StorageIdInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
