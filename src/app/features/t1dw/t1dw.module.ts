import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { T1dwRoutingModule } from './t1dw-routing.module';
import { T1dwHomeComponent } from './t1dw-home/t1dw-home.component';

@NgModule({
  declarations: [T1dwHomeComponent],
  imports: [CommonModule, T1dwRoutingModule],
})
export class T1dwModule {}
