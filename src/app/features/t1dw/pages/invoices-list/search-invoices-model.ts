export class SearchInvoices {
  codEmpresa: string;

  estab: any;

  dataSaidaRecIni: any;

  dataSaidaRecFim: any;

  constructor(codEmpresa: string, codEstab: any, dataSaidaRecIni: any, dataSaidaRecFim: any) {
    this.codEmpresa = codEmpresa;
    this.estab = codEstab;
    this.dataSaidaRecIni = dataSaidaRecIni;
    this.dataSaidaRecFim = dataSaidaRecFim;
  }
}
