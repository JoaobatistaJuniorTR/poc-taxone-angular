import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceCoverComponent } from './pages/invoice-cover/invoice-cover.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { InvoicesListComponent } from './pages/invoices-list/invoices-list.component';
import { T1dwHomeComponent } from './t1dw-home/t1dw-home.component';

const routes: Routes = [
  {
    path: '',
    component: T1dwHomeComponent,
  },
  {
    path: 'invoice',
    component: InvoicesListComponent,
    children: [
      {
        path: 'edit/:invoice-id',
        component: InvoiceComponent,
        children: [
          {
            path: 'cover',
            component: InvoiceCoverComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T1dwRoutingModule {}
