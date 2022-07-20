import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { InvoicesListComponent } from './pages/invoices-list/invoices-list.component';
import { T1dwHomeComponent } from './t1dw-home/t1dw-home.component';

const routes: Routes = [
  {
    path: '',
    component: T1dwHomeComponent,
  },
  {
    path: 'invoices',
    component: InvoicesListComponent,
    children: [
      {
        path: 'invoice',
        component: InvoiceComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T1dwRoutingModule {}
