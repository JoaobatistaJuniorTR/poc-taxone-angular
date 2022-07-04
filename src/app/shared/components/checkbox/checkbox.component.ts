import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  value: boolean;

  @Input() id: string;

  @Input() name: string;

  private model$: any;

  @Input('ngModel') get model() {
    return this.model$;
  }

  set model(val: string) {
    this.model$ = val;
    this.value = this.model$ === 'S';
  }

  @Output('ngModelChange') modelChange = new EventEmitter<any>();

  @Input() inputLabelText: string;

  @Input() disabled: boolean;

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
    this.model$ = value ? 'S' : 'N';
    this.modelChange.emit(this.model$);
  }
}
