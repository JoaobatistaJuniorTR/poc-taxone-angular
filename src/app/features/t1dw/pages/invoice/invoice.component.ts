import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't1dw-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.sass'],
})
export class InvoiceComponent implements OnInit {
  isHidden: boolean = false;

  invoiceId: string;

  treeData: any[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.treeData = this.createNavMenu();
    this.invoiceId = this.route.snapshot.params['invoice-id'];
  }

  private createNavMenu = (): any => {
    return [
      {
        name: 'Capa da Nota Fiscal',
        routePath: 'invoice',
        $bentoTreeItemOption: {
          selected: true,
        },
        iconName: 'bento-icon-file-filled',
        items: [
          { name: 'ICMS / ICMS-S / IPI', routePath: 'cover-icms-wrapper' },
          {
            name: 'PIS/COFINS / CSLL / ISS / INSS / IR',
            routePath: 'cover-pis-cofins-wrapper',
          },
          { name: 'Op. com Veículos Novos', routePath: 'cover-new-vehicles-operation' },
          { name: 'Inf. Origem/Destino', routePath: 'cover-origin-destination' },
          { name: 'Utilities', routePath: 'cover-utilities' },
          { name: 'NFe', routePath: 'cover-nfe' },
          { name: 'E-Social / REINF', routePath: 'cover-reinf' },
          { name: 'Sped Fiscal', routePath: 'cover-sped' },
          { name: 'Campos Reservados', routePath: 'cover-reserved-fields' },
          { name: 'Legislações Específicas', routePath: 'cover-specific-legislations' },
          { name: 'Formas de Pagamento', routePath: 'cover-payment-methods' },
          { name: 'R-2050/S-1250/R-2055', routePath: 'cover-admin-judic-processes' },
        ],
      },
      {
        name: 'Itens de Nota Fiscal (Mercadoria)',
        routePath: 't1dwNfe.itens',
        iconName: 'bento-icon-cart',
        hidden: true,
      },
      {
        name: 'Itens de Nota Fiscal (Serviço)',
        routePath: 't1dwNfe.itensServ',
        iconName: 'bento-icon-currency',
        hidden: true,
      },
      {
        name: 'Observações do Lançamento Fiscal',
        routePath: 't1dwNfe.tax-observations',
        iconName: 'bento-icon-bullet-list',
      },
      {
        name: 'Informações Complementares',
        routePath: 't1dwNfe.supplementary-info',
        iconName: 'bento-icon-tab-browser',
      },
      {
        name: 'Críticas e erros na Nota Fiscal',
        routePath: 't1dwNfe.errors',
        iconName: 'bento-icon-warning',
      },
    ];
  };

  onItemSelect(event: any) {
    if (event.items && event.items.length > 0) {
      const { routePath } = event.items[0];
      this.router.navigate([`${routePath}`], { relativeTo: this.route });
    } else {
      this.router.navigate(['cover'], { relativeTo: this.route });
    }
  }
}
