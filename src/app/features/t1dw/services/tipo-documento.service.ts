import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../model/interface.model';

@Injectable({
  providedIn: 'root',
})
export class TipoDocumentoService {
  private readonly API_ENDPOINT;

  constructor(private http: HttpClient) {
    this.API_ENDPOINT = `${environment.contextT1dw}/tiposLancamento`;
  }

  autocomplete(codEmpresa: string, codEstab: string, dataRef: any, pagination: Pagination, filter?: string): Promise<any> {
    const httpOptions = {
      params: {
        codEmpresa,
        codEstab,
        dataRef,
        filter: filter || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http.get<any>(`${this.API_ENDPOINT}/suggestions/`, httpOptions).toPromise();
  }

  public findByCodigo(codEmpresa: string, codEstab: string, dataRef: Date, codigo: string): Promise<any> {
    const httpOptions = {
      params: {
        codEmpresa,
        codEstab,
        dataRef: dataRef.toJSON(),
      },
    };
    return this.http.get<any>(`${this.API_ENDPOINT}/${codigo}`, httpOptions).toPromise();
  }

  public findById(id: string): Promise<any> {
    const httpOptions = {};
    return this.http.get<any>(`${this.API_ENDPOINT}/byId/${id}`, httpOptions).toPromise();
  }
}
