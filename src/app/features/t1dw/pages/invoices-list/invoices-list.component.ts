import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BentoComboboxColumn, DatepickerConfig } from '@bento/bento-ng';
import { StorageService } from 'src/app/core/services/storage.service';

import { FlexGrid } from '@grapecity/wijmo.grid';
import { EnumAlert } from 'src/app/shared/components/alert/alert-model';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { HttpEvent } from '@angular/common/http';
import GridData from 'src/app/shared/components/modal/grid-data.model';
import { EstabelecimentoService } from '../../services/estabelecimento.service';
import { InvoiceService } from '../../services/invoice.service';
import GridFilter from '../../model/grid-filter.model';
import { Pagination } from '../../model/interface.model';
import { QueryOperator } from '../../enum/query-operator.enum';
import GridFilterConditional from '../../model/grid-filter-conditional.model';
import { OperatorType } from '../../enum/operator-type.enum';
import { SearchInvoicesParams } from './search-invoices-params-model';
import { DatamartService } from '../../services/datamart.service';
import { TempTableService } from '../../services/temp-table.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.sass'],
})
export class InvoicesListComponent implements OnInit {
  isHidden: boolean = false;

  estabDisabled: boolean = false;

  @ViewChild('f') private form: NgForm;

  @ViewChild('flexGrid', { static: true }) flexGrid: FlexGrid;

  private selectedItem: any = undefined;

  resetErrors: boolean;

  constructor(
    private storage: StorageService,
    private estabelecimentoService: EstabelecimentoService,
    private invoiceService: InvoiceService,
    private alertService: AlertService,
    private datamartService: DatamartService,
    private tempTableService: TempTableService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  validations = {
    required: '{0} é obrigatório',
  };

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

  dateConfig: DatepickerConfig = {
    type: 'recent',
    format: 'dd/mm/yyyy',
  };

  toolbarData: any[] = [
    {
      label: 'Adicionar',
      icon: 'bento-icon-add',
      action: () => {},
    },
    {
      label: 'Editar',
      icon: 'bento-icon-enter',
      action: () => {
        this.editInvoice();
      },
    },
    {
      label: 'Aplicar Filtro',
      icon: 'bento-icon-filter',
      action: () => {
        this.applyFilter();
      },
    },
  ];

  gridColumnsData: GridData[] = [
    {
      header: 'Estabelecimento',
      binding: 'codEstab',
    },
    {
      header: 'Número NF',
      binding: 'numDocfis',
    },
    {
      header: 'Série NF',
      binding: 'serieDocfis',
    },
    {
      header: 'Pessoa Fis/Jur',
      binding: 'pessoa.codigo',
    },
    {
      header: 'Data Emissão',
      binding: 'dataEmissao',
      dataType: '4',
      format: 'dd/MM/yyyy',
      align: 'center',
    },
    {
      header: 'Data de Saída/Recebimento',
      binding: 'dataSaidaRec',
      dataType: '4',
      format: 'dd/MM/yyyy',
      align: 'center',
    },
    {
      header: 'Tipo Documento',
      binding: 'tipoDocto.codDocto',
    },
    {
      header: 'Cód. Classificação',
      binding: 'codClassDocFis',
    },
    {
      header: 'Movto. E/S',
      binding: 'movtoES',
    },
    {
      header: 'Norm. / Dev.',
      binding: 'normDev',
    },
    {
      header: 'Valor da NFe',
      binding: 'vlrTotNota',
      dataType: '2',
      format: 'n2',
      align: 'right',
    },
  ];

  columnsToFilter = [
    'numDocfis',
    'serieDocfis',
    'pessoa.codigo',
    'tipoDocto.codDocto',
    'codClassDocFis',
    'movtoES',
    'normDev',
    'vlrTotNota',
  ];

  formFilters: SearchInvoicesParams = new SearchInvoicesParams('', '', '', '');

  gridFilters: GridFilter[] = [];

  ngOnInit(): void {
    this.loadInitialDates();
    const moduleData: any = this.storage.getObject('moduleData');
    this.formFilters.codEmpresa = moduleData.company.id;
    this.formFilters.codEstab = moduleData.branch.codEstab ? moduleData.branch.codEstab : 'Todos';
  }

  applyFilter = () => {};

  loadInitialDates() {
    const today = new Date();
    const lastDayOfPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    lastDayOfPreviousMonth.setDate(lastDayOfPreviousMonth.getDate() - 1);
    lastDayOfPreviousMonth.setHours(0);
    lastDayOfPreviousMonth.setMinutes(0);
    lastDayOfPreviousMonth.setSeconds(0);

    this.formFilters.dataSaidaRecFim = lastDayOfPreviousMonth.toJSON();
    lastDayOfPreviousMonth.setDate(1);

    this.formFilters.dataSaidaRecIni = lastDayOfPreviousMonth.toJSON();
  }

  estabCallBackFunction = (page: number, size: number, filter: string, unique: boolean): Promise<any> => {
    if (unique) {
      return this.estabelecimentoService.findByCodEmpresaAndCodEstab(this.formFilters.codEmpresa, filter);
    }
    const pagination: Pagination = { page, size };
    return this.estabelecimentoService.autocomplete(this.formFilters.codEmpresa, pagination, filter);
  };

  onReset() {
    this.form.reset();
    this.resetErrors = true;

    setTimeout(() => {
      this.resetErrors = false;
    });
  }

  onSubmit() {
    const dateIni = new Date(this.formFilters.dataSaidaRecIni);
    dateIni.setHours(0, 0, 0);

    const dateFim = new Date(this.formFilters.dataSaidaRecFim);
    dateFim.setHours(23, 59, 59);

    if (dateIni.getTime() > dateFim.getTime()) {
      this.alertService.warn('A data inicial não pode ser maior que a data final!', {
        type: EnumAlert.ERROR,
      });
    } else {
      this.gridFilters = this.buildBasicFilters();
    }
  }

  private buildBasicFilters(): GridFilter[] {
    const gridFilters: GridFilter[] = [];

    gridFilters.push(
      new GridFilter(
        'codEmpresa',
        QueryOperator.AND,
        new GridFilterConditional(OperatorType.EQ, this.formFilters.codEmpresa)
      )
    );

    const { codEstab } = this.formFilters;
    if (codEstab?.toLocaleLowerCase() !== 'todos') {
      gridFilters.push(new GridFilter('codEstab', QueryOperator.AND, new GridFilterConditional(OperatorType.EQ, codEstab)));
    }
    gridFilters.push(
      new GridFilter(
        'dataFiscal',
        QueryOperator.AND,
        new GridFilterConditional(OperatorType.GE, this.formFilters.dataSaidaRecIni),
        new GridFilterConditional(OperatorType.LE, this.formFilters.dataSaidaRecFim)
      )
    );

    return gridFilters;
  }

  searchCallbackFunction = (gridFilters: GridFilter[], pagination: Pagination) => {
    return this.invoiceService.searchInvoices(gridFilters, pagination);
  };

  onSelectedItem(value: any) {
    this.selectedItem = value;
  }

  editInvoice = (): void => {
    if (this.selectedItem) {
      this.datamartService
        .isActiveNow(this.selectedItem.codEmpresa, this.selectedItem.codEstab, 'DWT_DOCTO_FISCAL')
        .then((isActive: HttpEvent<boolean>) => {
          if (isActive) {
            this.alertService.warn(
              'Um Processo de Equalização/Importação está sendo executado por outro usuário no momento.'
            );
          } else {
            this.convertInvoiceToTemp(this.selectedItem);
          }
        });
    } else {
      this.alertService.warn('Atenção! Selecione um item na tabela para edição!');
    }
  };

  private async convertInvoiceToTemp(selectedItem: any) {
    this.tempTableService
      .convertInvoiceToTemp({
        codEmpresa: selectedItem.codEmpresa,
        codEstab: selectedItem.codEstab,
        dataFiscal: selectedItem.dataFiscal,
        movtoES: selectedItem.movtoES,
        indNormDev: selectedItem.normDev,
        identDocto: selectedItem.identDocto,
        identFisJur: selectedItem.identFisJur,
        numDocFis: selectedItem.numDocfis,
        serieDocFis: selectedItem.serieDocfis,
        subserieDocFis: selectedItem.subSerieDocfis,
        username: 'TESTE',
      })
      .then((data: any) => {
        const invoiceId: string = data.idDocto;
        this.router.navigate(['edit', invoiceId], { relativeTo: this.route });
      })
      .catch((error: any) => {
        const errorMessage =
          typeof error.data === 'object' ? `${error.data.error} - ${error.data.message}` : error.statusText;
        this.alertService.error(`Erro ao abrir a nota fiscal selecionada: ${errorMessage}`);
      });
  }
}
