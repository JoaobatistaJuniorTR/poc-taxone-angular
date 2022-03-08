import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BentoComboboxSearchEvent } from '@bento/bento-ng';
import { BehaviorSubject } from 'rxjs';
import { Branch, Company, Group, ManagerBarInfo, ManagerModel, Module } from './manager.model';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass'],
})
export class ManagerComponent implements OnInit, OnDestroy {
  model: Partial<ManagerBarInfo>;

  showManageBarInfoComponent: boolean;

  companyData$: BehaviorSubject<ManagerModel[]>;

  branchData$: BehaviorSubject<ManagerModel[]>;

  groupData$: BehaviorSubject<ManagerModel[]>;

  moduleData$: BehaviorSubject<ManagerModel[]>;

  constructor(private changeDetector: ChangeDetectorRef, private service: ManagerService) {}

  ngOnDestroy(): void {
    this.companyData$.unsubscribe();
    this.branchData$.unsubscribe();
    this.groupData$.unsubscribe();
    this.moduleData$.unsubscribe();
  }

  ngOnInit(): void {
    this.model = {};
    this.showManageBarInfoComponent = false;
    this.companyData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.branchData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.groupData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.moduleData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.service.companies().subscribe((company) => {
      this.companyData$ = new BehaviorSubject(company);
    });
  }

  infiniteScrollBranch = (event: BentoComboboxSearchEvent) => {
    if (!event.search && this.model.company) {
      this.service.branches(this.model.company.id, event.currentIndex, '').subscribe((branches) => {
        this.branchData$.next(branches);
        this.changeDetector.detectChanges();
      });
    }
  };

  searchBranch = (event: BentoComboboxSearchEvent) => {
    if (this.model.company) {
      this.service
        .branches(this.model.company.id, event.currentIndex, event.search)
        .subscribe((branches) => {
          this.branchData$ = new BehaviorSubject(branches);
        });
    }
  };

  resetItemsBranch = () => {
    if (this.model.company) {
      this.service.branches(this.model.company.id, 0, '').subscribe((branches) => {
        this.branchData$ = new BehaviorSubject(branches);
      });
    }
  };

  disableCombo = (data: BehaviorSubject<ManagerModel[]>): boolean => {
    return data.getValue().length === 0;
  };

  selectCompany = (model: ManagerModel): void => {
    if (model !== null) {
      const company: Company = { ...model.value };
      this.model.company = company;
      this.service.branches(company.id, 0, '').subscribe((branches) => {
        this.branchData$ = new BehaviorSubject(branches);
      });
      this.service.groups(company.id).subscribe((groups) => {
        this.groupData$ = new BehaviorSubject(groups);
      });
    } else {
      this.ngOnInit();
    }
  };

  selectBranch = (managerModel: ManagerModel): void => {
    if (managerModel !== null) {
      const branch: Branch = { ...managerModel.value };
      this.model.branch = branch;
    }
  };

  selectGroup = (model: ManagerModel): void => {
    if (model !== null) {
      const group: Group = { ...model.value };
      this.model.group = group;
      if (this.model.company && this.model.company.id) {
        this.service.modules(this.model.company.id, group.id).subscribe((modules) => {
          this.moduleData$ = new BehaviorSubject(modules);
        });
      }
    }
  };

  selectModule = (managerModel: ManagerModel): void => {
    if (managerModel !== null) {
      const module: Module = { ...managerModel.value };
      this.model.module = module;
      this.showManageBarInfoComponent = true;
    }
  };

  closeManagerBarInfo = () => {
    this.ngOnInit();
  };
}
