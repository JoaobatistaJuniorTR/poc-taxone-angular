import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoDocumento } from '../model/tipo-documento.model';
import { Pagination } from '../model/interface.model';

@Injectable({
  providedIn: 'root',
})
export class TipoDocumentoService {
  private readonly API_ENDPOINT;

  constructor(private http: HttpClient) {
    this.API_ENDPOINT = `${environment.contextT1dw}/tiposDocumento`;
  }

  autocomplete(
    codEmpresa: string,
    codEstab: string,
    dataRef: any,
    pagination: Pagination,
    filter?: string
  ): Promise<TipoDocumento[]> {
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

    return this.http.get<TipoDocumento[]>(`${this.API_ENDPOINT}/suggestions/`, httpOptions).toPromise();
  }

  public findByCodigo(codEmpresa: string, codEstab: string, dataRef: any, codigo: string): Promise<TipoDocumento> {
    const httpOptions = {
      params: {
        codEmpresa,
        codEstab,
        dataRef: new Date(dataRef).toJSON(),
      },
    };

    return this.http.get<TipoDocumento>(`${this.API_ENDPOINT}/${codigo}`, httpOptions).toPromise();
  }

  public findById(id: string): Promise<TipoDocumento> {
    const httpOptions = {};
    return this.http.get<TipoDocumento>(`${this.API_ENDPOINT}/byId/${id}`, httpOptions).toPromise();
  }
}
