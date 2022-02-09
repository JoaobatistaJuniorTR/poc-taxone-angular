import { Component, OnDestroy, OnInit } from '@angular/core';
import { BentoToolbarItem } from '@bento/bento-ng';
import { Subscription } from 'rxjs';
import { INavRightBar } from './nav-bar.interface';
import { NavBarService } from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  rightBarItems: INavRightBar[];

  menuItems: BentoToolbarItem[];

  subscription: Subscription | undefined;

  constructor(private service: NavBarService) {
    this.menuItems = [];
    this.rightBarItems = [];
  }

  ngOnInit(): void {
    this.rightBarItems = this.initializeNavRight();

    this.subscription = this.service.menuItems.subscribe(
      // eslint-disable-next-line no-return-assign
      (items) => (this.menuItems = items)
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  initializeNavRight = (): INavRightBar[] => {
    return [
      {
        title: 'Transferência de arquivos',
        icon: 'bento-icon-cloud-download',
        callback: (): void => {
          alert('download');
        },
      },
      {
        title: 'Download visualizador PSRX',
        icon: 'bento-icon-books',
        callback: (): void => {
          alert('Download PSRX');
        },
      },
      {
        title: 'Ideias e sugestões',
        icon: 'bento-icon-resources',
        callback: this.openIdeasAndSuggestions,
      },
      {
        title: 'Minhas configurações',
        icon: 'bento-icon-user',
        callback: (): void => {
          alert('Minhas configurações');
        },
      },
    ];
  };

  openIdeasAndSuggestions = (): void => {
    window.open('http://customerinfluencer.thomsonreuters.com/', '_blank');
  };
}
