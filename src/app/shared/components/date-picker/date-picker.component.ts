import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatepickerConfig } from '@bento/bento-ng';

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
  private previousModel: any = null;

  @Input() disabled?: boolean;

  @Input() label?: string;

  @Input() buttonLabel?: string;

  @Input('ngModel') model: any;

  @Output('ngModelChange') modelChange = new EventEmitter<any>();

  onTouched: Function;

  onChange: Function = () => {};

  dateConfig: DatepickerConfig = {
    type: 'recent',
    format: 'dd/mm/yyyy',
  };

  writeValue(value: any): void {
    this.model = value;
    this.onModelChange(value);
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onModelChange = (value: any) => {
    if (value !== this.previousModel) {
      this.onChange(value);
      this.modelChange.emit(value);
      this.previousModel = value;
    }
  };
}
