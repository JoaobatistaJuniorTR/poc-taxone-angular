import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class PrtDataFiscalService extends ServiceBase {
  private readonly API_ENDPOINT;

  constructor(private http: HttpClient) {
    super();
    this.API_ENDPOINT = `${environment.contextT1dw}/prt-data-fiscal`;
  }

  public isActive = (codEmpresa: string, codEstab: string): Promise<boolean> => {
    const httpOptions = {
      headers: this.httpHeaders,
      params: {
        codEmpresa,
        codEstab,
      },
    };
    return this.http.get<boolean>(`${this.API_ENDPOINT}/active/`, httpOptions).toPromise();
  };
}
