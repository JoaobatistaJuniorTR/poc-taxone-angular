import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleGridComponent } from './example-grid/example-grid.component';
import { T1dwHomeComponent } from './t1dw-home/t1dw-home.component';

const routes: Routes = [
  {
    path: '',
    component: T1dwHomeComponent,
  },
  {
    path: 'example-grid',
    component: ExampleGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T1dwRoutingModule {}
