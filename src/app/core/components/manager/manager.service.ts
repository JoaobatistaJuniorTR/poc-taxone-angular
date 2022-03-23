import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpProxyService } from '../../services/http-proxy.service';
import { LonestarService } from '../../services/lonestar.service';
import { ManagerMapper } from './manager.mapper';
import { ManagerModel, StorageId } from './manager.model';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(private proxy: HttpProxyService, private lonestar: LonestarService) {}

  async companies(page: number = 0, search?: string): Promise<ManagerModel[]> {
    return this.proxy
      .post('/configuration/empresas', {
        client: this.lonestar.userClient(),
        page,
        search: `"${search}"`,
      })
      .pipe(map((companies) => ManagerMapper.fromCompanies(companies)))
      .toPromise();
  }

  async branches(companyId: string, page: number, search: string): Promise<ManagerModel[]> {
    return this.proxy
      .post('/configuration/estabelecimentos', {
        client: this.lonestar.userClient(),
        empresa: companyId,
        page,
        search: `"${search}"`,
      })
      .pipe(map((branches) => ManagerMapper.fromBranches(branches)))
      .toPromise();
  }

  async groups(companyId: string): Promise<ManagerModel[]> {
    return this.proxy
      .post('/configuration/groups', {
        client: this.lonestar.userClient(),
        company: companyId,
      })
      .pipe(map((groups) => ManagerMapper.fromGroups(groups)))
      .toPromise();
  }

  async modules(companyId: string, groupId: string): Promise<ManagerModel[]> {
    return this.proxy
      .post('/configuration/applicationEntries', {
        client: this.lonestar.userClient(),
        company: companyId,
        group: groupId,
      })
      .pipe(map((modules) => ManagerMapper.fromModules(modules)))
      .toPromise();
  }

  async configModule(
    companyId: string,
    branchId: string,
    codModLicParameter: string
  ): Promise<StorageId> {
    const body = {
      empresa: companyId,
      client: this.lonestar.userClient(),
      estabelecimento: branchId,
      codModLicParameter,
    };
    return this.proxy.post('/configuration/empEstabConfig', body).toPromise();
  }
}
