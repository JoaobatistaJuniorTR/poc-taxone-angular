import { Injectable } from '@angular/core';
import { Account, AccountService, ConfigurationService } from '@minotaur/services';

@Injectable({
  providedIn: 'root',
})
export class LonestarService {
  public static hasMinotaur: boolean = false;

  userClient = async () => {
    if (LonestarService.hasMinotaur) {
      const { id }: Account = await AccountService.currentAccount;
      return id;
    }
    return 'req2';
  };

  baseWebServiceUrl = async () => {
    if (LonestarService.hasMinotaur) {
      return ConfigurationService.baseWebServicesUrl;
    }
    return window.location.origin;
  };

  getEnvironment = async () => {
    if (LonestarService.hasMinotaur) {
      return ConfigurationService.environment;
    }
    return '';
  };

  hasMinotaurServices = async () => {
    await ConfigurationService.environment
      .then(() => {
        LonestarService.hasMinotaur = true;
      })
      .catch(() => {
        LonestarService.hasMinotaur = false;
      });
  };

  getLonestarUserName = (): string => {
    return 'TESTE';
  };
}
