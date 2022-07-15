import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 't1dw-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextAreaComponent),
      multi: true,
    },
  ],
})
export class InputTextAreaComponent implements OnInit, ControlValueAccessor {
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

  @Input('maxlength') maxLength: number;

  @Input() rows: number;

  @Input() width?: string;

  @Input() disabled: boolean = false;

  @Input() inputLabelText: string;

  @Input() bfmLabel: string;

  @Input() required: boolean = false;

  @Input() pattern: string = '';

  @Input() textAlign: string = 'left';

  @Output() blur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();

  onTouched: Function;

  onChange: Function = () => {};

  private inputRegex: RegExp | null = null;

  ngOnInit(): void {
    if (this.pattern) {
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

  onBlur = (event: FocusEvent): void => {
    this.blur.emit(event);
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