import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BentoComboboxColumn } from '@bento/bento-ng';
import { NgForm } from '@angular/forms';
import { SelectModel } from '../../../../shared/components/select/select-model';
import { InvoiceService } from '../../services/invoice.service';
import TmpX07DoctoFiscal from '../../model/TmpX07DoctoFiscal.model';
import { EstabelecimentoService } from '../../services/estabelecimento.service';
import { Pagination } from '../../model/interface.model';
import TmpX07DoctoFiscalId from '../../model/TmpX07DoctoFiscalId.model';

@Component({
  selector: 'app-invoice-cover',
  templateUrl: './invoice-cover.component.html',
  styleUrls: ['./invoice-cover.component.sass'],
})
export class InvoiceCoverComponent implements OnInit {
  value: string = '123456';
  private invoiceId: string;

  resetErrors: boolean;

  coverData: TmpX07DoctoFiscal;

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

  estabHeaderTranslation: any = {
    codEstab: 'Cód. Estabelecimento',
    razaoSocial: 'Razão Social',
    nomeFantasia: 'Nome Fantasia',
  };

  movtoESItems: SelectModel[] = [
    { value: '', label: 'Selecione uma opção' },
    { value: '1', label: '1 - Doc. de entrada, documentos de terceiros' },
    { value: '2', label: '2 - Doc. de entrada emitida pelo estabelecimento, acolhendo notas de produtores agropecuarios' },
    {
      value: '3',
      label: '3 - Doc. de entrada emitida pelo estabelecimento, por retorno de mercadorias não entregues ao destinatário',
    },
    { value: '4', label: '4 - Doc. de entrada emitida pelo estabelecimento, outros motivos legais' },
    { value: '5', label: '5 - Doc. de entrada emitida pelo estabelecimento, globalizando conhecimentos de frete' },
    { value: '6', label: '9 - Doc. de saída' },
  ];

  normDevItems: SelectModel[] = [
    { value: '', label: '' },
    { value: '1', label: '1 - Normal' },
    { value: '2', label: '2 - Devolução' },
  ];

  @ViewChild('f') private form: NgForm;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private estabelecimentoService: EstabelecimentoService
  ) {
    this.coverData = new TmpX07DoctoFiscal();
    this.coverData.id = new TmpX07DoctoFiscalId();
  }

  validations = {
    required: '{0} é obrigatório',
  };

  ngOnInit(): void {
    this.invoiceId = this.route.parent?.snapshot.params['invoice-id'];
    if (this.invoiceId) {
      this.findInvoiceById(this.invoiceId);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  isDisabled() {
    return false;
  }

  private findInvoiceById(invoiceId: string) {
    this.invoiceService.getInvoiceById(invoiceId).then((value: any) => {
      this.coverData = value;
      this.findEstab(this.coverData.id.codEmpresa, this.coverData.id.codEstab);
    });
  }

  findEstab(codEmpresa: string, codEstab: string) {
    this.estabelecimentoService.findByCodEmpresaAndCodEstab(codEmpresa, codEstab).then((value: any) => {
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