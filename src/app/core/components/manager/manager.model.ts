export interface ManagerModel {
  value: Company | Branch | Group | Module;
  description: string;
}

export interface Company {
  id: string;
  description: string;
}

export interface Branch {
  cnpjEmpresa: string;
  cnpjEstabelecimento: string;
  codEmpresa: string;
  codEstab: string;
  nomeFantasia: string;
  razaoSocial: string;
}

export interface Group {
  id: string;
  description: string;
}

export interface Module {
  applicationName: string;
  codModLicParameter: string;
  description: string;
  inFavorites: boolean;
  name: string;
}

export interface ManagerBarInfo {
  company: ManagerModel;
  branch: ManagerModel;
  group: ManagerModel;
  module: ManagerModel;
}

export interface StorageId {
  storageID: string;
}
