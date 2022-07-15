import { environment } from 'src/environments/environment';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import GridFilter from '../model/grid-filter.model';
import { Pagination } from '../model/interface.model';
import TmpX07DoctoFiscal from '../model/tmp-x07-docto-fiscal.model';
import { ServiceBase } from './services-base';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService extends ServiceBase {
  private readonly API_ENDPOINT = 'invoice';

  private httpOptions: any;
  constructor(private http: HttpClient) {
    super();
    this.httpOptions = {
      withCredentials: true,
      showBusyLoader: true,
      headers: this.httpHeaders,
      params: {},
    };
  }

  searchInvoices(filters: GridFilter[], pagination: Pagination): Promise<any> {
    this.httpOptions.params.page = pagination.page.toString();
    this.httpOptions.params.size = pagination.size.toString();
    return this.http
      .post<any>(`${environment.contextT1dw}/${this.API_ENDPOINT}/search`, filters, this.httpOptions)
      .toPromise();
  }

  getInvoiceById(invoiceId: string): Promise<any> {
    this.httpOptions.params = {};
    return this.http
      .get<TmpX07DoctoFiscal>(`${environment.contextT1dw}/${this.API_ENDPOINT}/${invoiceId}`, this.httpOptions)
      .toPromise();
  }

  saveInvoice(invoice: TmpX07DoctoFiscal): Promise<any> {
    return this.http
      .post<any>(`${environment.contextT1dw}/${this.API_ENDPOINT}/save/`, invoice, this.httpOptions)
      .toPromise();
  }

  updateInvoice(invoiceId: string, invoice: TmpX07DoctoFiscal): Promise<any> {
    return this.http
      .post<TmpX07DoctoFiscal>(
        `${environment.contextT1dw}/${this.API_ENDPOINT}/update/${invoiceId}/`,
        invoice,
        this.httpOptions
      )
      .toPromise();
  }
}
