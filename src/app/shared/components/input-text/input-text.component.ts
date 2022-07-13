import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() id: string;

  @Input() name: string;

  @Input('ngModel') model: any;

  @Output('ngModelChange') modelChange = new EventEmitter<any>();

  @Input('maxlength') maxLength: number;

  @Input() width?: string;

  @Input() disabled: boolean = false;

  @Input() inputLabelText: string;

  @Input() bfmLabel: string;

  @Input() required: boolean = false;

  @Output() blur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();

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

  onModelChange(value: any) {
    this.modelChange.emit(value);
  }

  getClass = (): string => {
    if (this.required && this.inputLabelText !== '\u00A0') {
      return 'bento-label-required';
    }
    return 'bento-label';
  };

  getStyle = (): string => {
    if (this.width) {
      return `width: ${this.width}`;
    }
    return '';
  };

  onBlur = (event: FocusEvent): void => {
    this.blur.emit(event);
  };
}
