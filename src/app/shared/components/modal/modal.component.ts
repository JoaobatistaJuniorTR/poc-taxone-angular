import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcGridFilter from '@grapecity/wijmo.grid.filter';
import { BentoToolbarItem } from '@bento/bento-ng';
import GridFilter from 'src/app/features/t1dw/model/grid-filter.model';
import { WjFlexGridFilter } from '@grapecity/wijmo.angular2.grid.filter';
import GridData from './grid-data.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class ModalComponent {
  isBusyLoader: boolean = false;

  @Input() title: string;

  @Input() size: 'sm' | 'lg' | 'xl' = 'lg';

  @Input() gridColumnsData: GridData[];

  @Input() searchCallbackFunction: (gridFilters: GridFilter[], page: number, size: number) => {};

  @Input() onItemSelectedCallbackFunction: (item: any) => void;

  toolbarItems: BentoToolbarItem[] = [
    {
      label: 'Pesquisar',
      icon: 'bento-icon-filter',
      action: () => {},
    },
  ];

  @ViewChild('flexGrid', { static: true }) flexGrid: wjcGrid.FlexGrid;

  @ViewChild('gridFilter', { static: true }) gridFilter: wjcGridFilter.FlexGridFilter;

  itemsSource: wjcCore.CollectionView;

  toolbarConfig: any = {
    filterButtonHidden: false,
    filtersHidden: true,
    groupButtonHidden: false,
    groupPanelHidden: true,
    toggleFilter: this.toggleFilter.bind(this),
    toggleGroupPanel: () => {
      this.toolbarConfig.groupPanelHidden = !this.toolbarConfig.groupPanelHidden;
    },
  };

  ctx = {
    filterButtonHidden: true,
    groupButtonHidden: true,
    columnButtonHidden: true,
    includeColumnHeader: true,
    pageSize: 10,
    page: 1,
    itemPerPageOptions: [10, 25, 50, 100],
  };

  columnDefinitions: any[] = [];

  constructor(private modalService: NgbModal) {
    this.itemsSource = new wjcCore.CollectionView([], {
      pageSize: this.ctx.pageSize,
      canFilter: false,
    });
  }

  open(content: any) {
    const modalConfig: NgbModalOptions = { ariaLabelledBy: 'modal-basic-title', windowClass: 'grid-modal', size: this.size };
    this.modalService.open(content, modalConfig);
  }

  columnDefinitionsByBinding: any = this.columnDefinitions.reduce((result, item) => {
    result[item.binding] = item;
    return result;
  }, {});

  toggleFilter() {
    this.toolbarConfig.filtersHidden = !this.toolbarConfig.filtersHidden;
    if (this.gridFilter) {
      if (this.toolbarConfig.filtersHidden) {
        this.gridFilter.clear();
      }
      for (let i = 0, il = this.columnDefinitions.length; i < il; i += 1) {
        const col = this.gridFilter.grid.columns.getColumn(this.columnDefinitions[i].binding);
        const cf: any = col ? this.gridFilter.getColumnFilter(col, true) : {};
        cf.filterType = this.toolbarConfig.filtersHidden ? 0 : this.columnDefinitions[i].filterType;
      }
      this.gridFilter.grid.refresh();
    }
  }

  onFilterChanged = (gridFilter: WjFlexGridFilter, event: wjcGrid.CellRangeEventArgs): void => {
    console.log(gridFilter);
    console.log(event);
  };
}
