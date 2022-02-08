import { Injectable } from '@angular/core';
import { BentoContextualHeaderItem } from '@bento/bento-ng';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  managerBarInfo: BentoContextualHeaderItem[] = [];

  generateData = (size: number = 5): any[] => {
    const a = [];
    const product = [
      { id: '01', description: 'Antitrust' },
      { id: '02', description: 'Bankruptcy and restructuring' },
      { id: '03', description: 'Capital markets and corporate governance' },
      { id: '04', description: 'Commercial transactions' },
      { id: '05', description: 'Corporate and M&A' },
      { id: '06', description: 'Employee benefits and executive compensation' },
      { id: '07', description: 'Finance' },
      { id: '08', description: 'Intellectual property and technology' },
      { id: '09', description: 'Labor and employment' },
      { id: '10', description: 'Litigation' },
      { id: '11', description: 'Real estate' },
      { id: '12', description: 'Trusts and estates' },
    ];
    for (let i = 0; i < size; i += 1) {
      a.push(product[i]);
    }
    return a;
  };

  setManagerBarInfo = (model: any): BentoContextualHeaderItem[] => {
    this.managerBarInfo = [];
    const { company, branch, group, module } = model;
    const companyInfo = new BentoContextualHeaderItem(
      company.description,
      company.id,
      'bento-icon-building'
    );
    const branchInfo = new BentoContextualHeaderItem(
      branch.description,
      branch.id,
      'bento-icon-buildings'
    );
    const groupInfo = new BentoContextualHeaderItem(
      group.description,
      group.id,
      'bento-icon-group'
    );
    const moduleInfo = new BentoContextualHeaderItem(
      module.description,
      module.id,
      'bento-icon-home'
    );
    this.managerBarInfo.push(companyInfo, branchInfo, groupInfo, moduleInfo);
    return this.managerBarInfo;
  };
}
