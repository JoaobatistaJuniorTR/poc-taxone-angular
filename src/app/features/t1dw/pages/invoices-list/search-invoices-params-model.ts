export class SearchInvoicesParams {
  codEmpresa: string;

  estab: any;

  dataSaidaRecIni: string;

  dataSaidaRecFim: string;

  constructor(codEmpresa: string, estab: any, dataSaidaRecIni: string, dataSaidaRecFim: string) {
    this.codEmpresa = codEmpresa;
    this.estab = estab;
    this.dataSaidaRecIni = dataSaidaRecIni;
    this.dataSaidaRecFim = dataSaidaRecFim;
  }
}
