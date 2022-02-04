import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { T1dwHomeComponent } from './t1dw/t1dw-home/t1dw-home.component';

const routes: Routes = [{ path: '', component: T1dwHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
