import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 't1dw-input-text',
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
export class InputTextComponent implements OnInit, ControlValueAccessor {
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

  @Input() pattern: string = '';

  @Input('formatToNumber') isFormatToNumber: boolean = false;

  @Input() textAlign: string = 'left';

  @Output() blur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();

  onTouched: Function;

  onChange: Function = () => {};

  private inputRegex: RegExp | null = null;

  ngOnInit(): void {
    if (this.isFormatToNumber) {
      this.inputRegex = /^[0-9]{1,13}|[0-9]{1,13}[.]?[0-9]{1,2}?$/;
      this.textAlign = 'right';
    } else if (this.pattern) {
      this.inputRegex = new RegExp(this.pattern);
    }
  }

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

  onBlur = (event: FocusEvent): void => {
    if (!this.isFormatToNumber) {
      return;
    }

    const value: string = this.model;

    const decimalPlaces = this.countDecimalPlaces(value);

    if ((value && decimalPlaces <= 2) || value === '0') {
      this.model = Number(value).toFixed(2);
    }
    this.blur.emit(event);
  };

  private countDecimalPlaces = (value: string): number => {
    const decimalPos: number = String(value).indexOf('.');
    if (decimalPos === -1) {
      return 0;
    }
    return String(value).length - decimalPos - 1;
  };

  onKeypress = (event: KeyboardEvent): boolean => {
    if (this.inputRegex) {
      const newValue: string = `${this.model || ''}${event.key}`;
      if (this.inputRegex.test(newValue)) {
        return true;
      }
      event.preventDefault();
      return false;
    }
    return true;
  };

  getClass = (): string => {
    if (this.required && this.inputLabelText !== '\u00A0') {
      return 'bento-label-required';
    }
    return 'bento-label';
  };

  getStyle = (): string => {
    if (this.width) {
      return `width: ${this.width}; text-align: ${this.textAlign}`;
    }
    return `text-align: ${this.textAlign}`;
  };
}
