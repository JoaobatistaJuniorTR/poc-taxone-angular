import { Injectable } from '@angular/core';
import { BentoContextualHeaderItem } from '@bento/bento-ng';
import { ManagerBarInfo } from '../manager.model';

@Injectable({
  providedIn: 'root',
})
export class ManagerBarInfoService {
  managerBarInfo: BentoContextualHeaderItem[] = [];

  setManagerBarInfo = (model: Partial<ManagerBarInfo>): BentoContextualHeaderItem[] => {
    this.managerBarInfo = [];
    const { company, branch, group, module } = model;
    const companyInfo = new BentoContextualHeaderItem(
      `${company?.id || ''} - ${company?.description || ''}`,
      `tenant (ambiente)`,
      'bento-icon-building'
    );
    const branchInfo = new BentoContextualHeaderItem(
      `${branch?.codEstab || ''} - ${branch?.razaoSocial || ''}`,
      '',
      'bento-icon-buildings'
    );
    const moduleInfo = new BentoContextualHeaderItem(
      module?.name || '',
      group?.description || '',
      'bento-icon-home'
    );
    this.managerBarInfo.push(companyInfo, branchInfo, moduleInfo);
    return this.managerBarInfo;
  };
}
