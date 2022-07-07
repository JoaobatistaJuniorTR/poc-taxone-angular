import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BentoComboboxColumn } from '@bento/bento-ng';
import { NgForm } from '@angular/forms';
import { StorageService } from 'src/app/core/services/storage.service';
import GridData from 'src/app/shared/components/modal/grid-data.model';
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

@Component({
  selector: 'app-invoice-cover',
  templateUrl: './invoice-cover.component.html',
  styleUrls: ['./invoice-cover.component.sass'],
})
export class InvoiceCoverComponent implements OnInit {
  private invoiceId: string;

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
    private pessoaService: PessoaService
  ) {
    this.coverData = new TmpX07DoctoFiscal();
    this.coverData.id = new TmpX07DoctoFiscalId();
  }

  ngOnInit(): void {
    this.invoiceId = this.route.parent?.snapshot.params['invoice-id'];
    const moduleData: any = this.storage.getObject('moduleData');
    this.coverData.id.codEmpresa = moduleData.company.id;
    if (this.invoiceId) {
      this.findInvoiceById(this.invoiceId);
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

  onSubmit = () => {};
}
