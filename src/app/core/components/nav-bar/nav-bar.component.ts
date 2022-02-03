import { Component, OnInit } from '@angular/core';
import { INavRightBar } from './nav-bar.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
})
export class NavBarComponent implements OnInit {
  rightBarItems: INavRightBar[];

  constructor() {
    this.rightBarItems = [];
  }

  ngOnInit(): void {
    this.rightBarItems = this.initializeNavRight();
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
