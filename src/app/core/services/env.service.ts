/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { LonestarService } from './lonestar.service';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  private _apiUrl: string;

  get apiUrl(): string {
    return this._apiUrl;
  }

  private _contextApp: string;

  get contextApp(): string {
    return this._contextApp;
  }

  constructor(private lonestarService: LonestarService) {}

  async init(): Promise<void> {
    await this.setEnvVariables();
  }

  async setContextApp(context: string) {
    this._contextApp = context;
  }

  private async setEnvVariables() {
    this._apiUrl = await this.lonestarService.baseWebServiceUrl();
  }
}
