import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../model/interface.model';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class InscricaoEstadualService extends ServiceBase {
  private readonly API_ENDPOINT;

  constructor(private http: HttpClient) {
    super();
    this.API_ENDPOINT = `${environment.contextT1dw}/empresas`;
  }

  autocomplete(codEmpresa: string, codEstab: string, pagination: Pagination, filter?: string): Promise<any[]> {
    const httpOptions = {
      params: {
        codEmpresa,
        codEstab,
        filter: filter || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http
      .get<any[]>(
        `${this.API_ENDPOINT}/${codEmpresa}/estabelecimentos/${codEstab}/inscricoesEstadual/suggestions`,
        httpOptions
      )
      .toPromise();
  }

  public findByCodigo(codEmpresa: string, codEstab: string, codigo: string): Promise<any> {
    const httpOptions = {
      params: {
        codEmpresa,
        codEstab,
      },
    };

    return this.http
      .get<any>(`${this.API_ENDPOINT}/${codEmpresa}/estabelecimentos/${codEstab}/inscricoesEstadual/${codigo}`, httpOptions)
      .toPromise();
  }
}
