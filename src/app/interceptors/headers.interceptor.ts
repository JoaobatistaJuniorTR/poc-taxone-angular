import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  // eslint-disable-next-line class-methods-use-this
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes(environment.contextT1dw)) {
      const reqClone = request.clone({
        headers: request.headers.append('X-LoneStar-Product-FirmId', 'V9M'),
      });
      return next.handle(reqClone);
    }

    return next.handle(request);
  }
}
