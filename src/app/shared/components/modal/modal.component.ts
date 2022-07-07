import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import GridFilter from 'src/app/features/t1dw/model/grid-filter.model';
import { Pagination } from 'src/app/features/t1dw/model/interface.model';
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

  @Input() gridFilters: GridFilter[] = [];

  @Input() gridColumnsData: GridData[];

  @Input() startLoading: boolean = false;

  @Input() searchCallbackFunction: (gridFilters: GridFilter[], pagination: Pagination) => Promise<any>;

  @Input() onItemSelectedCallbackFunction: (item: any) => void;

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    const modalConfig: NgbModalOptions = { ariaLabelledBy: 'modal-basic-title', windowClass: 'grid-modal', size: this.size };
    this.modalService.open(content, modalConfig);
  }
}
