import { Component, OnInit } from '@angular/core';
import { BentoToolbarItem } from '@bento/bento-ng';

import { Router } from '@angular/router';
import { NavBarService } from 'src/app/core/components/nav-bar/nav-bar.service';

@Component({
  selector: 'app-t1dw-home',
  templateUrl: './t1dw-home.component.html',
  styleUrls: ['./t1dw-home.component.sass'],
})
export class T1dwHomeComponent implements OnInit {
  constructor(private navBarService: NavBarService, private router: Router) {}

  ngOnInit(): void {
    this.navBarService.changeMenuItems(this.changeMenuItems());
  }

  private changeMenuItems = (): BentoToolbarItem[] => {
    return [
      {
        label: 'Manutenção',
        type: 'takeover',
        megamenu: [
          {
            label: 'Documento Fiscal',
            menu: [
              {
                label: 'Documento Fiscal de Mercadoria e Serviço',
                routerLink: { href: 't1dw/invoices' },
              },
            ],
          },
        ],
      },
    ];
  };
}
