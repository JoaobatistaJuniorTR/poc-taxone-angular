export interface EnderecoPessoa {
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  codMunicipio: number;
  cidade: string;
  distrito: string;
  subDistrito: string;
  identEstado: number;
  cep: number;
}

export interface ContatoPessoa {
  ddd: string;
  telefone: string;
  fax: string;
}

export interface Pessoa {
  id: number;
  codGrupo: string;
  indFisJur: string;
  codigo: string;
  validade: any;
  cpfCgc: string;
  codAtividade: number;
  inscEstadual: string;
  inscMunicipal: string;
  inscSuframa: string;
  indContemCod: string;
  razaoSocial: string;
  nomeFantasia: string;
  numProcesso: number;
  indGravacao: string;
  endereco: EnderecoPessoa;
  contato: ContatoPessoa;
}
