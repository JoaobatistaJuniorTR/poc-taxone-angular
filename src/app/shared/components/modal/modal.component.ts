import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

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

  isButtonDisabled: boolean = true;

  selectedItem: any = undefined;

  @Input() title: string;

  @Input() size: 'sm' | 'lg' | 'xl' = 'lg';

  @Input() gridFilters: GridFilter[] = [];

  @Input() gridColumnsData: GridData[];

  @Input() startLoading: boolean = true;

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
    this.modalService.open(content, modalConfig);
  }

  onSelectedItem = (item: any): void => {
    this.selectedItem = item;
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 250);
  };

  selectClose = (): void => {
    this.closeSelectedItem.emit(this.selectedItem);
  };
}
