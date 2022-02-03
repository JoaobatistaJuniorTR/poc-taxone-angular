import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, CoreRoutingModule, FormsModule, SharedModule],
  exports: [NavBarComponent],
})
export class CoreModule {}
