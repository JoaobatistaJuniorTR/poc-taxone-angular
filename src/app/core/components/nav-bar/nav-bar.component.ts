import { Component, OnDestroy, OnInit } from '@angular/core';
import { BentoToolbarItem } from '@bento/bento-ng';
import { Subscription } from 'rxjs';
import { StorageService } from '../../services/storage.service';
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

  constructor(private service: NavBarService, private storage: StorageService) {
    this.rightBarItems = [];
  }

  ngOnInit(): void {
    this.rightBarItems = this.initializeNavRight();

    if (this.storage.getItem('menuItems')) {
      this.menuItems = this.storage.getObject('menuItems');
    } else {
      this.menuItems = [];
    }

    this.subscription = this.service.menuItems.subscribe((items) => {
      this.storage.setObject('menuItems', items);
      this.menuItems = items;
    });
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
