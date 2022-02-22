import { Component, OnInit, ViewChild } from '@angular/core';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { ExampleGridService } from './example-grid.service';

@Component({
  selector: 'app-example-grid',
  templateUrl: './example-grid.component.html',
  styleUrls: ['./example-grid.component.sass'],
})
export class ExampleGridComponent implements OnInit {
  data: wjcCore.CollectionView;

  // Get reference to FlexGrid control (see #flexGrid in flexgrid.html)
  @ViewChild('flexGrid', { static: true }) flexGrid: wjcGrid.FlexGrid;

  /**
   * Pagination Setup data
   */
  pageInfo: any = {
    infoText: '_START_ to _END_ of _MAX_ Users',
    infoPageText: '_PAGE_ of _PAGES_',
    goText: 'Go',
    pageSize: 10,
  };

  /**
   * MULTI-SELECT
   */
  // Multi-Select handlers and constants
  CHECKBOX_SELECTED = 1;

  CHECKBOX_UNSELECTED = 2;

  headerCheckBoxMode = this.CHECKBOX_UNSELECTED;

  CHECKBOX_INDETERMINATE = 3;

  // in this demo, our binding is called 'selected'
  selectBinding: string = 'selected';

  constructor(private service: ExampleGridService) {
    this.data = new wjcCore.CollectionView();
  }

  ngOnInit(): void {
    this.data = new wjcCore.CollectionView(this.service.mockData());
    this.data.pageSize = this.pageInfo.pageSize;
  }

  /**
   * Handler for FlexGrid's Initialized method
   */
  gridInitialized() {
    this.initializeHeaders();
  }

  /**
   * Initialize Multi Select Checkboxes
   */
  initializeHeaders() {
    if (this.flexGrid) {
      const hc = new wjcGrid.Column();
      this.flexGrid.rowHeaders.columns.push(hc);
      this.flexGrid.rowHeaders.columns[1].width = 36;
    }
  }

  /**
   * Pagination Size Changed Event Handler
   */
  onPageSizeChanged(size: number) {
    this.data.pageSize = size;
  }

  /**
   * Pagination Page Changed Event Handler
   */
  onPageChanged(page: number) {
    this.data.moveToPage(page - 1);
  }

  /**
   * Event Handler for Multi-Select Column Cell Checkbox
   */
  onCheckBoxChange() {
    this.headerCheckBoxMode = this.CHECKBOX_UNSELECTED;
    let count = 0;
    for (let i = 0, ttl = this.flexGrid.rows.length; i < ttl; i++) {
      if (this.flexGrid.rows[i].dataItem[this.selectBinding] === true) {
        count += 1;
        this.flexGrid.rows[i].cssClass = 'row-selected';
      } else {
        this.flexGrid.rows[i].cssClass = '';
      }
    }
    if (count === this.flexGrid.rows.length) {
      this.headerCheckBoxMode = this.CHECKBOX_SELECTED;
    } else if (count > 0) {
      this.headerCheckBoxMode = this.CHECKBOX_INDETERMINATE;
    }
  }
}
