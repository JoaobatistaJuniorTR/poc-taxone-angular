/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface OnComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean | UrlTree;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<OnComponentDeactivate> {
  private readonly MESSAGE: string;

  constructor() {
    this.MESSAGE = 'Todos os dados alterados serão perdidos! Deseja continuar?';
  }

  canDeactivate(
    component: OnComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.canDeactivate()) {
      return true;
    }

    // eslint-disable-next-line no-restricted-globals, no-alert
    return confirm(this.MESSAGE);
  }
}
