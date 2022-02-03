import { Component, OnInit } from '@angular/core';
import { BentoComboboxOptions } from '@bento/bento-ng';
import { BehaviorSubject } from 'rxjs';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass'],
})
export class ManagerComponent implements OnInit {
  items: any[];

  comboboxOptions: BentoComboboxOptions = {
    searchable: true,
    autoSelect: false,
    useServerSearch: false,
    labelFormatter: (row) => `${row.id} - ${row.label}`,
  };

  constructor(private service: ManagerService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.initItems();
  }

  initItems = (): void => {
    this.items = [
      {
        id: 'combobox-company',
        label: 'Empresa',
        data: new BehaviorSubject(this.service.generateData(12)),
      },
      {
        id: 'combobox-branch',
        label: 'Estabelecimento',
        data: new BehaviorSubject(this.service.generateData(12)),
      },
      {
        id: 'combobox-group',
        label: 'Grupo',
        data: new BehaviorSubject(this.service.generateData(5)),
      },
      {
        id: 'combobox-module',
        label: 'Módulo',
        data: new BehaviorSubject(this.service.generateData(12)),
      },
    ];
  };
}
