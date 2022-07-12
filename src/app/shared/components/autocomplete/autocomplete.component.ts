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
  isBusyLoader = false;

  comboboxOptions: BentoComboboxOptions;

  itemsObservable: BehaviorSubject<any>;

  selectedItem: any;

  @Input() id: string;

  @Input() name: string;

  @Input() disabled: boolean = false;

  @Input() required: boolean = false;

  @Input('ngModel') model: any;

  @Output('ngModelChange') modelChange = new EventEmitter<any>();

  @Input() inputLabelText: string;

  @Input() bfmLabel: string;

  @Input('model-field') modelField: string;

  @Input('label-field') labelField: string;

  @Input('show-all-option') showAllOption: boolean = false;

  @Input() blockSize: number = 25;

  @Input() debounceTime: number = 1000;

  @Input() minSearchCharacterCount: number = 3;

  @Input() columns: BentoComboboxColumn[] = [];

  @Input() headerTranslation?: any;

  @Input() searchCallback: (page: number, size: number, filter: string, unique: boolean) => Promise<any>;

  @Output() searchValue = new EventEmitter();

  @Output() endOfScroll: EventEmitter<any>;

  constructor() {
    this.itemsObservable = new BehaviorSubject<any>([]);
  }

  onTouched: Function;

  onChange: Function = () => {};

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
    this.preloadDataIfExists();
  }

  writeValue(value: any): void {
    this.model = value;
    this.preloadDataIfExists();
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private preloadDataIfExists = (): void => {
    if (this.model) {
      if (this.showAllOption && this.model === 'Todos') {
        const allOption = this.getAllOption();
        this.selectedItem = allOption;
        this.onModelChange(this.selectedItem);
        return;
      }
      this.loadData(0, this.blockSize, this.model, true);
    }
  };

  onModelChange = (item: any) => {
    if (item) {
      this.model = item[this.modelField];
    } else {
      this.selectedItem = undefined;
      this.model = '';
    }
    this.onChange(this.model);
    this.modelChange.emit(this.model);
  };

  searchData = async (event: BentoComboboxSearchEvent) => {
    if (this.searchValue) {
      this.searchValue.emit(event);
    }
    this.loadData(event.currentIndex, this.blockSize, event.search, false);
  };

  onEndOfScroll(event: BentoComboboxSearchEvent) {
    if (this.endOfScroll) {
      this.endOfScroll.emit(event);
    }
    this.loadData(event.currentIndex, this.blockSize, event.search, false);
  }

  private loadData(page: number, blockSize: number, search: string, unique: boolean) {
    this.isBusyLoader = true;
    this.searchCallback(page, blockSize, search, unique)
      .then((data) => {
        if (this.shouldPrependAllOption(unique, page, search)) {
          data.content = this.prependAllOption(data.content);
        }
        if (unique) {
          this.selectedItem = data;
          this.onModelChange(this.selectedItem);
          this.itemsObservable = new BehaviorSubject<any>([data]);
        } else {
          this.itemsObservable = new BehaviorSubject<any>(data.content);
        }
      })
      .finally(() => {
        this.isBusyLoader = false;
      });
  }

  private shouldPrependAllOption = (unique: boolean, page: number, search: string): Boolean => {
    return !unique && this.showAllOption && page === 0 && search.toLocaleLowerCase() === 'todos';
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

  onOpenChange = (): void => {
    console.log('Entrou !!!!');
    this.onTouched();
    this.loadData(0, this.blockSize, '', false);
  };
}
