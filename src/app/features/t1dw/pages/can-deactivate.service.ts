import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BentoModalConfirmationCloseReason, BentoModalConfirmationService } from '@bento/bento-ng';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateService {
  private readonly MESSAGE: string;

  constructor(private modalService: BentoModalConfirmationService) {
    this.MESSAGE = 'Confirma?!';
  }

  canDeactivate = async (form: NgForm): Promise<boolean> => {
    let returnValue: boolean = false;

    if (form.dirty) {
      await this.modalService
        .open(this.MESSAGE, {
          iconName: 'bento-icon-warning-filled',
          iconColorType: 'danger',
        })
        .result.then((result: BentoModalConfirmationCloseReason) => {
          returnValue = result === BentoModalConfirmationCloseReason.Confirm;
        });
    }

    return returnValue;
  };
}
