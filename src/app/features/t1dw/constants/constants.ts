export const constants = {
  BRAZILIAN_STATES: [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'GO', label: 'Goiás' },
    { value: 'PA', label: 'Pará' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'PR', label: 'Paraná' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'TO', label: 'Tocantins' },
  ],

  PRODUCT_INDEXES: [
    { key: '1', value: 'Acabado' },
    { key: '2', value: 'Insumo' },
    { key: '3', value: 'Embalagem' },
    { key: '4', value: 'Consumo' },
    { key: '5', value: 'Outros' },
    { key: '6', value: 'Em Elaboração' },
    { key: '7', value: 'Intermediário' },
    { key: '8', value: 'Miscelâneas' },
  ],

  NATURAL_LEGAL_INDICATOR: [
    { value: '1', label: 'Fornecedor' },
    { value: '2', label: 'Cliente' },
    { value: '3', label: 'Estabelecimento' },
    { value: '4', label: 'Transportadora' },
    { value: '5', label: 'Fornecedor/Cliente/Transportadora' },
  ],

  INVOICE_DENEGADA_INUTILIZADA: [
    { value: '', label: '' },
    { value: '1', label: 'Denegada' },
    { value: '2', label: 'Inutilizada' },
  ],

  ADMIN_JUDIC_PROCESS_TYPES: [
    { key: '1', value: 'Administrativo' },
    { key: '2', value: 'Judicial' },
  ],

  ADMIN_JUDIC_PROCESS_JUDICIAL_TYPES: [
    { key: '1', value: 'Processo Judicial do Produtor' },
    { key: '2', value: 'Processo Judicial Coletivo' },
  ],

  PROCESS_ORIGINS: [
    { key: '0', value: 'Sefaz' },
    { key: '1', value: 'Justiça Federal' },
    { key: '2', value: 'Justiça Estadual' },
    { key: '3', value: 'Secex/RFB' },
    { key: '9', value: 'Outros' },
  ],

  PROCESS_ORIGINS_EFD_PIS_COFINS: [
    { key: '1', value: 'Justiça Federal' },
    { key: '3', value: 'Secex/RFB' },
    { key: '9', value: 'Outros' },
  ],

  DOCUMENT_TYPE: [
    { key: '0', value: 'Doc. Fiscal de Arrecadação' },
    { key: '1', value: 'GNRE' },
  ],

  VEHICLE_TYPE: [
    { key: 2, value: 'CICLOMOTO' },
    { key: 3, value: 'MOTONETA' },
    { key: 4, value: 'MOTOCICLO' },
    { key: 5, value: 'TRICICLO' },
    { key: 6, value: 'AUTOMÓVEL' },
    { key: 7, value: 'MICROÔNIBUS' },
    { key: 8, value: 'ÔNIBUS' },
    { key: 10, value: 'REBOQUE' },
    { key: 11, value: 'SEMI-REBOQUE' },
    { key: 13, value: 'CAMINHONETA' },
    { key: 14, value: 'CAMINHÃO' },
    { key: 17, value: 'C. TRATOR' },
    { key: 18, value: 'TRATOR DE RODAS' },
    { key: 19, value: 'TRATOR DE ESTEIRAS' },
    { key: 20, value: 'TRATOR MISTO' },
    { key: 21, value: 'QUADRICICLO' },
    { key: 22, value: 'ESP / ÔNIBUS' },
    { key: 23, value: 'MISTO / CAM' },
    { key: 24, value: 'CARGA / CAM' },
    { key: 25, value: 'UTILITÁRIO' },
    { key: 26, value: 'MOTOR-CASA' },
  ],

  ESPECIE_VEICULO: [
    { key: 1, value: 'PASSAGEIRO' },
    { key: 2, value: 'CARGA' },
    { key: 3, value: 'MISTO' },
    { key: 4, value: 'CORRIDA' },
    { key: 5, value: 'TRAÇÃO' },
    { key: 6, value: 'ESPECIAL' },
  ],

  CONDICAO_VEICULO: [
    { key: '1', value: 'Acabado' },
    { key: '2', value: 'Inacabado' },
    { key: '3', value: 'Semi-Acabado' },
  ],

  ENTRADA_SAIDA_TYPES: [
    { key: '1', value: 'Doc. de entrada, documentos de terceiros' },
    { key: '2', value: 'Doc. de entrada emitida pelo estabelecimento, acolhendo notas de produtores agropecuarios' },
    {
      key: '3',
      value: 'Doc. de entrada emitida pelo estabelecimento, por retorno de mercadorias não entregues ao destinatário',
    },
    { key: '4', value: 'Doc. de entrada emitida pelo estabelecimento, outros motivos legais' },
    { key: '5', value: 'Doc. de entrada emitida pelo estabelecimento, globalizando conhecimentos de frete' },
  ],

  TP_DISP_SEG: [
    { key: '01', value: 'Selo Fiscal de Autenticidade' },
    { key: '02', value: 'Formulário Contínuo' },
    { key: '03', value: 'Formulário de Segurança' },
    { key: '04', value: 'Documento Fiscal Emitido manualmente' },
    { key: '05', value: 'ECF DIEF' },
    { key: '06', value: 'Blocos DIEF' },
    { key: '07', value: 'Jogos Soltos DIEF' },
    { key: '08', value: 'Nota Fiscal Eletrônica' },
    { key: '12', value: 'Conhecimento de Transporte Eletrônico' },
  ],

  MODAL_FIELDS_FIS_JUR: [
    {
      header: 'Indicador',
      binding: 'indFisJur',
      with: '140px',
    },
    {
      header: 'Código',
      binding: 'codigo',
      with: '140px',
    },
    {
      header: 'CPF / CNPJ',
      binding: 'cpfCgc',
      with: '140px',
    },
    {
      header: 'Cód. Atividade',
      binding: 'codAtividade',
      with: '140px',
    },
    {
      header: 'Insc. Estadual',
      binding: 'inscEstadual',
      with: '140px',
    },
    {
      header: 'Insc. Municipal',
      binding: 'inscMunicipal',
      with: '140px',
    },
    {
      header: 'Razão Social',
      binding: 'razaoSocial',
      with: '140px',
    },
    {
      header: 'Nome Fantasia',
      binding: 'nomeFantasia',
    },
  ],

  ADMIN_JUDIC_PROCESS_TYPE_JUDICIAL: '2',
  ADMIN_JUDIC_PROCESS_EVENT_R2050: '5',
  ADMIN_JUDIC_PROCESS_EVENT_S1250_R2055: 'A',

  PAYMENT_METHOD_NATURE_OPERATION_CREDITO: '1',

  TIPO_DE_REFERENCIA: [
    { key: '1', value: 'Devolução (Entrada) x Documentos de Origem (Saídas)' },
    { key: '2', value: 'Saída X Entradas (Cálcuilo do Valor de Confronto da Portaria CAT 42/18)' },
    {
      key: '3',
      value:
        "Entrada de Mercadoria adquirda de remetente indireto (substituido) x NF's Emitidas pelos Substitutos Tributários",
    },
    { key: '4', value: 'Devolução (Entrada) x Documento de Origem (Cupom Fiscal Saída)' },
  ],
};
