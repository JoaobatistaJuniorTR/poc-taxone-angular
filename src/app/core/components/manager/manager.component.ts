import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  BentoActionableItem,
  BentoComboboxOptions,
  BentoContextualHeaderItem,
} from '@bento/bento-ng';
import { BehaviorSubject } from 'rxjs';
import { NavBarService } from '../nav-bar/nav-bar.service';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass'],
})
export class ManagerComponent {
  model: any = {
    company: null,
    branch: null,
    group: null,
    module: null,
  };

  hasModuleSelected: boolean;

  companyData: BehaviorSubject<any[]>;

  branchData: BehaviorSubject<any[]>;

  groupData: BehaviorSubject<any[]>;

  moduleData: BehaviorSubject<any[]>;

  managerBarInfo: BentoContextualHeaderItem[];

  comboboxOptions: BentoComboboxOptions = {
    searchable: true,
    autoSelect: false,
    useServerSearch: false,
    searchCompare: (row, search) => {
      const searchLowerCase = search.toLocaleLowerCase();
      const name = `${row.id} ${row.description}`.toLowerCase();

      return (
        name.indexOf(searchLowerCase) > -1 ||
        row.id.toLocaleLowerCase().indexOf(searchLowerCase) > -1
      );
    },
    labelFormatter: (row) => `${row.id} - ${row.description}`,
  };

  constructor(
    private service: ManagerService,
    private router: Router,
    private navBarService: NavBarService
  ) {
    this.companyData = new BehaviorSubject(this.service.generateData(12));
    this.branchData = new BehaviorSubject(this.service.generateData(12));
    this.groupData = new BehaviorSubject(this.service.generateData(12));
    this.moduleData = new BehaviorSubject(this.service.generateData(12));
    this.managerBarInfo = [];
    this.hasModuleSelected = false;
  }

  openModule = (): void => {
    const { module } = this.model;
    if (module != null) {
      this.hasModuleSelected = true;
      this.managerBarInfo = this.service.setManagerBarInfo(this.model);
      this.router.navigateByUrl('t1dw');
    }
  };

  closeModule = (): BentoActionableItem => {
    return new BentoActionableItem(
      'Fechar módulo',
      'bento-icon-close-circle-filled',
      () => {
        this.model = {
          company: null,
          branch: null,
          group: null,
          module: null,
        };
        this.hasModuleSelected = false;
        this.router.navigateByUrl('');
        this.navBarService.changeMenuItems([]);
      }
    );
  };
}
