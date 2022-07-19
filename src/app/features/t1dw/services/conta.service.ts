import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import GridFilter from '../model/grid-filter.model';
import { Pagination } from '../model/interface.model';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class ContaService extends ServiceBase {
  private readonly API_ENDPOINT;

  constructor(private http: HttpClient) {
    super();
    this.API_ENDPOINT = `${environment.contextT1dw}/contas`;
  }

  autocomplete(codEmpresa: string, codEstab: string, filter: string, pagination: Pagination): Promise<any[]> {
    const httpOptions = {
      params: {
        codEmpresa,
        codEstab,
        filter: filter || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http.get<any[]>(`${this.API_ENDPOINT}/suggestions`, httpOptions).toPromise();
  }

  search(
    codEmpresa: string,
    codEstab: string,
    dataRef: any,
    gridFilters: GridFilter[],
    pagination: Pagination
  ): Promise<any[]> {
    const httpOptions = {
      params: {
        codEmpresa,
        codEstab,
        dataRef: new Date(dataRef).toJSON(),
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http.post<any[]>(`${this.API_ENDPOINT}/search`, gridFilters, httpOptions).toPromise();
  }

  public findByCodigo(codEmpresa: string, codEstab: string, dataRef: any, codigo: string): Promise<any> {
    const httpOptions = {
      params: {
        codEmpresa,
        codEstab,
        dataRef: new Date(dataRef).toJSON(),
      },
    };

    return this.http.get<any>(`${this.API_ENDPOINT}/${codigo}`, httpOptions).toPromise();
  }
}
