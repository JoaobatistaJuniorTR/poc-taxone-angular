import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpProxyService } from '../../services/http-proxy.service';
import { LonestarService } from '../../services/lonestar.service';
import { ManagerMapper } from './manager.mapper';
import { ManagerModel } from './manager.model';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(private proxy: HttpProxyService, private lonestar: LonestarService) {}

  companies(page: number = 0, search?: string): Observable<ManagerModel[]> {
    return this.proxy
      .post('/configuration/empresas', {
        client: this.lonestar.userClient(),
        page,
        search: `"${search}"`,
        storageId: '',
      })
      .pipe(map((companies) => ManagerMapper.fromCompanies(companies)));
  }

  branches(companyId: string, page: number, search: string): Observable<ManagerModel[]> {
    return this.proxy
      .post('/configuration/estabelecimentos', {
        client: this.lonestar.userClient(),
        empresa: companyId,
        page,
        search: `"${search}"`,
        storageId: '',
      })
      .pipe(map((branches) => ManagerMapper.fromBranches(branches)));
  }

  groups(companyId: string): Observable<ManagerModel[]> {
    return this.proxy
      .post('/configuration/groups', {
        client: this.lonestar.userClient(),
        company: companyId,
        storageId: '',
      })
      .pipe(map((groups) => ManagerMapper.fromGroups(groups)));
  }

  modules(companyId: string, groupId: string): Observable<ManagerModel[]> {
    return this.proxy
      .post('/configuration/applicationEntries', {
        client: this.lonestar.userClient(),
        company: companyId,
        group: groupId,
        storageId: '',
      })
      .pipe(map((modules) => ManagerMapper.fromModules(modules)));
  }
}
