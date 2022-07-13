import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { BentoToolbarItem } from '@bento/bento-ng';

import * as wjcCore from '@grapecity/wijmo';
import { WjFlexGridFilter } from '@grapecity/wijmo.angular2.grid.filter';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcGridFilter from '@grapecity/wijmo.grid.filter';
import GridFilter from 'src/app/features/t1dw/model/grid-filter.model';
import { Pagination } from 'src/app/features/t1dw/model/interface.model';
import { GridFilterService } from '../../../features/t1dw/services/grid-filter.service';
import GridData from './flex-grid.model';

@Component({
  selector: 't1dw-flex-grid',
  templateUrl: './flex-grid.component.html',
  styleUrls: ['./flex-grid.component.sass'],
})
export class FlexGridComponent implements OnInit {
  isGridBusyLoader: boolean = false;

  selectedRowIndex?: number;

  constructor(private gridFilterService: GridFilterService) {
    this.data = new wjcCore.CollectionView<any>([]);
  }

  @Input() toolbarDataItems: BentoToolbarItem[] = [];

  private tmpGridFilters: GridFilter[] = [];

  private gridFilters$: GridFilter[] = [];

  @Input()
  get gridFilters(): GridFilter[] {
    return this.gridFilters$;
  }

  set gridFilters(val: GridFilter[]) {
    this.gridFilters$ = val;
    this.tmpGridFilters = this.gridFilters$.filter(() => true);
    if (this.gridFilter) {
      this.gridFilter.clear();
    }
    this.loadData(0, this.data.pageSize);
  }

  @Input() gridColumnsData: GridData[];

  @Input() columnsToFilter: string[] = [];

  @Input() doubleClick: () => void;

  @Input() search: (gridFilters: GridFilter[], pagination: Pagination) => Promise<any>;

  @Input() startLoading: boolean = false;

  @Output() selectedItem: EventEmitter<any> = new EventEmitter<any>();

  data: wjcCore.CollectionView<any>;

  pageInfo: any = {
    page: 1,
    infoText: 'Exibindo _START_ até _END_ de _MAX_ Invoices',
    infoPageText: 'Página _PAGE_ de _PAGES_',
    goToText: 'Ir',
    pageSize: 10,
    itemsArray: [10, 25, 50, 100],
    totalItemCount: 0,
  };

  @ViewChild('flexGrid', { static: true }) flexGrid: wjcGrid.FlexGrid;

  @ViewChild('gridFilter', { static: true }) gridFilter: wjcGridFilter.FlexGridFilter;

  ngOnInit(): void {
    this.data.pageSize = this.pageInfo.pageSize;
    if (this.startLoading) {
      this.loadData(0, this.data.pageSize);
    }
  }

  getToolbarItems = (): BentoToolbarItem[] => {
    const result: BentoToolbarItem[] = this.toolbarDataItems.filter(() => {
      return true;
    });

    result.push({
      label: 'Aplicar Filtro',
      icon: 'bento-icon-filter',
      action: () => {},
    });

    return result;
  };

  onGridInitialized() {
    this.flexGrid.hostElement.addEventListener('dblclick', () => {
      this.doubleClick();
    });
  }

  onSelectionChanged(event: wjcGrid.CellRangeEventArgs) {
    this.selectedRowIndex = event.row;
    const selectedRow: wjcGrid.Row = this.flexGrid.rows[this.selectedRowIndex || 0];

    if (selectedRow) {
      this.selectedItem.emit(selectedRow.dataItem);
    } else {
      this.selectedItem.emit(undefined);
    }
  }

  onPageSizeChanged(size: number) {
    this.loadData(this.pageInfo.page - 1, size);
  }

  onPageChanged(page: number) {
    this.loadData(page - 1, this.data.pageSize);
  }

  onFilterChanged = (gridFilter: WjFlexGridFilter, event: wjcGrid.CellRangeEventArgs): void => {
    if (event.cancel) return;
    this.tmpGridFilters = this.gridFilters.concat(this.gridFilterService.parseFilter(gridFilter.filterDefinition));
    this.loadData(this.pageInfo.page - 1, this.data.pageSize);
  };

  private loadData(page: number, size: number) {
    if (!(this.search instanceof Function)) {
      return;
    }
    this.isGridBusyLoader = true;
    const pagination: Pagination = { page, size };
    this.search(this.tmpGridFilters, pagination)
      .then((result: any) => {
        this.data.sourceCollection = result.content;
        this.data.pageSize = result.size;
        this.pageInfo.totalItemCount = result.totalElements;
      })
      .finally(() => {
        this.isGridBusyLoader = false;
      });
  }
}
