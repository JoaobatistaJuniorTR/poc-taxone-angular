export class SearchInvoicesParams {
  codEmpresa: string;

  codEstab: string;

  dataSaidaRecIni: any;

  dataSaidaRecFim: any;

  constructor(codEmpresa: string, codEstab: string, dataSaidaRecIni: any, dataSaidaRecFim: any) {
    this.codEmpresa = codEmpresa;
    this.codEstab = codEstab;
    this.dataSaidaRecIni = dataSaidaRecIni;
    this.dataSaidaRecFim = dataSaidaRecFim;
  }
}
