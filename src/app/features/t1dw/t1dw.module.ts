import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { T1dwRoutingModule } from './t1dw-routing.module';
import { T1dwHomeComponent } from './t1dw-home/t1dw-home.component';
import { ExampleGridComponent } from './example-grid/example-grid.component';

@NgModule({
  declarations: [T1dwHomeComponent, ExampleGridComponent],
  imports: [CommonModule, SharedModule, FormsModule, T1dwRoutingModule],
})
export class T1dwModule {}
