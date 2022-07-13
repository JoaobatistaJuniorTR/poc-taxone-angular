import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BentoActionableItem, BentoContextualHeaderItem } from '@bento/bento-ng';
import { NavBarService } from '../../nav-bar/nav-bar.service';
import { ManagerBarInfo } from '../manager.model';
import { ManagerBarInfoService } from './manager-bar-info.service';

@Component({
  selector: 't1dw-manager-bar-info',
  templateUrl: './manager-bar-info.component.html',
  styleUrls: ['./manager-bar-info.component.sass'],
})
export class ManagerBarInfoComponent implements OnInit {
  managerBarInfo: BentoContextualHeaderItem[];

  @Input() modelManagerBarInfo: Partial<ManagerBarInfo>;

  @Output() closeModule = new EventEmitter();

  constructor(private router: Router, private service: ManagerBarInfoService, private navBarService: NavBarService) {}

  ngOnInit(): void {
    this.managerBarInfo = [];
    this.managerBarInfo = this.service.setManagerBarInfo(this.modelManagerBarInfo);
  }

  close = (): BentoActionableItem => {
    return new BentoActionableItem('Fechar módulo', 'bento-icon-close-thick', () => {
      this.router.navigateByUrl('');
      this.navBarService.changeMenuItems([]);
      this.closeModule.emit();
    });
  };
}
