import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../model/interface.model';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class NaturezaOperacaoService extends ServiceBase {
  private readonly API_ENDPOINT;

  constructor(private http: HttpClient) {
    super();
    this.API_ENDPOINT = `${environment.contextT1dw}/naturezasOperacao`;
  }

  autocomplete(codEmpresa: string, codEstab: string, dataRef: any, filter: string, pagination: Pagination): Promise<any[]> {
    const httpOptions = {
      params: {
        codEmpresa,
        codEstab,
        dataRef: new Date(dataRef).toJSON(),
        filter: filter || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http.get<any[]>(`${this.API_ENDPOINT}/suggestions`, httpOptions).toPromise();
  }

  public findByCodigo(codEmpresa: string, codEstab: string, dataRef: any, codigo: string): Promise<any> {
    const httpOptions = {
      params: {
        codEmpresa,
        codEstab,
        dataRef: new Date(dataRef).toJSON(),
      },
    };

    return this.http.get<any>(`${this.API_ENDPOINT}/${codigo}/maxValid`, httpOptions).toPromise();
  }
}
