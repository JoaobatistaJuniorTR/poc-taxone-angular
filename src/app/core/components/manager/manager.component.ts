import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BentoComboboxSearchEvent } from '@bento/bento-ng';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from '../../services/storage.service';
import { Branch, Company, Group, ManagerBarInfo, ManagerModel, Module } from './manager.model';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass'],
})
export class ManagerComponent implements OnInit {
  model: Partial<ManagerBarInfo>;

  showManageBarInfoComponent: boolean = false;

  companyData$: BehaviorSubject<ManagerModel[]>;

  branchData$: BehaviorSubject<ManagerModel[]>;

  groupData$: BehaviorSubject<ManagerModel[]>;

  moduleData$: BehaviorSubject<ManagerModel[]>;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private service: ManagerService,
    private storage: StorageService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.model = {};
    this.showManageBarInfoComponent = false;
    this.companyData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.branchData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.groupData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.moduleData$ = new BehaviorSubject<ManagerModel[]>([]);
    const companies = await this.service.companies(0, '');
    this.companyData$ = new BehaviorSubject(companies);
  }

  async selectCompany(managerModel: ManagerModel) {
    if (managerModel) {
      this.model.branch = undefined;
      this.model.group = undefined;
      const company = managerModel.value as Company;
      const branches = await this.service.branches(company.id, 0, '');
      this.branchData$ = new BehaviorSubject(branches);
      const groups = await this.service.groups(company.id);
      this.groupData$ = new BehaviorSubject(groups);
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
        const modules = await this.service.modules(company.id, group.id);
        this.moduleData$ = new BehaviorSubject(modules);
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
      const branches = await this.service.branches(company.id, event.currentIndex, '');
      this.branchData$.next(branches);
      this.changeDetector.detectChanges();
    }
  }

  async searchBranch(event: BentoComboboxSearchEvent) {
    if (this.model.company) {
      const company = this.model.company.value as Company;
      const branches = await this.service.branches(company.id, event.currentIndex, event.search);
      this.branchData$ = new BehaviorSubject(branches);
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
    const module = this.model.module?.value as Module;
    const configModule = await this.service.configModule(
      company.id,
      branch.codEstab,
      module.codModLicParameter
    );
    this.storage.setItem(environment.storageIdKey, configModule.storageID);
  }

  async openModule(): Promise<void> {
    await this.router.navigateByUrl('t1dw');
  }

  closeManagerBarInfo() {
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
