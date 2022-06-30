import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../model/interface.model';

@Injectable({
  providedIn: 'root',
})
export class EstabelecimentoService {
  constructor(private http: HttpClient) {}

  autocomplete(codEmpresa: string, pagination: Pagination, search?: string): Promise<any> {
    const httpOptions = {
      params: {
        filter: search || '',
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    };

    return this.http
      .get<any>(`${environment.contextT1dw}/empresas/${codEmpresa}/estabelecimentos/suggestions/`, httpOptions)
      .toPromise();
  }

  public findByCodEmpresaAndCodEstab(codEmpresa: string, codEstab: string): Promise<any> {
    return this.http.get<any>(`${environment.contextT1dw}/empresas/${codEmpresa}/estabelecimentos/${codEstab}`).toPromise();
  }
}
