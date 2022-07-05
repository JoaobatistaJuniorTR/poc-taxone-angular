import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BentoComboboxColumn, DatepickerConfig } from '@bento/bento-ng';
import { StorageService } from 'src/app/core/services/storage.service';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { WjFlexGridFilter } from '@grapecity/wijmo.angular2.grid.filter';
import { CellRangeEventArgs, FlexGrid } from '@grapecity/wijmo.grid';
import { EnumAlert } from 'src/app/shared/components/alert/alert-model';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { HttpEvent } from '@angular/common/http';
import { EstabelecimentoService } from '../../services/estabelecimento.service';
import { InvoiceService } from '../../services/invoice.service';
import { GridFilterService } from '../../services/grid-filter.service';
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

  selectedRowIndex?: number;

  estabDisabled: boolean = false;

  isGridBusyLoader = false;

  data: wjcCore.CollectionView<any>;

  @ViewChild('f') private form: NgForm;

  @ViewChild('flexGrid', { static: true }) flexGrid: FlexGrid;

  resetErrors: boolean;

  constructor(
    private storage: StorageService,
    private estabelecimentoService: EstabelecimentoService,
    private invoiceService: InvoiceService,
    private alertService: AlertService,
    private gridFilterService: GridFilterService,
    private datamartService: DatamartService,
    private tempTableService: TempTableService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.data = new wjcCore.CollectionView<any>([]);
  }

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

  pageInfo: any = {
    page: 1,
    infoText: 'Exibindo _START_ até _END_ de _MAX_ Invoices',
    infoPageText: 'Página _PAGE_ de _PAGES_',
    goToText: 'Ir',
    pageSize: 10,
    itemsArray: [10, 25, 50, 100],
    totalItemCount: 0,
  };

  formFilters: SearchInvoicesParams = new SearchInvoicesParams('', '', '', '');

  private gridFilters: GridFilter[] = [];

  ngOnInit(): void {
    this.loadInitialDates();
    this.data.pageSize = this.pageInfo.pageSize;
    const moduleData: any = this.storage.getObject('moduleData');
    this.formFilters.codEmpresa = moduleData.company.id;
    this.formFilters.codEstab = moduleData.branch.codEstab ? moduleData.branch.codEstab : 'Todos';
  }

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
      this.loadData(0, this.data.pageSize);
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
    gridFilters.push(
      new GridFilter('codEstab', QueryOperator.AND, new GridFilterConditional(OperatorType.EQ, this.formFilters.codEstab))
    );
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

  onSelectionChanged(event: CellRangeEventArgs) {
    this.selectedRowIndex = event.row;
  }

  onGridInitialized() {
    this.flexGrid.hostElement.addEventListener('dblclick', () => {
      this.editInvoice();
    });
  }

  onFilterChanged = (gridFilter: WjFlexGridFilter, event: wjcGrid.CellRangeEventArgs): void => {
    if (event.cancel) return;

    this.gridFilters = this.buildBasicFilters();
    this.gridFilters = this.gridFilters.concat(this.gridFilterService.parseFilter(gridFilter.filterDefinition));

    this.loadData(this.pageInfo.page - 1, this.data.pageSize);
  };

  applyFilter = () => {
    this.loadData(this.pageInfo.page - 1, this.data.pageSize);
  };

  onPageSizeChanged(size: number) {
    this.loadData(this.pageInfo.page - 1, size);
  }

  onPageChanged(page: number) {
    this.loadData(page - 1, this.data.pageSize);
  }

  private loadData(page: number, size: number) {
    this.isGridBusyLoader = true;
    const pagination: Pagination = { page, size };
    this.invoiceService
      .searchInvoices(this.gridFilters, pagination)
      .then((result: any) => {
        result.content.forEach((item: any) => {
          item.dataEmissao = new Date(item.dataEmissao);
          item.dataSaidaRec = new Date(item.dataSaidaRec);
        });
        this.data.sourceCollection = result.content;
        this.data.pageSize = result.size;
        this.pageInfo.totalItemCount = result.totalElements;
      })
      .finally(() => {
        this.isGridBusyLoader = false;
      });
  }

  private editInvoice() {
    const selectedRow: wjcGrid.Row = this.flexGrid.rows[this.selectedRowIndex || 0];
    if (selectedRow) {
      this.datamartService
        .isActiveNow(selectedRow.dataItem.codEmpresa, selectedRow.dataItem.codEstab, 'DWT_DOCTO_FISCAL')
        .then((isActive: HttpEvent<boolean>) => {
          if (isActive) {
            this.alertService.warn(
              'Um Processo de Equalização/Importação está sendo executado por outro usuário no momento.'
            );
          } else {
            this.convertInvoiceToTemp(selectedRow.dataItem);
          }
        });
    } else {
      this.alertService.warn('Atenção! Selecione um item na tabela para edição!');
    }
  }

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
