import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { BentoActionableItem, BentoContextualHeaderItem } from '@bento/bento-ng';
import { NavBarService } from '../../nav-bar/nav-bar.service';
import { ManagerBarInfo } from '../manager.model';
import { ManagerBarInfoService } from './manager-bar-info.service';

@Component({
  selector: 'app-manager-bar-info',
  templateUrl: './manager-bar-info.component.html',
  styleUrls: ['./manager-bar-info.component.sass'],
})
export class ManagerBarInfoComponent implements OnInit, OnChanges {
  managerBarInfo: BentoContextualHeaderItem[];

  @Input() hasModuleSelected: boolean = false;

  @Input() modelManagerBarInfo: Partial<ManagerBarInfo>;

  @Output() closeModule = new EventEmitter();

  constructor(
    private router: Router,
    private service: ManagerBarInfoService,
    private navBarService: NavBarService
  ) {}

  ngOnInit(): void {
    this.hasModuleSelected = false;
    this.managerBarInfo = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasModuleSelected.currentValue) {
      this.managerBarInfo = this.service.setManagerBarInfo(this.modelManagerBarInfo);
      this.router.navigateByUrl('t1dw');
    }
  }

  close = (): BentoActionableItem => {
    return new BentoActionableItem('Fechar módulo', 'bento-icon-close-thick', () => {
      this.hasModuleSelected = false;
      this.router.navigateByUrl('');
      this.navBarService.changeMenuItems([]);
      this.closeModule.emit();
    });
  };
}
