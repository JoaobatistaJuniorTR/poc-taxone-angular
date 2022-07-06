import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../model/interface.model';
import { TributacaoInterna } from '../model/tributacao-interna.model';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class TributacaoInternaService extends ServiceBase {
  private readonly API_ENDPOINT = `${environment.contextT1dw}/tributacoesInterna`;

  constructor(private http: HttpClient) {
    super();
  }

  public autocomplete = (search: string, pagination: Pagination): Promise<TributacaoInterna[]> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        filter: search?.toLocaleLowerCase() === 'todos' ? '' : search || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http.get<TributacaoInterna[]>(`${this.API_ENDPOINT}/suggestions/`, httpOptions).toPromise();
  };

  public findByCodigo = (codigo: string): Promise<TributacaoInterna> => {
    const httpOptions = {
      headers: this.httpHeaders,
    };
    return this.http.get<TributacaoInterna>(`${this.API_ENDPOINT}/${codigo}/`, httpOptions).toPromise();
  };
}
