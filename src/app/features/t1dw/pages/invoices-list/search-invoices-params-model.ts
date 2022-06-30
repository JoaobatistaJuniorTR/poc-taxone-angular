export class SearchInvoicesParams {
  codEmpresa: string;

  estab: any;

  dataSaidaRecIni: any;

  dataSaidaRecFim: any;

  constructor(codEmpresa: string, estab: any, dataSaidaRecIni: any, dataSaidaRecFim: any) {
    this.codEmpresa = codEmpresa;
    this.estab = estab;
    this.dataSaidaRecIni = dataSaidaRecIni;
    this.dataSaidaRecFim = dataSaidaRecFim;
  }
}
