import { TestBed } from '@angular/core/testing';

import { ExampleGridService } from './example-grid.service';

describe('ExampleGridService', () => {
  let service: ExampleGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
