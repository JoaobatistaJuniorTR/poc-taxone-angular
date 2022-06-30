import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateT1dwRouteGuard } from '../features/t1dw/guard/can-activate-t1dw-route.guard';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 't1dw',
    loadChildren: () => import('../features/t1dw/t1dw.module').then((m) => m.T1dwModule),
    canActivate: [CanActivateT1dwRouteGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
