import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BentoComboboxSearchEvent } from '@bento/bento-ng';
import { BehaviorSubject } from 'rxjs';
import { Company, Group, ManagerBarInfo, ManagerModel } from './manager.model';
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

  constructor(private changeDetector: ChangeDetectorRef, private service: ManagerService) {}

  ngOnInit(): void {
    this.model = {};
    this.showManageBarInfoComponent = false;
    this.companyData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.branchData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.groupData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.moduleData$ = new BehaviorSubject<ManagerModel[]>([]);
    this.service.companies(0, '').subscribe((company) => {
      this.companyData$ = new BehaviorSubject(company);
    });
  }

  selectCompany = (managerModel: ManagerModel): void => {
    if (managerModel) {
      this.model.branch = undefined;
      this.model.group = undefined;
      const company = managerModel.value as Company;
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectBranch = (managerModel: ManagerModel): void => {
    this.model.module = undefined;
  };

  selectGroup = (managerModel: ManagerModel): void => {
    this.model.module = undefined;
    if (managerModel) {
      const group = this.model.group?.value as Group;
      const company = this.model.company?.value as Company;
      if (company && group) {
        this.service.modules(company.id, group.id).subscribe((modules) => {
          this.moduleData$ = new BehaviorSubject(modules);
        });
      }
    }
  };

  selectModule = (managerModel: ManagerModel): void => {
    if (managerModel && this.validateModel()) {
      this.showManageBarInfoComponent = true;
      this.companyData$.unsubscribe();
      this.branchData$.unsubscribe();
      this.groupData$.unsubscribe();
      this.moduleData$.unsubscribe();
    }
  };

  infiniteScrollBranch = (event: BentoComboboxSearchEvent) => {
    if (!event.search && this.model.company) {
      const company = this.model.company.value as Company;
      this.service.branches(company.id, event.currentIndex, '').subscribe((branches) => {
        this.branchData$.next(branches);
        this.changeDetector.detectChanges();
      });
    }
  };

  searchBranch = (event: BentoComboboxSearchEvent) => {
    if (this.model.company) {
      const company = this.model.company.value as Company;
      this.service.branches(company.id, event.currentIndex, event.search).subscribe((branches) => {
        this.branchData$ = new BehaviorSubject(branches);
      });
    }
  };

  resetItemsBranch = () => {
    if (this.model.company) {
      const company = this.model.company.value as Company;
      this.service.branches(company.id, 0, '').subscribe((branches) => {
        this.branchData$ = new BehaviorSubject(branches);
      });
    }
  };

  closeManagerBarInfo = () => {
    this.ngOnInit();
  };

  private validateModel = (): boolean => {
    return (
      this.model.company !== undefined &&
      this.model.branch !== undefined &&
      this.model.group !== undefined &&
      this.model.module !== undefined
    );
  };
}
