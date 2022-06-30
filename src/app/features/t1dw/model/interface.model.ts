export interface Pagination {
  page: number;
  size: number;
}

export interface Estabelecimento {
  codEstab: string;
  razaoSocial: string;
  nomeFantasia: string;
}

export interface ConvertInvoiceToTemp {
  codEmpresa: string;
  codEstab: string;
  dataFiscal: string;
  movtoES: string;
  indNormDev: string;
  identDocto: string;
  identFisJur: string;
  numDocFis: string;
  serieDocFis: string;
  subserieDocFis: string;
  username: string;
}
