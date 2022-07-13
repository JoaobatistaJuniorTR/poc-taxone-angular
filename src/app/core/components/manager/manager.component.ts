import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BentoComboboxSearchEvent } from '@bento/bento-ng';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from '../../services/storage.service';
import { NavBarService } from '../nav-bar/nav-bar.service';
import { ManagerMapper } from './manager.mapper';
import { Branch, Company, Group, ManagerBarInfo, ManagerModel, Module } from './manager.model';
import { ManagerService } from './manager.service';

@Component({
  selector: 't1dw-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass'],
})
export class ManagerComponent implements OnInit {
  model: Partial<ManagerBarInfo>;

  companyBusyLoader: boolean = false;

  branchesBusyLoader: boolean = false;

  groupsBusyLoader: boolean = false;

  modulesBusyLoader: boolean = false;

  showManageBarInfoComponent: boolean = false;

  companyData$: BehaviorSubject<ManagerModel[]>;

  branchData$: BehaviorSubject<ManagerModel[]>;

  groupData$: BehaviorSubject<ManagerModel[]>;

  moduleData$: BehaviorSubject<ManagerModel[]>;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private service: ManagerService,
    private storage: StorageService,
    private router: Router,
    private navBarservice: NavBarService
  ) {}

  async ngOnInit() {
    this.model = {};
    this.companyData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.branchData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.groupData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.moduleData$ = new BehaviorSubject<ManagerModel[]>([]);

    const moduleData: any = this.storage.getObject('moduleData');

    if (moduleData) {
      this.model.company = ManagerMapper.fromCompany(moduleData.company);
      this.model.branch = ManagerMapper.fromBranch(moduleData.branch);
      this.model.group = ManagerMapper.fromGroup(moduleData.group);
      this.model.module = ManagerMapper.fromModule(moduleData.module);
      this.showManageBarInfoComponent = true;
    } else {
      this.showManageBarInfoComponent = false;
      this.companyBusyLoader = true;
      this.service
        .companies(0, '')
        .then((companies: ManagerModel[]) => {
          this.companyData$ = new BehaviorSubject(companies);
        })
        .finally(() => {
          this.companyBusyLoader = false;
        });
    }
  }

  async selectCompany(managerModel: ManagerModel) {
    if (managerModel) {
      this.model.branch = undefined;
      this.model.group = undefined;
      const company = managerModel.value as Company;

      this.branchesBusyLoader = true;
      this.service
        .branches(company.id, 0, '')
        .then((branches: ManagerModel[]) => {
          this.branchData$ = new BehaviorSubject(branches);
        })
        .finally(() => {
          this.branchesBusyLoader = false;
        });

      this.groupsBusyLoader = true;
      this.service
        .groups(company.id)
        .then((groups: ManagerModel[]) => {
          this.groupData$ = new BehaviorSubject(groups);
        })
        .finally(() => {
          this.groupsBusyLoader = false;
        });
    } else {
      this.ngOnInit();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectBranch(managerModel: ManagerModel) {
    this.model.module = undefined;
  }

  async selectGroup(managerModel: ManagerModel) {
    this.model.module = undefined;
    if (managerModel) {
      const group = this.model.group?.value as Group;
      const company = this.model.company?.value as Company;
      if (company && group) {
        this.modulesBusyLoader = true;
        this.service
          .modules(company.id, group.id)
          .then((modules: ManagerModel[]) => {
            this.moduleData$ = new BehaviorSubject(modules);
          })
          .finally(() => {
            this.modulesBusyLoader = false;
          });
      }
    }
  }

  async selectModule(managerModel: ManagerModel) {
    if (managerModel && this.validateModel()) {
      this.showManageBarInfoComponent = true;
      this.companyData$.unsubscribe();
      this.branchData$.unsubscribe();
      this.groupData$.unsubscribe();
      this.moduleData$.unsubscribe();
      await this.setupModule();
      await this.openModule();
    }
  }

  async infiniteScrollBranch(event: BentoComboboxSearchEvent) {
    if (!event.search && this.model.company) {
      const company = this.model.company.value as Company;
      this.branchesBusyLoader = true;
      this.service
        .branches(company.id, event.currentIndex, '')
        .then((branches: ManagerModel[]) => {
          this.branchData$.next(branches);
        })
        .finally(() => {
          this.changeDetector.detectChanges();
          this.branchesBusyLoader = false;
        });
    }
  }

  async searchBranch(event: BentoComboboxSearchEvent) {
    if (this.model.company) {
      const company = this.model.company.value as Company;
      this.branchesBusyLoader = true;
      this.service
        .branches(company.id, event.currentIndex, event.search)
        .then((branches: ManagerModel[]) => {
          this.branchData$ = new BehaviorSubject(branches);
        })
        .finally(() => {
          this.branchesBusyLoader = false;
        });
    }
  }

  async resetItemsBranch() {
    if (this.model.company) {
      const company = this.model.company.value as Company;
      const branches = await this.service.branches(company.id, 0, '');
      this.branchData$ = new BehaviorSubject(branches);
    }
  }

  async setupModule() {
    const company = this.model.company?.value as Company;
    const branch = this.model.branch?.value as Branch;
    const group = this.model.group?.value as Group;
    const module = this.model.module?.value as Module;
    const configModule = await this.service.configModule(company.id, branch.codEstab, module.codModLicParameter);
    this.storage.setObject('moduleData', { company, branch, group, module });
    this.storage.setItem(environment.storageIdKey, configModule.storageID);
  }

  async openModule(): Promise<void> {
    await this.router.navigateByUrl('t1dw');
  }

  closeManagerBarInfo() {
    this.navBarservice.changeMenuItems([]);
    this.storage.removeItem('moduleData');
    this.storage.removeItem(environment.storageIdKey);
    this.ngOnInit();
  }

  private validateModel = (): boolean => {
    return (
      this.model.company !== undefined &&
      this.model.branch !== undefined &&
      this.model.group !== undefined &&
      this.model.module !== undefined
    );
  };
}
