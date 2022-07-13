import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import GridFilter from 'src/app/features/t1dw/model/grid-filter.model';
import { Pagination } from 'src/app/features/t1dw/model/interface.model';
import GridData from '../flex-grid/flex-grid.model';

@Component({
  selector: 't1dw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class ModalComponent {
  isBusyLoader: boolean = false;

  selectedItem: any;

  private modalRef: NgbModalRef;

  @Input() title: string;

  @Input() size: 'sm' | 'lg' | 'xl' = 'lg';

  @Input() gridFilters: GridFilter[] = [];

  @Input() gridColumnsData: GridData[];

  @Input() startLoading: boolean = false;

  @Input() disabled: boolean = false;

  @Input() search: (gridFilters: GridFilter[], pagination: Pagination) => Promise<any>;

  @Output() closeSelectedItem: EventEmitter<any> = new EventEmitter<any>();

  constructor(private modalService: NgbModal) {}

  open(content: any): void {
    if (this.disabled) {
      return;
    }
    const modalConfig: NgbModalOptions = {
      ariaLabelledBy: 'modal-basic-title',
      size: this.size,
    };
    this.modalRef = this.modalService.open(content, modalConfig);
  }

  onSelectedItem = (item: any): void => {
    this.selectedItem = item;
  };

  onDoubleClick = (): void => {
    this.closeSelectedItem.emit(this.selectedItem);
    this.modalRef.close();
  };

  selectClose = (): void => {
    this.closeSelectedItem.emit(this.selectedItem);
  };
}
