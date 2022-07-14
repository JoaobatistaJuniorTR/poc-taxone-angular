import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../model/interface.model';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root'
})
export class CanalDistribuicaoService extends ServiceBase {
  private readonly API_ENDPOINT;

  constructor(private http: HttpClient) {
    super();
    this.API_ENDPOINT = `${environment.contextT1dw}/canaisDistribuicao`;
  }

  autocomplete(filter: string, pagination: Pagination): Promise<any[]> {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        filter: filter || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http.get<any[]>(`${this.API_ENDPOINT}/suggestions`, httpOptions).toPromise();
  }

  public findByCodigo(codigo: string): Promise<any> {
    const httpOptions = {
      headers: this.httpHeaders,
    };

    return this.http.get<any>(`${this.API_ENDPOINT}/${codigo}`, httpOptions).toPromise();
  }
}
