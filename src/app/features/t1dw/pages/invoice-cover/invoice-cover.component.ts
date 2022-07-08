import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BentoComboboxColumn } from '@bento/bento-ng';
import { NgForm } from '@angular/forms';
import { StorageService } from 'src/app/core/services/storage.service';
import GridData from 'src/app/shared/components/flex-grid/flex-grid.model';
import { PessoaService } from '../../services/pessoa.service';
import { SelectModel } from '../../../../shared/components/select/select-model';
import { InvoiceService } from '../../services/invoice.service';
import TmpX07DoctoFiscal from '../../model/tmp-x07-docto-fiscal.model';
import { EstabelecimentoService } from '../../services/estabelecimento.service';
import { Pagination } from '../../model/interface.model';
import TmpX07DoctoFiscalId from '../../model/tmp-x07-docto-fiscal-id.model';
import { TipoDocumentoService } from '../../services/tipo-documento.service';
import { ModeloDocumentoService } from '../../services/modelo-documento.service';
import { TributacaoInternaService } from '../../services/tributacao-interna.service';
import GridFilter from '../../model/grid-filter.model';
import { constants } from '../../constants/constants';
import { StateParams } from '../../model/state-params.model';

@Component({
  selector: 'app-invoice-cover',
  templateUrl: './invoice-cover.component.html',
  styleUrls: ['./invoice-cover.component.sass'],
})
export class InvoiceCoverComponent implements OnInit {
  private stateParams: StateParams;

  codEstab: string = '001AM';

  resetErrors: boolean;

  coverData: TmpX07DoctoFiscal = new TmpX07DoctoFiscal();

  estabColumns: BentoComboboxColumn[] = [
    {
      name: 'codEstab',
      width: '170px',
    },
    {
      name: 'razaoSocial',
      width: '250px',
    },
    {
      name: 'nomeFantasia',
      width: '350px',
    },
  ];

  estabHeaderTranslation: any = {
    codEstab: 'Cód. Estabelecimento',
    razaoSocial: 'Razão Social',
    nomeFantasia: 'Nome Fantasia',
  };

  movtoESItems: SelectModel[] = [
    { value: '', label: 'Selecione uma opção' },
    { value: '1', label: '1 - Doc. de entrada, documentos de terceiros' },
    { value: '2', label: '2 - Doc. de entrada emitida pelo estabelecimento, acolhendo notas de produtores agropecuarios' },
    {
      value: '3',
      label: '3 - Doc. de entrada emitida pelo estabelecimento, por retorno de mercadorias não entregues ao destinatário',
    },
    { value: '4', label: '4 - Doc. de entrada emitida pelo estabelecimento, outros motivos legais' },
    { value: '5', label: '5 - Doc. de entrada emitida pelo estabelecimento, globalizando conhecimentos de frete' },
    { value: '6', label: '9 - Doc. de saída' },
  ];

  normDevItems: SelectModel[] = [
    { value: '', label: '' },
    { value: '1', label: '1 - Normal' },
    { value: '2', label: '2 - Devolução' },
  ];

  modeloNfDmItems: SelectModel[] = [
    { value: '', label: '' },
    { value: '01', label: '01 - Nota Fiscal' },
    { value: '1B', label: '1B - Nota Fiscal Avulsa' },
    { value: '02', label: '02 - Nota Fiscal de Venda a Consumidor' },
    { value: '2D', label: '2D - Cupom Fiscal emitido por ECF' },
    { value: '2E', label: '2E - Bilhete de Passagem emitido por ECF' },
    { value: '3A', label: '3A - Nota Fiscal de Serviços - Modelo Simplificado (modelo 3-A)' },
    { value: '3B', label: '3B - Nota Fiscal de Serviços - Modelo Avulso' },
    { value: '03', label: '03 - Nota Fiscal de Serviços (modelo 3)' },
    { value: '04', label: '04 - Nota Fiscal de Produtor' },
    { value: '06', label: '06 - Nota Fiscal/Conta de Energia Elétrica' },
    { value: '07', label: '07 - Nota Fiscal de Serviço de Transporte' },
    { value: '08', label: '08 - Conhecimento de Transporte Rodoviário de Cargas' },
    { value: '8B', label: '8B - Conhecimento de Transporte de Cargas Avulso' },
    { value: '09', label: '09 - Conhecimento de Transporte Aquaviário de Cargas' },
    { value: '10', label: '10 - Conhecimento Aéreo' },
    { value: '11', label: '11 - Conhecimento de Transporte Ferroviário de Cargas' },
    { value: '13', label: '13 - Bilhete de Passagem Rodoviário' },
    { value: '14', label: '14 - Bilhete de Passagem Aquaviário' },
    { value: '15', label: '15 - Bilhete de Passagem e Nota de Bagagem' },
    { value: '16', label: '16 - Bilhete de Passagem Ferroviário' },
    { value: '17', label: '17 - Despacho de Transporte' },
    { value: '18', label: '18 - Resumo de Movimento Diário' },
    { value: '20', label: '20 - Ordem de Coleta de Cargas' },
    { value: '21', label: '21 - Nota Fiscal de Serviço de Comunicação' },
    { value: '22', label: '22 - Nota Fiscal de Serviço de Telecomunicação' },
    { value: '23', label: '23 - GNRE' },
    { value: '24', label: '24 - Autorização de Carregamento e Transporte' },
    { value: '25', label: '25 - Manifesto de Carga' },
    { value: '26', label: '26 - Conhecimento de Transporte Multimodal de Cargas' },
    { value: '27', label: '27 - Nota Fiscal de Serviço de Transporte Ferroviário' },
    { value: '28', label: '28 - Nota Fiscal/Conta de Fornecimento de Gás Canalizada' },
    { value: '29', label: '29 - Nota Fiscal/Conta de Fornecimento de Água Canalizada' },
    { value: '30', label: '30 - Manifesto de Vôo' },
    { value: '55', label: '55 - Nota Fiscal Eletrônica (modelo 55)' },
    { value: '57', label: '57 - Conhecimento de Transporte Eletrônico' },
    { value: '58', label: '58 - Manifesto Eletrônico de Documentos Fiscais - MDF-e' },
    { value: '59', label: '59 - Cupom Fiscal Eletrônico SAT CF-e' },
    { value: '60', label: '60 - Cupom Fiscal Eletrônico CF-e-ECF' },
    { value: '63', label: '63 - Bilhete de Passagem Eletrônico (BP-e)' },
    { value: '65', label: '65 - Nota Fiscal Eletrônica para Consumidor Final' },
    { value: '66', label: '66 - Nota Fiscal de Energia Eletrica Eletronica - NF3e' },
    { value: '67', label: '67 - Conhecimento de Transporte Eletrônico para Outros' },
  ];

  codClassDocFisItems: SelectModel[] = [
    { value: '', label: '' },
    { value: '1', label: '1 - Mercadoria' },
    { value: '2', label: '2 - Serviço' },
    { value: '3', label: '3 - Mercadoria e Serviço' },
    { value: '7', label: '7 - Notas Fiscais de Mercadoria não Escrituradas' },
    { value: '8', label: '8 - Notas Fiscais de Serviço não Escrituradas' },
    { value: '9', label: '9 - Outros Documentos não escriturados' },
    { value: 'I', label: 'I - Documento Internacional/Invoice' },
  ];

  defaultColumns: BentoComboboxColumn[] = [
    {
      name: 'codigo',
      width: '20%',
    },
    {
      name: 'descricao',
      width: '80%',
    },
  ];

  defaultHeaderTranslation: any = {
    codigo: 'Código',
    descricao: 'Descrição',
  };

  @ViewChild('f') private form: NgForm;

  validations = {
    required: '{0} é obrigatório',
  };

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private estabelecimentoService: EstabelecimentoService,
    private tipoDocumentoService: TipoDocumentoService,
    private storage: StorageService,
    private modeloDocumentoService: ModeloDocumentoService,
    private tributacaoInternaService: TributacaoInternaService,
    private pessoaService: PessoaService,
    private storageService: StorageService
  ) {
    this.coverData = new TmpX07DoctoFiscal();
    this.coverData.id = new TmpX07DoctoFiscalId();
  }

  ngOnInit(): void {
    this.stateParams = this.storageService.getObject('stateParams');
    const moduleData: any = this.storage.getObject('moduleData');
    this.coverData.id.codEmpresa = moduleData.company.id;
    if (this.stateParams.invoiceId) {
      this.findInvoiceById(this.stateParams.invoiceId);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  isDisabled() {
    return false;
  }

  private findInvoiceById(invoiceId: string) {
    this.invoiceService.getInvoiceById(invoiceId).then((value: any) => {
      this.coverData = new TmpX07DoctoFiscal(value);
    });
  }

  loadEstabelecimentos = (page: number, size: number, filter: string, unique: boolean): Promise<any> => {
    if (unique) {
      return this.estabelecimentoService.findByCodEmpresaAndCodEstab(this.coverData.id.codEmpresa, filter);
    }
    const pagination: Pagination = { page, size };
    return this.estabelecimentoService.autocomplete(this.coverData.id.codEmpresa, pagination, filter);
  };

  loadTipoDocumento = (page: number, size: number, filter: string, unique: boolean): Promise<any> => {
    if (unique) {
      return this.tipoDocumentoService.findByCodigo(
        this.coverData.id.codEmpresa,
        this.coverData.id.codEstab,
        this.coverData.id.dataFiscal,
        filter
      );
    }

    const pagination: Pagination = { page, size };
    return this.tipoDocumentoService.autocomplete(
      this.coverData.id.codEmpresa,
      this.coverData.id.codEstab,
      this.coverData.id.dataFiscal,
      pagination,
      filter
    );
  };

  loadModeloDocumento = (page: number, size: number, filter: string, unique: boolean): Promise<any> => {
    if (unique) {
      return this.modeloDocumentoService.findByCodigo(
        this.coverData.id.codEmpresa,
        this.coverData.id.codEstab,
        this.coverData.id.dataFiscal,
        filter
      );
    }

    const pagination: Pagination = { page, size };
    return this.modeloDocumentoService.autocomplete(
      this.coverData.id.codEmpresa,
      this.coverData.id.codEstab,
      this.coverData.id.dataFiscal,
      filter,
      pagination
    );
  };

  loadTributacaoInterna = (page: number, size: number, filter: string, unique: boolean): Promise<any> => {
    if (unique) {
      return this.tributacaoInternaService.findByCodigo(filter);
    }

    const pagination: Pagination = { page, size };
    return this.tributacaoInternaService.autocomplete(filter, pagination);
  };

  pessoaFisJurModalGrid: GridData[] = [
    {
      header: 'Indicador',
      binding: 'indFisJur',
    },
    {
      header: 'Código',
      binding: 'codigo',
    },
    {
      header: 'CPF / CNPJ',
      binding: 'cpfCgc',
    },
    {
      header: 'Cód. Atividade',
      binding: 'codAtividade',
    },
    {
      header: 'Insc. Estadual',
      binding: 'inscEstadual',
    },
    {
      header: 'Razão Social',
      binding: 'razaoSocial',
    },
    {
      header: 'Nome Fantasia',
      binding: 'nomeFantasia',
    },
  ];

  pessoaFisJurModalSearch = (gridFilters: GridFilter[], pagination: Pagination): Promise<any> => {
    return this.pessoaService.search(
      gridFilters,
      this.coverData.id.codEmpresa,
      this.coverData.id.codEstab,
      this.coverData.id.dataFiscal,
      pagination
    );
  };

  pessoaFisJurSelected = (item: any): void => {
    this.coverData.id.indFisJur = item.indFisJur;
    this.coverData.id.codFisJur = item.codigo;
    this.coverData.razaoSocialFisJur = item.razaoSocial;
    this.coverData.fisJurCpfCnpj = item.cpfCgc;
  };

  naturalLegalIndicators = constants.NATURAL_LEGAL_INDICATOR;

  onSubmit = () => {};
}
