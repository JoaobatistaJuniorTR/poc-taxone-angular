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

  getDataSaidaRecIniAsString(): string {
    const tokens: string[] = [];
    if (this.dataSaidaRecIni) {
      tokens.push(this.dataSaidaRecIni.year);
      if (`${this.dataSaidaRecIni.month}`.length === 2) {
        tokens.push(`${this.dataSaidaRecIni.month}`);
      } else {
        tokens.push(`0${this.dataSaidaRecIni.month}`);
      }
      if (`${this.dataSaidaRecIni.day}`.length === 2) {
        tokens.push(`${this.dataSaidaRecIni.day}`);
      } else {
        tokens.push(`0${this.dataSaidaRecIni.day}`);
      }
    }
    return `${tokens.join('-')}T00:00:00`;
  }

  getDataSaidaRecFimAsDate(): string {
    const tokens: string[] = [];
    if (this.dataSaidaRecFim) {
      tokens.push(this.dataSaidaRecFim.year);
      if (`${this.dataSaidaRecFim.month}`.length === 2) {
        tokens.push(`${this.dataSaidaRecFim.month}`);
      } else {
        tokens.push(`0${this.dataSaidaRecFim.month}`);
      }
      if (`${this.dataSaidaRecFim.day}`.length === 2) {
        tokens.push(`${this.dataSaidaRecFim.day}`);
      } else {
        tokens.push(`0${this.dataSaidaRecFim.day}`);
      }
    }
    return `${tokens.join('-')}T23:59:59`;
  }
}
