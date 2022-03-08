import { Injectable } from '@angular/core';
import { BentoContextualHeaderItem } from '@bento/bento-ng';
import { Branch, Company, Group, ManagerBarInfo, Module } from '../manager.model';

@Injectable({
  providedIn: 'root',
})
export class ManagerBarInfoService {
  managerBarInfo: BentoContextualHeaderItem[] = [];

  setManagerBarInfo = (model: Partial<ManagerBarInfo>): BentoContextualHeaderItem[] => {
    this.managerBarInfo = [];
    const company = model.company?.value as Company;
    const branch = model.branch?.value as Branch;
    const group = model.group?.value as Group;
    const module = model.module?.value as Module;
    const companyInfo = new BentoContextualHeaderItem(
      `${company.id || ''} - ${company?.description || ''}`,
      `tenant (ambiente)`,
      'bento-icon-building'
    );
    const branchInfo = new BentoContextualHeaderItem(
      `${branch.codEstab || ''} - ${branch?.razaoSocial || ''}`,
      '',
      'bento-icon-buildings'
    );
    const moduleInfo = new BentoContextualHeaderItem(
      module.name || '',
      group.description || '',
      'bento-icon-home'
    );
    this.managerBarInfo.push(companyInfo, branchInfo, moduleInfo);
    return this.managerBarInfo;
  };
}
