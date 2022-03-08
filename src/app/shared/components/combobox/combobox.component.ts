/* eslint-disable no-underscore-dangle */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BentoComboboxOptions, BentoComboboxSearchEvent } from '@bento/bento-ng';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.sass'],
})
export class ComboboxComponent implements OnInit {
  comboboxOption: BentoComboboxOptions;

  comboboxOptionServerSide: BentoComboboxOptions;

  /**
   * For two way data binding in the property model
   */
  _model: any;

  @Output() modelChange = new EventEmitter<any>();

  @Input()
  get model() {
    return this._model;
  }

  set model(val) {
    this._model = val;
    this.modelChange.emit(this._model);
  }

  @Input() id: string;

  @Input() items: BehaviorSubject<any>;

  @Input() searchServerSide: boolean = false;

  @Output() changeScroll = new EventEmitter<any>();

  @Output() searchValue = new EventEmitter();

  @Output() resetValues = new EventEmitter();

  @Output() selectValue = new EventEmitter();

  constructor() {
    this.comboboxOption = {
      searchable: true,
      searchCompare: this.search,
      labelFormatter: this.labelFormat,
    };
    this.comboboxOptionServerSide = {
      ...this.comboboxOption,
      useServerSearch: true,
      debounceTime: 300,
      minSearchCharacterCount: 3,
    };
  }

  ngOnInit(): void {
    this.items = new BehaviorSubject<any>([]);
  }

  changeValue = (newValue: any) => {
    this.selectValue.emit(newValue);
  };

  search = (row: any, search: string) => {
    const searchLowerCase = search.toLocaleLowerCase();
    const name = `${row.description}`.toLowerCase();

    return name.indexOf(searchLowerCase) > -1;
  };

  labelFormat = (row: any) => `${row.description}`;

  onEndOfScroll = (event: BentoComboboxSearchEvent) => {
    this.changeScroll.emit(event);
  };

  searchData = (event: BentoComboboxSearchEvent) => {
    this.searchValue.emit(event);
  };

  resetData = () => {
    this.resetValues.emit();
  };
}
