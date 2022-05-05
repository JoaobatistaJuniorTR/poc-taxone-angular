import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'any',
})
export class HttpProxyService {
  private headers: any;

  constructor(
    @Inject(environment.contextProvider) private contextApp: string,
    private http: HttpClient,
    private envService: EnvService
  ) {
    this.headers = {
      headers: {
        ContentType: 'application/json',
      },
    };
  }

  post(resource: string, body: any): Observable<any> {
    return this.http.post(
      `${this.envService.apiUrl}${this.contextApp}${resource}`,
      body,
      this.headers
    );
  }
}
