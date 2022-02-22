import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BentoToolbarItem } from '@bento/bento-ng';
import { Subscription } from 'rxjs';
import { NavBarService } from 'src/app/core/components/nav-bar/nav-bar.service';

@Component({
  selector: 'app-t1dw-home',
  templateUrl: './t1dw-home.component.html',
  styleUrls: ['./t1dw-home.component.sass'],
})
export class T1dwHomeComponent implements OnInit, OnDestroy {
  menuItems: BentoToolbarItem[];

  subscription: Subscription;

  constructor(private navBarService: NavBarService, private router: Router) {
    this.menuItems = [];
    this.subscription = this.navBarService.menuItems.subscribe(
      // eslint-disable-next-line no-return-assign
      (items) => (this.menuItems = items)
    );
  }

  ngOnInit(): void {
    this.menuItems = this.changeMenuItems();
    this.navBarService.changeMenuItems(this.menuItems);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeMenuItems = (): BentoToolbarItem[] => {
    return [
      {
        label: 'Megamenu',
        type: 'takeover',
        megamenu: [
          {
            label: 'Examples',
            disabled: false,
            menu: [
              {
                label: 'Grid',
                action: () => {
                  this.router.navigateByUrl('t1dw/example-grid');
                },
              },
              {
                label: 'Application 2',
                action: () => {
                  console.info('Application 2');
                },
              },
              {
                label: 'Application 3',
                action: () => {
                  console.info('Application 3');
                },
              },
            ],
          },
          {
            label: 'Category 2',
            disabled: false,
            menu: [
              {
                label: 'Application 4',
                action: () => {
                  console.info('Application 4');
                },
              },
              {
                label: 'Application 5',
                action: () => {
                  console.info('Application 6');
                },
              },
              {
                label: 'Application 6',
                action: () => {
                  console.info('Application 6');
                },
              },
            ],
          },
          {
            label: 'Category 3',
            disabled: false,
            menu: [
              {
                label: 'Application 7',
                action: () => {
                  console.info('Application 7');
                },
              },
              {
                label: 'Application 8',
                action: () => {
                  console.info('Application 8');
                },
              },
              {
                label: 'Application 9',
                action: () => {
                  console.info('Application 9');
                },
              },
              {
                label: 'Application 10',
                action: () => {
                  console.info('Application 10');
                },
              },
              {
                label: 'Application 11',
                action: () => {
                  console.info('Application 11');
                },
              },
            ],
          },
          {
            label: 'Category 4',
            disabled: false,
            menu: [
              {
                label: 'Application 12',
                action: () => {
                  console.info('Application 12');
                },
              },
              {
                label: 'Application 13',
                action: () => {
                  console.info('Application 13');
                },
              },
              {
                label: 'Application 14',
                action: () => {
                  console.info('Application 14');
                },
              },
              {
                label: 'Application 15',
                action: () => {
                  console.info('Application 15');
                },
              },
            ],
          },
          {
            label: 'Category 5',
            disabled: false,
            menu: [
              {
                label: 'Application 16',
                action: () => {
                  console.info('Application 16');
                },
              },
              {
                label: 'Application 17',
                action: () => {
                  console.info('Application 17');
                },
              },
              {
                label: 'Application 18',
                action: () => {
                  console.info('Application 18');
                },
              },
            ],
          },
        ],
      },
    ];
  };
}
