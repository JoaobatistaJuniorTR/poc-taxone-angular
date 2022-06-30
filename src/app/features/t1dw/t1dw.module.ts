import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { ExampleGridComponent } from './example-grid/example-grid.component';
import { T1dwHomeComponent } from './t1dw-home/t1dw-home.component';
import { T1dwRoutingModule } from './t1dw-routing.module';
import { InvoicesListComponent } from './pages/invoices-list/invoices-list.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { InvoiceCoverComponent } from './pages/invoice-cover/invoice-cover.component';

@NgModule({
  declarations: [
    T1dwHomeComponent,
    ExampleGridComponent,
    InvoicesListComponent,
    InvoiceComponent,
    InvoiceCoverComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    T1dwRoutingModule,
  ],
  providers: [
    {
      provide: environment.contextProvider,
      useValue: environment.contextT1dw,
    },
  ],
  bootstrap: [T1dwHomeComponent],
})
export class T1dwModule {}
