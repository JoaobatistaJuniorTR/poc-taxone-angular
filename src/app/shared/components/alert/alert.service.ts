import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EnumAlert, Alert } from './alert-model';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private subject = new Subject<Alert>();

  onAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  success(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: EnumAlert.SUCCESS, message }));
  }

  error(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: EnumAlert.ERROR, message }));
  }

  info(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: EnumAlert.INFO, message }));
  }

  warn(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: EnumAlert.WARNING, message }));
  }

  alert(alert: Alert) {
    this.subject.next(alert);
  }
}
