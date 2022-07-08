// eslint-disable-next-line max-len
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatepickerConfig } from '@bento/bento-ng';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
})
export class DatePickerComponent implements ControlValueAccessor {
  private previousDataStructure: NgbDateStruct;

  dateStructure: NgbDateStruct;

  @Input() id: string;

  @Input() name: string;

  @Input('format-max-time') formatMaxDate: boolean = false;

  @Input() disabled: boolean;

  @Input() inputLabelText: string;

  @Input() required: boolean;

  @Input() buttonLabel?: string;

  private localModel: any;

  @Input('ngModel')
  get model() {
    return this.localModel;
  }

  set model(val: any) {
    this.localModel = val;
    if (val) {
      this.dateStructure = this.parse(val);
    }
    this.modelChange.emit(this.localModel);
  }

  @Output('ngModelChange') modelChange = new EventEmitter<any>();

  onTouched: Function;

  onChange: Function = () => {};

  dateConfig: DatepickerConfig = {
    type: 'recent',
    format: 'dd/mm/yyyy',
  };

  writeValue(value: any): void {
    this.model = value;
    this.onChange(value);
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onModelChange = (value: any) => {
    this.onChange(value);
    if (value !== this.previousDataStructure) {
      this.previousDataStructure = { ...value };
      if (value && value.year > 999) {
        this.localModel = this.format(value);
      }
      this.modelChange.emit(this.localModel);
    }
  };

  private format = (value: NgbDateStruct): string => {
    const tokens: string[] = [];
    if (value.year) {
      tokens.push(`${value.year}`);
      if (`${value.month}`.length === 2) {
        tokens.push(`${value.month}`);
      } else {
        tokens.push(`0${value.month}`);
      }
      if (`${value.day}`.length === 2) {
        tokens.push(`${value.day}`);
      } else {
        tokens.push(`0${value.day}`);
      }
    }
    if (this.formatMaxDate) {
      return `${tokens.join('-')}T23:59:59`;
    }
    return `${tokens.join('-')}T00:00:00`;
  };

  private parse = (value: any): NgbDateStruct => {
    let date;
    if (value) {
      date = new Date(value);
      return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    }
    date = new Date();
    return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
  };
}
