import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.sass'],
})
export class ModalConfirmationComponent {
  @Input() closeToolTip: string = 'Close';

  @Input() title: string;

  @Input() body: string;

  @Input() confirmButtonLabel: string = 'Confirm';

  @Input() cancelButtonLabel: string = 'Cancel';

  @Output() confirm = new EventEmitter();

  @Output() demiss = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.confirm.emit(result);
      },
      (reason) => {
        this.demiss.emit(reason);
      }
    );
  }
}
