import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    },
  ],
})
export class NumberInputComponent implements ControlValueAccessor {
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

  onTouched: Function;

  onChange: Function = () => {};

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
    console.log(value);
    this.modelChange.emit(value);
  };

  getStyle = () => {
    return `width: ${this.width}px`;
  };
}
