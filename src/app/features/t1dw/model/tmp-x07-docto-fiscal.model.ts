/* eslint-disable @typescript-eslint/lines-between-class-members */
import MerchandiseTotals from './merchandise-totals.model';
import TmpX07DoctoFiscalId from './pk/tmp-x07-docto-fiscal-id.model';
import ServiceTotals from './service-totals.model';

export default class TmpX07DoctoFiscal {
  public id: TmpX07DoctoFiscalId;
  public razaoSocialFisJur: string;
  public fisJurCpfCnpj: string;
  public totaisMercadoria: MerchandiseTotals;
  public totaisServico: ServiceTotals;
  public idDoctoFiscal: string;
  public identDocto: number;
  public identFisJur: number;
  public dataEmissao: Date;
  public codClassDocFis: string;
  public identModelo: number;
  public codModelo: string;
  public identCfo: number;
  public codCfo: string;
  public identNaturezaOp: number;
  public codNaturezaOp: string;
  public numDocfisRef: string;
  public serieDocfisRef: string;
  public subSerieDocfisRef: string;
  public numDecImpRef: string;
  public dataSaidaRec: Date;
  public inscEstadSubstit: string;
  public vlrProduto: string;
  public vlrTotNota: string;
  public qtdItensMercadoria: string;
  public vlrFrete: string;
  public vlrSeguro: string;
  public vlrOutras: string;
  public vlrBaseDifFrete: string;
  public vlrDesconto: string;
  public contribFinal: string;
  public situacao: string;
  public codIndice: string;
  public vlrNotaConv: string;
  public identConta: number;
  public codConta: string;
  public indModeloCupom: string;
  public vlrContabCompl: string;
  public numControleDocto: string;
  public vlrAliqDestino: string;
  public vlrOutros1: string;
  public vlrOutros2: string;
  public vlrOutros3: string;
  public vlrOutros4: string;
  public vlrOutros5: string;
  public vlrAliqOutros1: string;
  public vlrAliqOutros2: string;
  public indNfEspecial: string;
  public numMaquina: string;
  public numCupomFinal: string;
  public aliqTributoIcms: string;
  public baseTributoIcms: string;
  public vlrTributoIcms: string;
  public difAliqTribIcms: string;
  public obsTributoIcms: string;
  public identDetOpIcms: number;
  public codDetOpIcms: string;
  public aliqTributoIpi: string;
  public vlrTributoIpi: string;
  public obsTributoIpi: string;
  public identDetOpIpi: number;
  public codDetOpIpi: string;
  public aliqTributoIcmss: string;
  public vlrTributoIcmss: string;
  public obsTributoIcmss: string;
  public identDetOpIcmss: number;
  public codDetOpIcmss: string;
  public aliqTributoIr: string;
  public vlrTributoIr: string;
  public aliqTributoIss: string;
  public vlrTributoIss: string;
  public vlrBaseIcms1: string;
  public vlrBaseIcms2: string;
  public vlrBaseIcms3: string;
  public vlrBaseIcms4: string;
  public vlrBaseIpi1: string;
  public vlrBaseIpi2: string;
  public vlrBaseIpi3: string;
  public vlrBaseIpi4: string;
  public vlrBaseIcmss: string;
  public vlrBaseIr1: string;
  public vlrBaseIr2: string;
  public vlrBaseIss1: string;
  public vlrBaseIss2: string;
  public vlrBaseIss3: string;
  public numProcesso: number;
  public indGravacao: string;
  public indTpFrete: string;
  public codMunicipio: number;
  public indTransfCred: string;
  public datDi: Date;
  public vlrTomServico: string;
  public datEscrExtemp: Date;
  public codTribInt: number;
  public codRegiao: number;
  public datAutentic: Date;
  public codCanalDistrib: string;
  public indCredIcmss: string;
  public vlrIcmsNdestac: string;
  public vlrIpiNdestac: string;
  public vlrTotIn: string;
  public vlrIcmsIn: string;
  public vlrIcmsB1In: string;
  public vlrIcmsB2In: string;
  public vlrIcmsB3In: string;
  public vlrIcmsB4In: string;
  public baseIpi: string;
  public vlrIpi: string;
  public vlrIpiIn: string;
  public vlrIpiB1In: string;
  public vlrIpiB2In: string;
  public vlrIpiB3In: string;
  public vlrIpiB4In: string;
  public vlrBaseInss: string;
  public vlrAliqInss: string;
  public vlrInssRetido: string;
  public vlrMatAplicIss: string;
  public vlrSubemprIss: string;
  public indMunicIss: string;
  public indClasseOpIss: string;
  public datFatoGerador: Date;
  public datCancelamento: Date;
  public numPagina: string;
  public numLivro: string;
  public nroAidfNf: string;
  public datValidDocAidf: Date;
  public indFatura: string;
  public identQuitacao: number;
  public codQuitacao: string;
  public numSeloContIcms: string;
  public vlrBasePis: string;
  public vlrPis: string;
  public vlrBaseCofins: string;
  public vlrCofins: string;
  public baseIcmsOrigdest: string;
  public vlrIcmsOrigdest: string;
  public aliqIcmsOrigdest: number;
  public vlrDescCondic: string;
  public vlrBaseIseIcmss: string;
  public vlrBaseOutIcmss: string;
  public vlrRedBaseIcmss: string;
  public percRedBaseIcms: string;
  public identFisjurCpdir: number;
  public indFisjurCpdir: string;
  public codFisjurCpdir: string;
  public indMedidajudicial: string;
  public identUfOrigDest: number;
  public codUfOrigDest: string;
  public indCompraVenda: string;
  public codTpDispSeg: string;
  public numCtrDisp: number;
  public numFimDocto: string;
  public identUfDestino: number;
  public codUfDestino: string;
  public serieCtrDisp: string;
  public subSerieCtrDisp: string;
  public indSituacaoEsp: string;
  public inscEstadual: string;
  public codPagtoInss: string;
  public datOperacao: Date;
  public usuario: string;
  public datInternAm: Date;
  public identFisjurLsg: number;
  public indFisjurLsg: string;
  public codFisjurLsg: string;
  public comprovExp: string;
  public numFinalCrtDisp: number;
  public numAlvara: string;
  public notificaSefaz: string;
  public internaSuframa: string;
  public indNotaServico: string;
  public codMotivo: string;
  public codAmparo: string;
  public identEstadoAmpar: number;
  public codEstadoAmpar: string;
  public obsComplMotivo: string;
  public indTpRet: string;
  public indTpTomador: string;
  public codAntecSt: string;
  public indTelecom: string;
  public cnpjArmazOrig: string;
  public identUfArmazOrig: number;
  public codUfArmazOrig: string;
  public insEstArmazOrig: string;
  public cnpjArmazDest: string;
  public identUfArmazDest: number;
  public codUfArmazDest: string;
  public insEstArmazDest: string;
  public obsInfAdicNf: string;
  public vlrBaseInss2: string;
  public vlrAliqInss2: string;
  public vlrInssRetido2: string;
  public codPagtoInss2: string;
  public vlrBasePisSt: string;
  public vlrAliqPisSt: string;
  public vlrPisSt: string;
  public vlrBaseCofinsSt: string;
  public vlrAliqCofinsSt: string;
  public vlrCofinsSt: string;
  public vlrBaseCsll: string;
  public vlrAliqCsll: string;
  public vlrCsll: string;
  public vlrAliqPis: string;
  public vlrAliqCofins: string;
  public baseIcmssSubstituido: string;
  public vlrIcmssSubstituido: string;
  public codCei: string;
  public vlrJurosInss: string;
  public vlrMultaInss: string;
  public indSituacaoEspSt: string;
  public vlrIcmssNdestac: string;
  public indDoctoRec: string;
  public datPgtoGnreDarj: Date;
  public dtPagtoNf: Date;
  public indOrigemInfo: string;
  public horaSaida: number;
  public codSitDocfis: string;
  public identObservacao: number;
  public codObservacao: string;
  public identSituacaoA: number;
  public codSituacaoA: string;
  public identSituacaoB: number;
  public codSituacaoB: string;
  public numContReduc: string;
  public codMunicipioOrig: number;
  public codMunicipioDest: number;
  public codCfps: string;
  public numLancamento: string;
  public vlrMatProp: string;
  public vlrMatTerc: string;
  public vlrBaseIssRetido: string;
  public vlrIssRetido: string;
  public vlrDeducaoIss: string;
  public codMunicArmazOrig: number;
  public insMunicArmazOrig: string;
  public codMunicArmazDest: number;
  public insMunicArmazDest: string;
  public identClasseConsumo: number;
  public codClasseConsumo: string;
  public indEspecifReceita: string;
  public numContrato: string;
  public codAreaTerminal: string;
  public codTpUtil: string;
  public grupoTensao: string;
  public dataConsumoIni: Date;
  public dataConsumoFim: Date;
  public dataConsumoLeit: Date;
  public qtdContratadaPonta: string;
  public qtdContratadaFponta: string;
  public qtdConsumoTotal: string;
  public identUfConsumo: number;
  public codUfConsumo: string;
  public codMunicConsumo: number;
  public codOperEspSt: string;
  public atoNormativo: string;
  public numAtoNormativo: number;
  public anoAtoNormativo: number;
  public capitulacaoNorma: string;
  public vlrOutrasEntid: string;
  public vlrTerceiros: string;
  public indTpComplIcms: string;
  public vlrBaseCide: string;
  public vlrAliqCide: string;
  public vlrCide: string;
  public codVerificNfe: string;
  public codTpRpsNfe: string;
  public numRpsNfe: number;
  public serieRpsNfe: string;
  public datEmissaoRpsNfe: Date;
  public dscServicoNfe: string;
  public numAutenticNfe: string;
  public numDvNfe: number;
  public modeloNfDms: string;
  public codModeloCotepe: string;
  public vlrComissao: string;
  public indNfeDenegInut: number;
  public indNfRegEspecial: string;
  public vlrAbatNtributado: string;
  public vlrOutrosIcms: string;
  public horaEmissao: number;
  public obsDadosFatura: string;
  public horaSaidaRec: number;
  public identFisConces: number;
  public indFisConces: string;
  public codFisConces: string;
  public codAutentic: string;
  public indPortCat44: string;
  public numAutenticNfeAux: number;
  public vlrBaseInssRural: string;
  public vlrAliqInssRural: string;
  public vlrInssRural: string;
  public identClasseConsumoSefPe: number;
  public codClasseConsumoSefPe: string;
  public vlrPisRetido: string;
  public vlrCofinsRetido: string;
  public datLancPisCofins: Date;
  public indPisCofinsExtemp: string;
  public codSitPis: number;
  public codSitCofins: number;
  public indNatFrete: string;
  public categoriaTrab: string;
  public codNatRec: number;
  public indVendaCanc: string;
  public indNatBaseCred: string;
  public indNfContingencia: string;
  public vlrAcrescimo: string;
  public vlrAntecipTrib: string;
  public dscReservado1: string;
  public dscReservado2: string;
  public dscReservado3: string;
  public dscReservado4: string;
  public dscReservado5: string;
  public dscReservado6: string;
  public dscReservado7: string;
  public dscReservado8: string;
  public indIpiNdestacDf: string;
  public numNfts: string;
  public indNfVendaTerceiros: string;
  public codSistemaOrig: string;
  public identScp: number;
  public codScp: string;
  public indPrestServ: string;
  public indTipoProc: string;
  public numProcJur: string;
  public indDecProc: string;
  public indTipoAquis: string;
  public vlrDescGilrat: string;
  public vlrDescSenar: string;
  public cnpjSubempreiteiro: string;
  public cnpjCpfProprietarioCno: string;
  public vlrRetSubempreitado: string;
  public numDocfisServ: string;
  public vlrFcpUfDest: string;
  public vlrIcmsUfDest: string;
  public vlrIcmsUfOrig: string;
  public vlrContribPrev: string;
  public vlrGilrat: string;
  public vlrContribSenar: string;
  public cpfCgc: string;
  public cpfCnpj: string;
  public numCertifQual: string;
  public obsReinf: string;
  public vlrTotAdic: string;
  public vlrRetServ: string;
  public vlrServ15: string;
  public vlrServ20: string;
  public vlrServ25: string;
  public vlrIpiDev: string;
  public vlrSest: string;
  public vlrSenat: string;
  public indFinEmissaoNfe: string;
  public numAutenticNfeSubst: string;
  public indVlrIcmsCobAntSt: string;
  public dataIndemiss: Date;
  public dataIndemisn: Date;
  public vDataTrab: Date;
  public indTribProdutorCp: string;
  public identModeloNfeSubst: number;
  public codModeloNfeSubst: string;
  public codAutenticNfeSubst: string;
  public vlrEnergiaInj: string;
  public vlrOutrasDed: string;
  public itemPortTare: string;

  constructor(data?: any) {
    if (data) {
      this.id = new TmpX07DoctoFiscalId(data.id);
      this.totaisMercadoria = new MerchandiseTotals(data.totaisMercadoria);
      this.totaisServico = new ServiceTotals(data.totaisServico);
      this.idDoctoFiscal = data.idDoctoFiscal;
      if (data.dataEmissao) {
        this.dataEmissao = new Date(data.dataEmissao);
      }
      this.codClassDocFis = data.codClassDocFis;
      this.identDocto = data.identDocto;
      this.identFisJur = data.identFisJur;
      this.identModelo = data.identModelo;
      this.codModelo = data.codModelo;
      this.identCfo = data.identCfo;
      this.codCfo = data.codCfo;
      this.identNaturezaOp = data.identNaturezaOp;
      this.codNaturezaOp = data.codNaturezaOp;
      this.numDocfisRef = data.numDocfisRef;
      this.serieDocfisRef = data.serieDocfisRef;
      this.subSerieDocfisRef = data.subSerieDocfisRef;
      this.numDecImpRef = data.numDecImpRef;
      if (data.dataSaidaRec) {
        this.dataSaidaRec = new Date(data.dataSaidaRec);
      }
      this.inscEstadSubstit = data.inscEstadSubstit;
      this.vlrProduto = data.vlrProduto ? data.vlrProduto.toFixed(2) : Number(0).toFixed(2);
      this.vlrTotNota = data.vlrTotNota ? data.vlrTotNota.toFixed(2) : Number(0).toFixed(2);
      this.qtdItensMercadoria = data.qtdItensMercadoria ? data.qtdItensMercadoria.toFixed(6) : Number(0).toFixed(6);
      this.vlrFrete = data.vlrFrete ? data.vlrFrete.toFixed(2) : Number(0).toFixed(2);
      this.vlrSeguro = data.vlrSeguro ? data.vlrSeguro.toFixed(2) : Number(0).toFixed(2);
      this.vlrOutras = data.vlrOutras ? data.vlrOutras.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseDifFrete = data.vlrBaseDifFrete ? data.vlrBaseDifFrete.toFixed(2) : Number(0).toFixed(2);
      this.vlrDesconto = data.vlrDesconto ? data.vlrDesconto.toFixed(2) : Number(0).toFixed(2);
      this.contribFinal = data.contribFinal;
      this.situacao = data.situacao;
      this.codIndice = data.codIndice;
      this.vlrNotaConv = data.vlrNotaConv ? data.vlrNotaConv.toFixed(4) : Number(0).toFixed(4);
      this.identConta = data.identConta;
      this.codConta = data.codConta;
      this.indModeloCupom = data.indModeloCupom;
      this.vlrContabCompl = data.vlrContabCompl ? data.vlrContabCompl.toFixed(2) : Number(0).toFixed(2);
      this.numControleDocto = data.numControleDocto;
      this.vlrAliqDestino = data.vlrAliqDestino ? data.vlrAliqDestino.toFixed(2) : Number(0).toFixed(2);
      this.vlrOutros1 = data.vlrOutros1 ? data.vlrOutros1.toFixed(2) : Number(0).toFixed(2);
      this.vlrOutros2 = data.vlrOutros2 ? data.vlrOutros2.toFixed(2) : Number(0).toFixed(2);
      this.vlrOutros3 = data.vlrOutros3 ? data.vlrOutros3.toFixed(2) : Number(0).toFixed(2);
      this.vlrOutros4 = data.vlrOutros4 ? data.vlrOutros4.toFixed(2) : Number(0).toFixed(2);
      this.vlrOutros5 = data.vlrOutros5 ? data.vlrOutros5.toFixed(2) : Number(0).toFixed(2);
      this.vlrAliqOutros1 = data.vlrAliqOutros1 ? data.vlrAliqOutros1.toFixed(2) : Number(0).toFixed(2);
      this.vlrAliqOutros2 = data.vlrAliqOutros2 ? data.vlrAliqOutros2.toFixed(2) : Number(0).toFixed(2);
      this.indNfEspecial = data.indNfEspecial;
      this.numMaquina = data.numMaquina;
      this.numCupomFinal = data.numCupomFinal;
      this.aliqTributoIcms = data.aliqTributoIcms ? data.aliqTributoIcms.toFixed(4) : Number(0).toFixed(4);
      this.baseTributoIcms = data.baseTributoIcms ? data.baseTributoIcms.toFixed(2) : Number(0).toFixed(2);
      this.vlrTributoIcms = data.vlrTributoIcms ? data.vlrTributoIcms.toFixed(2) : Number(0).toFixed(2);
      this.difAliqTribIcms = data.difAliqTribIcms ? data.difAliqTribIcms.toFixed(4) : Number(0).toFixed(4);
      this.obsTributoIcms = data.obsTributoIcms;
      this.identDetOpIcms = data.identDetOpIcms;
      this.codDetOpIcms = data.codDetOpIcms;
      this.aliqTributoIpi = data.aliqTributoIpi ? data.aliqTributoIpi.toFixed(4) : Number(0).toFixed(4);
      this.vlrTributoIpi = data.vlrTributoIpi ? data.vlrTributoIpi.toFixed(2) : Number(0).toFixed(2);
      this.obsTributoIpi = data.obsTributoIpi;
      this.identDetOpIpi = data.identDetOpIpi;
      this.codDetOpIpi = data.codDetOpIpi;
      this.aliqTributoIcmss = data.aliqTributoIcmss ? data.aliqTributoIcmss.toFixed(4) : Number(0).toFixed(4);
      this.vlrTributoIcmss = data.vlrTributoIcmss ? data.vlrTributoIcmss.toFixed(2) : Number(0).toFixed(2);
      this.obsTributoIcmss = data.obsTributoIcmss;
      this.identDetOpIcmss = data.identDetOpIcmss;
      this.codDetOpIcmss = data.codDetOpIcmss;
      this.aliqTributoIr = data.aliqTributoIr ? data.aliqTributoIr.toFixed(4) : Number(0).toFixed(4);
      this.vlrTributoIr = data.vlrTributoIr ? data.vlrTributoIr.toFixed(2) : Number(0).toFixed(2);
      this.aliqTributoIss = data.aliqTributoIss ? data.aliqTributoIss.toFixed(4) : Number(0).toFixed(4);
      this.vlrTributoIss = data.vlrTributoIss ? data.vlrTributoIss.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIcms1 = data.vlrBaseIcms1 ? data.vlrBaseIcms1.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIcms2 = data.vlrBaseIcms2 ? data.vlrBaseIcms2.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIcms3 = data.vlrBaseIcms3 ? data.vlrBaseIcms3.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIcms4 = data.vlrBaseIcms4 ? data.vlrBaseIcms4.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIpi1 = data.vlrBaseIpi1 ? data.vlrBaseIpi1.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIpi2 = data.vlrBaseIpi2 ? data.vlrBaseIpi2.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIpi3 = data.vlrBaseIpi3 ? data.vlrBaseIpi3.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIpi4 = data.vlrBaseIpi4 ? data.vlrBaseIpi4.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIcmss = data.vlrBaseIcmss ? data.vlrBaseIcmss.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIr1 = data.vlrBaseIr1 ? data.vlrBaseIr1.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIr2 = data.vlrBaseIr2 ? data.vlrBaseIr2.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIss1 = data.vlrBaseIss1 ? data.vlrBaseIss1.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIss2 = data.vlrBaseIss2 ? data.vlrBaseIss2.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIss3 = data.vlrBaseIss3 ? data.vlrBaseIss3.toFixed(2) : Number(0).toFixed(2);
      this.numProcesso = data.numProcesso;
      this.indGravacao = data.indGravacao;
      this.indTpFrete = data.indTpFrete;
      this.codMunicipio = data.codMunicipio;
      this.indTransfCred = data.indTransfCred;
      if (data.datDi) {
        this.datDi = new Date(data.datDi);
      }
      this.vlrTomServico = data.vlrTomServico ? data.vlrTomServico.toFixed(2) : Number(0).toFixed(2);
      if (data.datEscrExtemp) {
        this.datEscrExtemp = new Date(data.datEscrExtemp);
      }
      this.codTribInt = data.codTribInt;
      this.codRegiao = data.codRegiao;
      if (data.datAutentic) {
        this.datAutentic = new Date(data.datAutentic);
      }
      this.codCanalDistrib = data.codCanalDistrib;
      this.indCredIcmss = data.indCredIcmss;
      this.vlrIcmsNdestac = data.vlrIcmsNdestac ? data.vlrIcmsNdestac.toFixed(2) : Number(0).toFixed(2);
      this.vlrIpiNdestac = data.vlrIpiNdestac ? data.vlrIpiNdestac.toFixed(2) : Number(0).toFixed(2);
      this.vlrTotIn = data.vlrTotIn ? data.vlrTotIn.toFixed(2) : Number(0).toFixed(2);
      this.vlrIcmsIn = data.vlrIcmsIn ? data.vlrIcmsIn.toFixed(2) : Number(0).toFixed(2);
      this.vlrIcmsB1In = data.vlrIcmsB1In ? data.vlrIcmsB1In.toFixed(2) : Number(0).toFixed(2);
      this.vlrIcmsB2In = data.vlrIcmsB2In ? data.vlrIcmsB2In.toFixed(2) : Number(0).toFixed(2);
      this.vlrIcmsB3In = data.vlrIcmsB3In ? data.vlrIcmsB3In.toFixed(2) : Number(0).toFixed(2);
      this.vlrIcmsB4In = data.vlrIcmsB4In ? data.vlrIcmsB4In.toFixed(2) : Number(0).toFixed(2);
      this.baseIpi = data.baseIpi ? data.baseIpi.toFixed(2) : Number(0).toFixed(2);
      this.vlrIpi = data.vlrIpi ? data.vlrIpi.toFixed(2) : Number(0).toFixed(2);
      this.vlrIpiIn = data.vlrIpiIn ? data.vlrIpiIn.toFixed(2) : Number(0).toFixed(2);
      this.vlrIpiB1In = data.vlrIpiB1In ? data.vlrIpiB1In.toFixed(2) : Number(0).toFixed(2);
      this.vlrIpiB2In = data.vlrIpiB2In ? data.vlrIpiB2In.toFixed(2) : Number(0).toFixed(2);
      this.vlrIpiB3In = data.vlrIpiB3In ? data.vlrIpiB3In.toFixed(2) : Number(0).toFixed(2);
      this.vlrIpiB4In = data.vlrIpiB4In ? data.vlrIpiB4In.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseInss = data.vlrBaseInss ? data.vlrBaseInss.toFixed(2) : Number(0).toFixed(2);
      this.vlrAliqInss = data.vlrAliqInss ? data.vlrAliqInss.toFixed(2) : Number(0).toFixed(2);
      this.vlrInssRetido = data.vlrInssRetido ? data.vlrInssRetido.toFixed(2) : Number(0).toFixed(2);
      this.vlrMatAplicIss = data.vlrMatAplicIss ? data.vlrMatAplicIss.toFixed(2) : Number(0).toFixed(2);
      this.vlrSubemprIss = data.vlrSubemprIss ? data.vlrSubemprIss.toFixed(2) : Number(0).toFixed(2);
      this.indMunicIss = data.indMunicIss;
      this.indClasseOpIss = data.indClasseOpIss;
      if (data.datFatoGerador) {
        this.datFatoGerador = new Date(data.datFatoGerador);
      }
      if (data.datCancelamento) {
        this.datCancelamento = new Date(data.datCancelamento);
      }
      this.numPagina = data.numPagina;
      this.numLivro = data.numLivro;
      this.nroAidfNf = data.nroAidfNf;
      if (data.datValidDocAidf) {
        this.datValidDocAidf = new Date(data.datValidDocAidf);
      }
      this.indFatura = data.indFatura ? data.indFatura : '1';
      this.identQuitacao = data.identQuitacao;
      this.codQuitacao = data.codQuitacao;
      this.numSeloContIcms = data.numSeloContIcms;
      this.vlrBasePis = data.vlrBasePis ? data.vlrBasePis.toFixed(2) : Number(0).toFixed(2);
      this.vlrPis = data.vlrPis ? data.vlrPis.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseCofins = data.vlrBaseCofins ? data.vlrBaseCofins.toFixed(2) : Number(0).toFixed(2);
      this.vlrCofins = data.vlrCofins ? data.vlrCofins.toFixed(2) : Number(0).toFixed(2);
      this.baseIcmsOrigdest = data.baseIcmsOrigdest ? data.baseIcmsOrigdest.toFixed(2) : Number(0).toFixed(2);
      this.vlrIcmsOrigdest = data.vlrIcmsOrigdest ? data.vlrIcmsOrigdest.toFixed(2) : Number(0).toFixed(2);
      this.aliqIcmsOrigdest = data.aliqIcmsOrigdest ? data.aliqIcmsOrigdest.toFixed(4) : Number(0).toFixed(4);
      this.vlrDescCondic = data.vlrDescCondic ? data.vlrDescCondic.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIseIcmss = data.vlrBaseIseIcmss ? data.vlrBaseIseIcmss.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseOutIcmss = data.vlrBaseOutIcmss ? data.vlrBaseOutIcmss.toFixed(2) : Number(0).toFixed(2);
      this.vlrRedBaseIcmss = data.vlrRedBaseIcmss ? data.vlrRedBaseIcmss.toFixed(2) : Number(0).toFixed(2);
      this.percRedBaseIcms = data.percRedBaseIcms ? data.percRedBaseIcms.toFixed(2) : Number(0).toFixed(2);
      this.identFisjurCpdir = data.identFisjurCpdir;
      this.indFisjurCpdir = data.indFisjurCpdir;
      this.codFisjurCpdir = data.codFisjurCpdir;
      this.indMedidajudicial = data.indMedidajudicial;
      this.identUfOrigDest = data.identUfOrigDest;
      this.codUfOrigDest = data.codUfOrigDest;
      this.indCompraVenda = data.indCompraVenda;
      this.codTpDispSeg = data.codTpDispSeg;
      this.numCtrDisp = data.numCtrDisp;
      this.numFimDocto = data.numFimDocto;
      this.identUfDestino = data.identUfDestino;
      this.codUfDestino = data.codUfDestino;
      this.serieCtrDisp = data.serieCtrDisp;
      this.subSerieCtrDisp = data.subSerieCtrDisp;
      this.indSituacaoEsp = data.indSituacaoEsp;
      this.inscEstadual = data.inscEstadual;
      this.codPagtoInss = data.codPagtoInss;
      if (data.datOperacao) {
        this.datOperacao = new Date(data.datOperacao);
      }
      this.usuario = data.usuario;
      if (data.datInternAm) {
        this.datInternAm = new Date(data.datInternAm);
      }
      this.identFisjurLsg = data.identFisjurLsg;
      this.indFisjurLsg = data.indFisjurLsg;
      this.codFisjurLsg = data.codFisjurLsg;
      this.comprovExp = data.comprovExp;
      this.numFinalCrtDisp = data.numFinalCrtDisp;
      this.numAlvara = data.numAlvara;
      this.notificaSefaz = data.notificaSefaz;
      this.internaSuframa = data.internaSuframa;
      this.indNotaServico = data.indNotaServico;
      this.codMotivo = data.codMotivo;
      this.codAmparo = data.codAmparo;
      this.identEstadoAmpar = data.identEstadoAmpar;
      this.codEstadoAmpar = data.codEstadoAmpar;
      this.obsComplMotivo = data.obsComplMotivo;
      this.indTpRet = data.indTpRet;
      this.indTpTomador = data.indTpTomador;
      this.codAntecSt = data.codAntecSt;
      this.indTelecom = data.indTelecom;
      this.cnpjArmazOrig = data.cnpjArmazOrig;
      this.identUfArmazOrig = data.identUfArmazOrig;
      this.codUfArmazOrig = data.codUfArmazOrig;
      this.insEstArmazOrig = data.insEstArmazOrig;
      this.cnpjArmazDest = data.cnpjArmazDest;
      this.identUfArmazDest = data.identUfArmazDest;
      this.codUfArmazDest = data.codUfArmazDest;
      this.insEstArmazDest = data.insEstArmazDest;
      this.obsInfAdicNf = data.obsInfAdicNf;
      this.vlrBaseInss2 = data.vlrBaseInss2 ? data.vlrBaseInss2.toFixed(2) : Number(0).toFixed(2);
      this.vlrAliqInss2 = data.vlrAliqInss2 ? data.vlrAliqInss2.toFixed(2) : Number(0).toFixed(2);
      this.vlrInssRetido2 = data.vlrInssRetido2 ? data.vlrInssRetido2.toFixed(2) : Number(0).toFixed(2);
      this.codPagtoInss2 = data.codPagtoInss2;
      this.vlrBasePisSt = data.vlrBasePisSt ? data.vlrBasePisSt.toFixed(2) : Number(0).toFixed(2);
      this.vlrAliqPisSt = data.vlrAliqPisSt ? data.vlrAliqPisSt.toFixed(4) : Number(0).toFixed(4);
      this.vlrPisSt = data.vlrPisSt ? data.vlrPisSt.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseCofinsSt = data.vlrBaseCofinsSt ? data.vlrBaseCofinsSt.toFixed(2) : Number(0).toFixed(2);
      this.vlrAliqCofinsSt = data.vlrAliqCofinsSt ? data.vlrAliqCofinsSt.toFixed(4) : Number(0).toFixed(4);
      this.vlrCofinsSt = data.vlrCofinsSt ? data.vlrCofinsSt.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseCsll = data.vlrBaseCsll ? data.vlrBaseCsll.toFixed(2) : Number(0).toFixed(2);
      this.vlrAliqCsll = data.vlrAliqCsll ? data.vlrAliqCsll.toFixed(4) : Number(0).toFixed(4);
      this.vlrCsll = data.vlrCsll ? data.vlrCsll.toFixed(2) : Number(0).toFixed(2);
      this.vlrAliqPis = data.vlrAliqPis ? data.vlrAliqPis.toFixed(4) : Number(0).toFixed(4);
      this.vlrAliqCofins = data.vlrAliqCofins ? data.vlrAliqCofins.toFixed(4) : Number(0).toFixed(4);
      this.baseIcmssSubstituido = data.baseIcmssSubstituido ? data.baseIcmssSubstituido.toFixed(2) : Number(0).toFixed(2);
      this.vlrIcmssSubstituido = data.vlrIcmssSubstituido ? data.vlrIcmssSubstituido.toFixed(2) : Number(0).toFixed(2);
      this.codCei = data.codCei;
      this.vlrJurosInss = data.vlrJurosInss ? data.vlrJurosInss.toFixed(2) : Number(0).toFixed(2);
      this.vlrMultaInss = data.vlrMultaInss ? data.vlrMultaInss.toFixed(2) : Number(0).toFixed(2);
      this.indSituacaoEspSt = data.indSituacaoEspSt;
      this.vlrIcmssNdestac = data.vlrIcmssNdestac ? data.vlrIcmssNdestac.toFixed(2) : Number(0).toFixed(2);
      this.indDoctoRec = data.indDoctoRec;
      if (data.datPgtoGnreDarj) {
        this.datPgtoGnreDarj = new Date(data.datPgtoGnreDarj);
      }
      if (data.dtPagtoNf) {
        this.dtPagtoNf = new Date(data.dtPagtoNf);
      }
      this.indOrigemInfo = data.indOrigemInfo;
      this.horaSaida = data.horaSaida;
      this.codSitDocfis = data.codSitDocfis;
      this.identObservacao = data.identObservacao;
      this.codObservacao = data.codObservacao;
      this.identSituacaoA = data.identSituacaoA;
      this.codSituacaoA = data.codSituacaoA;
      this.identSituacaoB = data.identSituacaoB;
      this.codSituacaoB = data.codSituacaoB;
      this.numContReduc = data.numContReduc;
      this.codMunicipioOrig = data.codMunicipioOrig;
      this.codMunicipioDest = data.codMunicipioDest;
      this.codCfps = data.codCfps;
      this.numLancamento = data.numLancamento;
      this.vlrMatProp = data.vlrMatProp ? data.vlrMatProp.toFixed(2) : Number(0).toFixed(2);
      this.vlrMatTerc = data.vlrMatTerc ? data.vlrMatTerc.toFixed(2) : Number(0).toFixed(2);
      this.vlrBaseIssRetido = data.vlrBaseIssRetido ? data.vlrBaseIssRetido.toFixed(2) : Number(0).toFixed(2);
      this.vlrIssRetido = data.vlrIssRetido ? data.vlrIssRetido.toFixed(2) : Number(0).toFixed(2);
      this.vlrDeducaoIss = data.vlrDeducaoIss ? data.vlrDeducaoIss.toFixed(2) : Number(0).toFixed(2);
      this.codMunicArmazOrig = data.codMunicArmazOrig;
      this.insMunicArmazOrig = data.insMunicArmazOrig;
      this.codMunicArmazDest = data.codMunicArmazDest;
      this.insMunicArmazDest = data.insMunicArmazDest;
      this.identClasseConsumo = data.identClasseConsumo;
      this.codClasseConsumo = data.codClasseConsumo;
      this.indEspecifReceita = data.indEspecifReceita;
      this.numContrato = data.numContrato;
      this.codAreaTerminal = data.codAreaTerminal;
      this.codTpUtil = data.codTpUtil;
      this.grupoTensao = data.grupoTensao;
      if (data.dataConsumoIni) {
        this.dataConsumoIni = new Date(data.dataConsumoIni);
      }
      if (data.dataConsumoFim) {
        this.dataConsumoFim = new Date(data.dataConsumoFim);
      }
      if (data.dataConsumoLeit) {
        this.dataConsumoLeit = new Date(data.dataConsumoLeit);
      }
      this.qtdContratadaPonta = data.qtdContratadaPonta ? data.qtdContratadaPonta.toFixed(6) : Number(0).toFixed(6);
      this.qtdContratadaFponta = data.qtdContratadaFponta ? data.qtdContratadaFponta.toFixed(6) : Number(0).toFixed(6);
      this.qtdConsumoTotal = data.qtdConsumoTotal ? data.qtdConsumoTotal.toFixed(6) : Number(0).toFixed(6);
      this.identUfConsumo = data.identUfConsumo;
      this.codUfConsumo = data.codUfConsumo;
      this.codMunicConsumo = data.codMunicConsumo;
      this.codOperEspSt = data.codOperEspSt;
      this.atoNormativo = data.atoNormativo;
      this.numAtoNormativo = data.numAtoNormativo;
      this.anoAtoNormativo = data.anoAtoNormativo;
      this.capitulacaoNorma = data.capitulacaoNorma;
      this.vlrOutrasEntid = data.vlrOutrasEntid ? data.vlrOutrasEntid.toFixed(2) : Number(0).toFixed(2);
      this.vlrTerceiros = data.vlrTerceiros ? data.vlrTerceiros.toFixed(2) : Number(0).toFixed(2);
      this.indTpComplIcms = data.indTpComplIcms;
      this.vlrBaseCide = data.vlrBaseCide ? data.vlrBaseCide.toFixed(2) : Number(0).toFixed(2);
      this.vlrAliqCide = data.vlrAliqCide ? data.vlrAliqCide.toFixed(4) : Number(0).toFixed(4);
      this.vlrCide = data.vlrCide ? data.vlrCide.toFixed(2) : Number(0).toFixed(2);
      this.codVerificNfe = data.codVerificNfe;
      this.codTpRpsNfe = data.codTpRpsNfe;
      this.numRpsNfe = data.numRpsNfe;
      this.serieRpsNfe = data.serieRpsNfe;
      if (data.datEmissaoRpsNfe) {
        this.datEmissaoRpsNfe = new Date(data.datEmissaoRpsNfe);
      }
      this.dscServicoNfe = data.dscServicoNfe;
      this.numAutenticNfe = data.numAutenticNfe;
      this.numDvNfe = data.numDvNfe;
      this.modeloNfDms = data.modeloNfDms;
      this.codModeloCotepe = data.codModeloCotepe;
      this.vlrComissao = data.vlrComissao ? data.vlrComissao.toFixed(2) : Number(0).toFixed(2);
      this.indNfeDenegInut = data.indNfeDenegInut;
      this.indNfRegEspecial = data.indNfRegEspecial;
      this.vlrAbatNtributado = data.vlrAbatNtributado ? data.vlrAbatNtributado.toFixed(2) : Number(0).toFixed(2);
      this.vlrOutrosIcms = data.vlrOutrosIcms ? data.vlrOutrosIcms.toFixed(2) : Number(0).toFixed(2);
      this.horaEmissao = data.horaEmissao;
      this.obsDadosFatura = data.obsDadosFatura;
      this.horaSaidaRec = data.horaSaidaRec;
      this.identFisConces = data.identFisConces;
      this.indFisConces = data.indFisConces;
      this.codFisConces = data.codFisConces;
      this.codAutentic = data.codAutentic;
      this.indPortCat44 = data.indPortCat44;
      this.numAutenticNfeAux = data.numAutenticNfeAux;
      this.vlrBaseInssRural = data.vlrBaseInssRural ? data.vlrBaseInssRural.toFixed(2) : Number(0).toFixed(2);
      this.vlrAliqInssRural = data.vlrAliqInssRural ? data.vlrAliqInssRural.toFixed(2) : Number(0).toFixed(2);
      this.vlrInssRural = data.vlrInssRural ? data.vlrInssRural.toFixed(2) : Number(0).toFixed(2);
      this.identClasseConsumoSefPe = data.identClasseConsumoSefPe;
      this.codClasseConsumoSefPe = data.codClasseConsumoSefPe;
      this.vlrPisRetido = data.vlrPisRetido ? data.vlrPisRetido.toFixed(2) : Number(0).toFixed(2);
      this.vlrCofinsRetido = data.vlrCofinsRetido ? data.vlrCofinsRetido.toFixed(2) : Number(0).toFixed(2);
      if (data.datLancPisCofins) {
        this.datLancPisCofins = new Date(data.datLancPisCofins);
      }
      this.indPisCofinsExtemp = data.indPisCofinsExtemp;
      this.codSitPis = data.codSitPis;
      this.codSitCofins = data.codSitCofins;
      this.indNatFrete = data.indNatFrete;
      this.categoriaTrab = data.categoriaTrab;
      this.codNatRec = data.codNatRec;
      this.indVendaCanc = data.indVendaCanc;
      this.indNatBaseCred = data.indNatBaseCred;
      this.indNfContingencia = data.indNfContingencia;
      this.vlrAcrescimo = data.vlrAcrescimo ? data.vlrAcrescimo.toFixed(2) : Number(0).toFixed(2);
      this.vlrAntecipTrib = data.vlrAntecipTrib ? data.vlrAntecipTrib.toFixed(2) : Number(0).toFixed(2);
      this.dscReservado1 = data.dscReservado1;
      this.dscReservado2 = data.dscReservado2;
      this.dscReservado3 = data.dscReservado3;
      this.dscReservado4 = data.dscReservado4;
      this.dscReservado5 = data.dscReservado5;
      this.dscReservado6 = data.dscReservado6 ? data.dscReservado6.toFixed(2) : Number(0).toFixed(2);
      this.dscReservado7 = data.dscReservado7 ? data.dscReservado7.toFixed(2) : Number(0).toFixed(2);
      this.dscReservado8 = data.dscReservado8 ? data.dscReservado8.toFixed(2) : Number(0).toFixed(2);
      this.indIpiNdestacDf = data.indIpiNdestacDf;
      this.numNfts = data.numNfts;
      this.indNfVendaTerceiros = data.indNfVendaTerceiros;
      this.codSistemaOrig = data.codSistemaOrig;
      this.identScp = data.identScp;
      this.codScp = data.codScp;
      this.indPrestServ = data.indPrestServ;
      this.indTipoProc = data.indTipoProc ? data.indTipoProc : '1';
      this.numProcJur = data.numProcJur;
      this.indDecProc = data.indDecProc;
      this.indTipoAquis = data.indTipoAquis;
      this.vlrDescGilrat = data.vlrDescGilrat ? data.vlrDescGilrat.toFixed(2) : Number(0).toFixed(2);
      this.vlrDescSenar = data.vlrDescSenar ? data.vlrDescSenar.toFixed(2) : Number(0).toFixed(2);
      this.cnpjSubempreiteiro = data.cnpjSubempreiteiro;
      this.cnpjCpfProprietarioCno = data.cnpjCpfProprietarioCno;
      this.vlrRetSubempreitado = data.vlrRetSubempreitado ? data.vlrRetSubempreitado.toFixed(2) : Number(0).toFixed(2);
      this.numDocfisServ = data.numDocfisServ;
      this.vlrFcpUfDest = data.vlrFcpUfDest ? data.vlrFcpUfDest.toFixed(2) : Number(0).toFixed(2);
      this.vlrIcmsUfDest = data.vlrIcmsUfDest ? data.vlrIcmsUfDest.toFixed(2) : Number(0).toFixed(2);
      this.vlrIcmsUfOrig = data.vlrIcmsUfOrig ? data.vlrIcmsUfOrig.toFixed(2) : Number(0).toFixed(2);
      this.vlrContribPrev = data.vlrContribPrev ? data.vlrContribPrev.toFixed(2) : Number(0).toFixed(2);
      this.vlrGilrat = data.vlrGilrat ? data.vlrGilrat.toFixed(2) : Number(0).toFixed(2);
      this.vlrContribSenar = data.vlrContribSenar ? data.vlrContribSenar.toFixed(2) : Number(0).toFixed(2);
      this.cpfCgc = data.cpfCgc;
      this.cpfCnpj = data.cpfCnpj;
      this.numCertifQual = data.numCertifQual;
      this.obsReinf = data.obsReinf;
      this.vlrTotAdic = data.vlrTotAdic ? data.vlrTotAdic.toFixed(2) : Number(0).toFixed(2);
      this.vlrRetServ = data.vlrRetServ ? data.vlrRetServ.toFixed(2) : Number(0).toFixed(2);
      this.vlrServ15 = data.vlrServ15 ? data.vlrServ15.toFixed(2) : Number(0).toFixed(2);
      this.vlrServ20 = data.vlrServ20 ? data.vlrServ20.toFixed(2) : Number(0).toFixed(2);
      this.vlrServ25 = data.vlrServ25 ? data.vlrServ25.toFixed(2) : Number(0).toFixed(2);
      this.vlrIpiDev = data.vlrIpiDev ? data.vlrIpiDev.toFixed(2) : Number(0).toFixed(2);
      this.vlrSest = data.vlrSest ? data.vlrSest.toFixed(2) : Number(0).toFixed(2);
      this.vlrSenat = data.vlrSenat ? data.vlrSenat.toFixed(2) : Number(0).toFixed(2);
      this.indFinEmissaoNfe = data.indFinEmissaoNfe;
      this.numAutenticNfeSubst = data.numAutenticNfeSubst;
      this.indVlrIcmsCobAntSt = data.indVlrIcmsCobAntSt;
      if (data.dataIndemiss) {
        this.dataIndemiss = new Date(data.dataIndemiss);
      }
      if (data.dataIndemisn) {
        this.dataIndemisn = new Date(data.dataIndemisn);
      }
      if (data.vDataTrab) {
        this.vDataTrab = new Date(data.vDataTrab);
      }
      this.indTribProdutorCp = data.indTribProdutorCp;
      this.identModeloNfeSubst = data.identModeloNfeSubst;
      this.codModeloNfeSubst = data.codModeloNfeSubst;
      this.codAutenticNfeSubst = data.codAutenticNfeSubst;
      this.vlrEnergiaInj = data.vlrEnergiaInj ? data.vlrEnergiaInj.toFixed(2) : Number(0).toFixed(2);
      this.vlrOutrasDed = data.vlrOutrasDed ? data.vlrOutrasDed.toFixed(2) : Number(0).toFixed(2);
      this.itemPortTare = data.itemPortTare;
    }
  }
}