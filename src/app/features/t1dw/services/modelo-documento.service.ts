import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../model/interface.model';
import { ModeloDocumento } from '../model/modelo-documento.model';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class ModeloDocumentoService extends ServiceBase {
  private readonly API_ENDPOINT = `${environment.contextT1dw}/modelosDocumento`;

  constructor(private http: HttpClient) {
    super();
  }

  public autocomplete = (
    codEmpresa: string,
    codEstab: string,
    dataRef: any,
    search: string,
    pagination: Pagination
  ): Promise<ModeloDocumento[]> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        codEmpresa,
        codEstab,
        dataRef: new Date(dataRef).toJSON(),
        filter: search || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http.get<ModeloDocumento[]>(`${this.API_ENDPOINT}/suggestions/`, httpOptions).toPromise();
  };

  public findSuggestionsForReplacementInvoice = (
    codEmpresa: string,
    codEstab: string,
    dataRef: any,
    search: string,
    pagination: Pagination
  ): Promise<ModeloDocumento[]> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        codEmpresa,
        codEstab,
        dataRef: new Date(dataRef).toJSON(),
        filter: search?.toLocaleLowerCase() === 'todos' ? '' : search || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http
      .get<ModeloDocumento[]>(`${this.API_ENDPOINT}/replacement-invoice/suggestions/`, httpOptions)
      .toPromise();
  };

  public findByCodigo = (codEmpresa: string, codEstab: string, dataRef: any, codigo: string): Promise<ModeloDocumento> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        codEmpresa,
        codEstab,
        dataRef: new Date(dataRef).toJSON(),
      },
    };
    return this.http.get<ModeloDocumento>(`${this.API_ENDPOINT}/${codigo}`, httpOptions).toPromise();
  };

  public findById = (id: string): Promise<ModeloDocumento> => {
    const httpOptions = {
      headers: this.httpHeaders,
    };
    return this.http.get<ModeloDocumento>(`${this.API_ENDPOINT}/${id}/id`, httpOptions).toPromise();
  };
}
