import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class PessoaService extends ServiceBase {
  private readonly API_ENDPOINT = `${environment.contextT1dw}/pessoas`;

  constructor(private http: HttpClient) {
    super();
  }
}
