import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcGridFilter from '@grapecity/wijmo.grid.filter';
import { BentoToolbarItem } from '@bento/bento-ng';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class ModalComponent {
  isBusyLoader: boolean = false;

  toolbarItems: BentoToolbarItem[] = [
    {
      label: 'Pesquisar',
      icon: 'bento-icon-filter',
      action: () => {},
    },
  ];

  @ViewChild('flexGrid', { static: true }) flexGrid: wjcGrid.FlexGrid;

  @ViewChild('filter', { static: true }) gridFilter: wjcGridFilter.FlexGridFilter;

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

  itemsSource: wjcCore.CollectionView;

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

  @Input() title: string;

  constructor(private modalService: NgbModal) {
    this.itemsSource = new wjcCore.CollectionView([], {
      pageSize: this.ctx.pageSize,
      canFilter: false,
    });
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
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
}
