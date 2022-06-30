export default class MerchandiseTotals {
  public vlrTotal: string;

  public vlrBaseIcms: string;

  public vlrIcms: string;

  public vlrBaseIpi: string;

  public vlrIpi: string;

  public qtdItens: string;

  constructor(data?: any) {
    if (data) {
      this.vlrTotal = data.vlrTotal ? data.vlrTotal.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIcms = data.vlrBaseIcms ? data.vlrBaseIcms.toFixed(2) : Number(0).toFixed(2);
      this.vlrIcms = data.vlrIcms ? data.vlrIcms.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIpi = data.vlrBaseIpi ? data.vlrBaseIpi.toFixed(2) : Number(0).toFixed(2);
      this.vlrIpi = data.vlrIpi ? data.vlrIpi.toFixed(2) : Number(0).toFixed(2);
      this.qtdItens = data.qtdItens;
    }
  }
}
