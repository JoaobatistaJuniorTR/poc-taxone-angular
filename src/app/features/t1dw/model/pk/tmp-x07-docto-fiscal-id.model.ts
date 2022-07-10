export default class TmpX07DoctoFiscalId {
  public username: string;
  public codEmpresa: string;
  public codEstab: string;
  public dataFiscal: any;
  public movtoES: string;
  public normDev: string;
  public codDocto: number | undefined;
  public indFisJur: string | undefined;
  public codFisJur: string | undefined;
  public numDocfis: string;
  public serieDocfis: string;
  public subSerieDocfis: string;

  constructor(data?: any) {
    if (data) {
      this.username = data.username;
      this.codEmpresa = data.codEmpresa;
      this.codEstab = data.codEstab;
      if (data.dataFiscal) {
        this.dataFiscal = new Date(data.dataFiscal);
      }
      this.movtoES = data.movtoES;
      this.normDev = data.normDev;
      this.codDocto = data.codDocto;
      this.indFisJur = data.indFisJur;
      this.codFisJur = data.codFisJur;
      this.numDocfis = data.numDocfis;
      this.serieDocfis = data.serieDocfis ? data.serieDocfis : ' ';
      this.subSerieDocfis = data.subSerieDocfis ? data.subSerieDocfis : ' ';
    }
  }
}
