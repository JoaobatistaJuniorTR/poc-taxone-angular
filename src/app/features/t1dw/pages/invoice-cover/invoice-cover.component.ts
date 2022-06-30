import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BentoComboboxColumn } from '@bento/bento-ng';
import { NgForm } from '@angular/forms';
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

  resetErrors: boolean;

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

  @ViewChild('f') private form: NgForm;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private estabelecimentoService: EstabelecimentoService
  ) {}

  validations = {
    required: '{0} é obrigatório',
  };

  ngOnInit(): void {
    this.invoiceId = this.route.parent?.snapshot.params['invoice-id'];
    if (this.invoiceId) {
      this.findInvoiceById(this.invoiceId);
    }
  }

  private findInvoiceById(invoiceId: string) {
    this.invoiceService.getInvoiceById(invoiceId).then((value: any) => {
      this.coverData = value;
      console.log(this.coverData);
      this.findEstab(this.coverData.id.codEmpresa, this.coverData.id.codEstab);
    });
  }

  findEstab(codEmpresa: string, codEstab: string) {
    this.estabelecimentoService.findByCodEmpresaAndCodEstab(codEmpresa, codEstab).then((value: any) => {
      console.log(value);
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

  onSubmit = () => {};
}
