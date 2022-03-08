import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpProxyService {
  private headers: any;

  constructor(private http: HttpClient) {
    this.headers = {
      headers: {
        ContentType: 'application/json',
      },
    };
  }

  post(resource: string, body: any): Observable<any> {
    return this.http.post(
      `${environment.api}/ws${resource}`,
      body,
      this.headers
    );
  }
}
