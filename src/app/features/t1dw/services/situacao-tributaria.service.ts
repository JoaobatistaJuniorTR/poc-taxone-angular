import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../model/interface.model';
import { SituacaoTributaria } from '../model/situacao-tributaria';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class SituacaoTributariaService extends ServiceBase {
  private readonly API_ENDPOINT = `${environment.contextT1dw}/`;

  constructor(private http: HttpClient) {
    super();
  }

  public situacaoTributariaASuggestions = (
    codEmpresa: string,
    codEstab: string,
    dataRef: Date,
    search: string,
    pagination: Pagination
  ): Promise<SituacaoTributaria[]> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        codEmpresa,
        codEstab,
        dataRef: dataRef.toJSON(),
        filter: search?.toLocaleLowerCase() === 'todos' ? '' : search || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http
      .get<SituacaoTributaria[]>(`${this.API_ENDPOINT}/situacoesTributariasA/suggestions/`, httpOptions)
      .toPromise();
  };

  public findSituacaoTributariaAByCodigo = (
    codEmpresa: string,
    codEstab: string,
    dataRef: Date,
    codigo: string
  ): Promise<SituacaoTributaria> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        codEmpresa,
        codEstab,
        dataRef: dataRef.toJSON(),
      },
    };
    return this.http
      .get<SituacaoTributaria>(`${this.API_ENDPOINT}/situacoesTributariasA/${codigo}/maxValid`, httpOptions)
      .toPromise();
  };

  public situacaoTributariaBSuggestions = (
    codEmpresa: string,
    codEstab: string,
    dataRef: Date,
    search: string,
    pagination: Pagination
  ): Promise<SituacaoTributaria[]> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        codEmpresa,
        codEstab,
        dataRef: dataRef.toJSON(),
        filter: search?.toLocaleLowerCase() === 'todos' ? '' : search || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http
      .get<SituacaoTributaria[]>(`${this.API_ENDPOINT}/situacoesTributariasB/suggestions/`, httpOptions)
      .toPromise();
  };

  public findSituacaoTributariaBByCodigo = (
    codEmpresa: string,
    codEstab: string,
    dataRef: Date,
    codigo: string
  ): Promise<SituacaoTributaria> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        codEmpresa,
        codEstab,
        dataRef: dataRef.toJSON(),
      },
    };
    return this.http
      .get<SituacaoTributaria>(`${this.API_ENDPOINT}/situacoesTributariasB/${codigo}/maxValid`, httpOptions)
      .toPromise();
  };
}
