import { Component } from '@angular/core';
import { BentoContextualHeaderItem, BentoSubnavItem } from '@bento/bento-ng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  menu: BentoSubnavItem[];

  items: BentoContextualHeaderItem[];

  constructor() {
    this.menu = [
      {
        id: 'menu1',
        label: 'Menu 1',
        active: true,
        action: () => {
          this.setActive('menu1');
        },
      },
      {
        id: 'menu2',
        label: 'Menu 2',
        active: false,
        action: () => {
          this.setActive('menu2');
        },
      },
    ];
    this.items = [
      new BentoContextualHeaderItem(
        'Title one',
        'very long subtitle',
        'bento-icon-buildings'
      ),
    ];
  }

  private setActive = (menuId: string): void => {
    this.menu.forEach((item) => {
      item.active = item.id === menuId;
    });
  };
}
