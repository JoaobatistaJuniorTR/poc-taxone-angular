import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SelectModel } from './select-model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() id: string;

  @Input() name: string;

  @Input() items: SelectModel[] = [];

  @Input('ngModel') model: any;

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
    this.modelChange.emit(value);
  }
}
