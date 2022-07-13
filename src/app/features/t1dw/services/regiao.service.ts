import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../model/interface.model';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class RegiaoService extends ServiceBase {
  private readonly API_ENDPOINT;

  constructor(private http: HttpClient) {
    super();
    this.API_ENDPOINT = `${environment.contextT1dw}/regiao`;
  }

  autocomplete(filter: string, pagination: Pagination): Promise<any[]> {
    const httpOptions = {
      params: {
        filter: filter || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http.get<any[]>(`${this.API_ENDPOINT}/suggestions`, httpOptions).toPromise();
  }

  public findByCodigo(codigo: string, dataRef: Date): Promise<any> {
    const httpOptions = {
      params: {
        dataRef: dataRef.toJSON(),
      },
    };

    return this.http.get<any>(`${this.API_ENDPOINT}/${codigo}`, httpOptions).toPromise();
  }
}
