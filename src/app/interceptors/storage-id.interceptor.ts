import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from '../core/services/storage.service';

@Injectable()
export class StorageIdInterceptor implements HttpInterceptor {
  constructor(private storage: StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const storageId = this.storage.getItem(environment.storageIdKey);
    if (!storageId) {
      const { body } = request;
      if (typeof body === 'object') {
        const data = {
          ...body,
          storageId,
        };

        const requestWithStorageId = request.clone({
          body: data,
        });

        return next.handle(requestWithStorageId);
      }
    }

    return next.handle(request);
  }
}
