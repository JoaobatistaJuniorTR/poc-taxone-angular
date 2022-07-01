/* eslint-disable no-underscore-dangle */
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BentoComboboxColumn, BentoComboboxOptions, BentoComboboxSearchEvent } from '@bento/bento-ng';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true,
    },
  ],
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {
  private previusSearch?: string = undefined;

  private previousSelectedItem: any = null;

  isBusyLoader = false;

  comboboxOptions: BentoComboboxOptions;

  itemsObservable: BehaviorSubject<any>;

  @Input() disabled: boolean = false;

  @Input('ngModel') model!: any;

  @Output('ngModelChange') modelChange = new EventEmitter<any>();

  @Input() inputLabelText: string;

  @Input('model-field') modelField: string;

  @Input('label-field') labelField: string;

  @Input('show-all-option') showAllOption: boolean = true;

  @Input() blockSize: number = 25;

  @Input() debounceTime: number = 1000;

  @Input() minSearchCharacterCount: number = 3;

  @Input() columns: BentoComboboxColumn[] = [];

  @Input() headerTranslation?: any;

  @Input() searchCallback: (page: number, size: number, filter: string) => Promise<any>;

  @Output() searchValue = new EventEmitter();

  @Output() endOfScroll: EventEmitter<any>;

  constructor() {
    this.itemsObservable = new BehaviorSubject<any>([]);
  }

  onTouched: Function;

  onChange: Function = () => {};

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

  ngOnInit(): void {
    this.comboboxOptions = {
      searchable: true,
      autoSelect: true,
      useServerSearch: true,
      debounceTime: this.debounceTime,
      minSearchCharacterCount: this.minSearchCharacterCount,
      columns: this.columns,
      headerTranslation: this.headerTranslation,
      labelFormatter: (row: any) => {
        return row[this.labelField];
      },
    };
    this.loadData(0, this.blockSize, '');
  }

  onModelChange = (item: any) => {
    this.onChange(item);
    if (!item || item !== this.previousSelectedItem) {
      this.previousSelectedItem = { ...item };
      this.model = item;

      this.modelChange.emit(this.model);
      if (!item) {
        this.loadData(0, this.blockSize, '');
      }
    }
  };

  searchData = async (event: BentoComboboxSearchEvent) => {
    this.searchValue.emit(event);
    this.loadData(event.currentIndex, this.blockSize, event.search);
  };

  onEndOfScroll(event: BentoComboboxSearchEvent) {
    if (this.endOfScroll) {
      this.endOfScroll.emit(event);
    }
    this.loadData(event.currentIndex, this.blockSize, event.search);
  }

  private loadData(page: number, blockSize: number, search: string) {
    if (!search || this.previusSearch !== search) {
      this.previusSearch = search ? search.slice() : '';
      this.isBusyLoader = true;
      let tmpSearch: string = search?.toLowerCase() || '';
      if (this.showAllOption && tmpSearch === 'todos') {
        tmpSearch = '';
      }
      this.searchCallback(page, blockSize, tmpSearch)
        .then((data) => {
          if (this.shouldPrependAllOption(page, tmpSearch)) {
            data.content = this.prependAllOption(data.content);
          }
          this.itemsObservable = new BehaviorSubject<any>(data.content);
        })
        .finally(() => {
          this.isBusyLoader = false;
        });
    }
  }

  private shouldPrependAllOption = (page: number, search: string): Boolean => {
    return this.showAllOption && page === 0 && !search;
  };

  private prependAllOption = (list: any[]): any[] => {
    list.unshift(this.getAllOption());
    return list;
  };

  private getAllOption = (): {} => {
    const allOption: any = {};
    allOption[this.modelField] = 'Todos';
    allOption[this.labelField] = 'Todos';
    return allOption;
  };
}
