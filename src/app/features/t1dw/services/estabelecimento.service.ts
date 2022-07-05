import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../model/interface.model';

@Injectable({
  providedIn: 'root',
})
export class EstabelecimentoService {
  private readonly API_ENDPOINT = `${environment.contextT1dw}/empresas`;

  constructor(private http: HttpClient) {}

  autocomplete(codEmpresa: string, pagination: Pagination, search?: string): Promise<any> {
    console.log(`search: ${search}`);
    const httpOptions = {
      params: {
        filter: search?.toLocaleLowerCase() === 'todos' ? '' : search || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    console.log(httpOptions);

    return this.http.get<any>(`${this.API_ENDPOINT}/${codEmpresa}/estabelecimentos/suggestions/`, httpOptions).toPromise();
  }

  public findByCodEmpresaAndCodEstab(codEmpresa: string, codEstab: string): Promise<any> {
    console.log(`search: ${codEstab}`);
    return this.http.get<any>(`${this.API_ENDPOINT}/${codEmpresa}/estabelecimentos/${codEstab}`).toPromise();
  }
}
