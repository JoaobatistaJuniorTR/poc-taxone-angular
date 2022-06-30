import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DatamartService {
  private httpOptions: any;

  private readonly API_ENDPOINT = 'datamart';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      withCredentials: true,
      showBusyLoader: true,
    };
  }

  isActiveNow(codEmpresa: string, codEstab: string, tableName: string): Promise<HttpEvent<boolean>> {
    this.httpOptions.params = { codEmpresa, codEstab, nomeTabela: tableName };
    return this.http
      .get<boolean>(`${environment.contextT1dw}/${this.API_ENDPOINT}/active/now/`, this.httpOptions)
      .toPromise();
  }
}
