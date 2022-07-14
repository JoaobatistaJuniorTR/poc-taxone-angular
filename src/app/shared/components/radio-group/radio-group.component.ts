import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioItem } from './radio-group.model';

@Component({
  selector: 't1dw-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.sass'],
})
export class RadioGroupComponent {
  @Input() id: string;

  @Input() name: string;

  private model$: any;

  @Input('ngModel')
  get model() {
    return this.model$;
  }

  set model(value: any) {
    this.model$ = value;
    this.modelChange.emit(value);
  }

  @Output('ngModelChange') modelChange = new EventEmitter<any>();

  @Input() inputLabelText: string;

  @Input() radioItems: RadioItem[] = [];

  @Input() required: boolean;

  getClass = (): string => {
    if (this.required && this.inputLabelText !== '\u00A0') {
      return 'bento-label-required';
    }
    return 'bento-label';
  };
}
