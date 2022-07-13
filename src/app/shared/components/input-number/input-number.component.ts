import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 't1dw-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true,
    },
  ],
})
export class InputNumberComponent implements ControlValueAccessor {
  @Input() id: string;

  @Input() name: string;

  @Input() inputLabelText: string;

  @Input() width: number = 160;

  @Input('ngModel') model: any;

  @Output('ngModelChange') modelChange = new EventEmitter<any>();

  @Input() min: number = 0;

  @Input() max: number;

  @Input() disabled: boolean;

  @Input() required: boolean;

  @Input() bfmLabel: string;

  onTouched: Function;

  onChange: Function = () => {};

  getClass = (): string => {
    if (this.required && this.inputLabelText !== '\u00A0') {
      return 'bento-label-required';
    }
    return 'bento-label';
  };

  writeValue(value: any): void {
    this.model = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onModelChange = (value: any) => {
    this.modelChange.emit(value);
  };

  getStyle = () => {
    return `width: ${this.width}px`;
  };
}
