import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class PrtNumDocfisServService extends ServiceBase {
  private readonly API_ENDPOINT;

  constructor(private http: HttpClient) {
    super();
    this.API_ENDPOINT = `${environment.contextT1dw}/prt-num-docfis-serv`;
  }

  public isActiveByEstablishment = (codEmpresa: string, codEstab: string, dataFiscal: any): Promise<boolean> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        codEmpresa,
        codEstab,
        dataFiscal: new Date(dataFiscal).toJSON(),
      },
    };
    return this.http.get<boolean>(`${this.API_ENDPOINT}/active/`, httpOptions).toPromise();
  };
}
