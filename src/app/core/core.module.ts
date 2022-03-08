import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ManagerComponent } from './components/manager/manager.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoreRoutingModule } from './core-routing.module';
import { ManagerBarInfoComponent } from './components/manager/manager-bar-info/manager-bar-info.component';

@NgModule({
  declarations: [
    NavBarComponent,
    ManagerComponent,
    HomeComponent,
    PageNotFoundComponent,
    ManagerBarInfoComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, FormsModule, SharedModule],
  exports: [NavBarComponent, ManagerComponent],
})
export class CoreModule {}
