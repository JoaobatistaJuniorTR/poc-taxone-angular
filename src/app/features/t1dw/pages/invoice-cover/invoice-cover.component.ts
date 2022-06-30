import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BentoComboboxColumn } from '@bento/bento-ng';
import { InvoiceService } from '../../services/invoice.service';
import TmpX07DoctoFiscal from '../../model/TmpX07DoctoFiscal.model';
import { EstabelecimentoService } from '../../services/estabelecimento.service';
import { Pagination } from '../../model/interface.model';

@Component({
  selector: 'app-invoice-cover',
  templateUrl: './invoice-cover.component.html',
  styleUrls: ['./invoice-cover.component.sass'],
})
export class InvoiceCoverComponent implements OnInit {
  private invoiceId: string;

  coverData: TmpX07DoctoFiscal = new TmpX07DoctoFiscal();

  estabelecimento: any;

  estabColumns: BentoComboboxColumn[] = [
    {
      name: 'codEstab',
      width: '170px',
    },
    {
      name: 'razaoSocial',
      width: '250px',
    },
    {
      name: 'nomeFantasia',
      width: '350px',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private estabelecimentoService: EstabelecimentoService
  ) {}

  ngOnInit(): void {
    this.invoiceId = this.route.parent?.snapshot.params['invoice-id'];
    if (this.invoiceId) {
      this.findInvoiceById(this.invoiceId);
    }
  }

  private findInvoiceById(invoiceId: string) {
    this.invoiceService.getInvoiceById(invoiceId).then((value: any) => {
      this.coverData = value;
      this.findEstab();
    });
  }

  findEstab() {
    this.estabelecimentoService
      .findByCodEmpresaAndCodEstab(this.coverData.id.codEmpresa, this.coverData.id.codEstab)
      .then((value: any) => {
        this.estabelecimento = value;
      });
  }

  estabCallBackFunction = (page: number, size: number, filter: string): Promise<any> => {
    const pagination: Pagination = { page, size };
    if (this.estabelecimento) {
      return this.estabelecimentoService.autocomplete(this.estabelecimento.codEmpresa, pagination, filter);
    }

    return this.estabelecimentoService.autocomplete('empty', pagination, filter);
  };
}
