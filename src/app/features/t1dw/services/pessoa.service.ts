import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import GridFilter from '../model/grid-filter.model';
import { Pagination } from '../model/interface.model';
import { Pessoa } from '../model/pessoa.mode';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class PessoaService extends ServiceBase {
  private readonly API_ENDPOINT = `${environment.contextT1dw}/pessoas`;

  constructor(private http: HttpClient) {
    super();
  }

  public search = (
    codEmpresa: string,
    codEstab: string,
    dataRef: any,
    gridFilters: GridFilter[],
    pagination: Pagination
  ): Promise<Pessoa[]> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        codEmpresa,
        codEstab,
        dataRef: this.buildJsonDate(dataRef),
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http.post<Pessoa[]>(`${this.API_ENDPOINT}/search/`, gridFilters, httpOptions).toPromise();
  };

  public findByIndicadorAndCodigo = (
    codEmpresa: string,
    codEstab: string,
    dataRef: any,
    indFisJur: string,
    codFisJur: string
  ): Promise<Pessoa> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        codEmpresa,
        codEstab,
        dataRef: this.buildJsonDate(dataRef),
      },
    };

    return this.http
      .get<Pessoa>(`${this.API_ENDPOINT}/indicadores/${indFisJur}/byCodigo/${codFisJur}`, httpOptions)
      .toPromise();
  };

  public findById = (identFisJur: string): Promise<Pessoa> => {
    const httpOptions = {
      headers: this.httpHeaders,
    };

    return this.http.get<Pessoa>(`${this.API_ENDPOINT}/${identFisJur}`, httpOptions).toPromise();
  };
}
