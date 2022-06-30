import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConvertInvoiceToTemp } from '../model/interface.model';

@Injectable({
  providedIn: 'root',
})
export class TempTableService {
  private httpOptions: any;

  private readonly API_ENDPOINT = 'temp-tables';

  constructor(private http: HttpClient) {
    const httpHeaders: any = {
      headers: {
        ContentType: 'application/json',
      },
    };

    this.httpOptions = {
      withCredentials: true,
      showBusyLoader: true,
      headers: httpHeaders,
    };
  }

  convertInvoiceToTemp(body: ConvertInvoiceToTemp): Promise<any> {
    return this.http
      .post<any>(`${environment.contextT1dw}/${this.API_ENDPOINT}/convert/`, body, this.httpOptions)
      .toPromise();
  }
}
