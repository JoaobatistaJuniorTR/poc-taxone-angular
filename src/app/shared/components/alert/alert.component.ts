import { Component, OnDestroy, OnInit } from '@angular/core';
import { BentoAlertItemOptions } from '@bento/bento-ng';
import { Subscription } from 'rxjs';
import { Alert } from './alert-model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass'],
})
export class AlertComponent implements OnInit, OnDestroy {
  alerts: BentoAlertItemOptions[] = [];

  alertSubscription: Subscription;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertSubscription = this.alertService.onAlert().subscribe((alert: Alert) => {
      const bentoAlert: BentoAlertItemOptions = {};
      bentoAlert.msg = alert.message;
      bentoAlert.type = alert.type;
      bentoAlert.closeable = alert.closeable;
      bentoAlert.timeout = alert.timeout;
      this.alerts.push(bentoAlert);
    });
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
  }
}
