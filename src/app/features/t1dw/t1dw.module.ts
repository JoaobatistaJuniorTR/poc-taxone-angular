import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { ExampleGridComponent } from './example-grid/example-grid.component';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { T1dwHomeComponent } from './t1dw-home/t1dw-home.component';
import { T1dwRoutingModule } from './t1dw-routing.module';

@NgModule({
  declarations: [T1dwHomeComponent, ExampleGridComponent],
  imports: [CommonModule, HttpClientModule, SharedModule, FormsModule, T1dwRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
    {
      provide: environment.contextProvider,
      useValue: environment.contextT1dw,
    },
  ],
})
export class T1dwModule {}
