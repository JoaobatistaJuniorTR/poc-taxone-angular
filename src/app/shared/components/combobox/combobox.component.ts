/* eslint-disable class-methods-use-this */
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

  @Input() id: string;

  @Input() model: any = null;

  @Output() modelChange = new EventEmitter<any>();

  @Input() items: BehaviorSubject<any>;

  @Input() disabled: boolean = false;

  @Input() searchServerSide: boolean = false;

  @Output() changeScroll = new EventEmitter<any>();

  @Output() searchValue = new EventEmitter();

  @Output() resetValues = new EventEmitter();

  constructor() {
    this.comboboxOption = {
      searchable: true,
      searchCompare: this.search,
      labelFormatter: this.labelFormat,
    };
    this.comboboxOptionServerSide = {
      ...this.comboboxOption,
      useServerSearch: this.searchServerSide,
      debounceTime: 300,
      minSearchCharacterCount: 3,
    };
  }

  ngOnInit(): void {
    this.items = new BehaviorSubject<any>([]);
  }

  search = (row: any, search: string) => {
    const searchLowerCase = search.toLocaleLowerCase();
    const name = `${row.description}`.toLowerCase();

    return name.indexOf(searchLowerCase) > -1;
  };

  labelFormat = (row: any) => `${row.description}`;

  change = (newValue: any) => {
    this.model = newValue;
    this.modelChange.emit(newValue);
  };

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
