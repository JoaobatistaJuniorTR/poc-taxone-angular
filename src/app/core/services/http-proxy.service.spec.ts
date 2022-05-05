import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpProxyService } from './http-proxy.service';

describe('HttpProxyService', () => {
  let service: HttpProxyService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpProxyService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('post testing', () => {
    service.post('/url', { company: '001' }).subscribe((response) => console.log(response));
    const request = controller.expectOne('undefined/ws/url');
  });
});
