import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ManagerBarInfoComponent } from './components/manager/manager-bar-info/manager-bar-info.component';
import { ManagerComponent } from './components/manager/manager.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoreRoutingModule } from './core-routing.module';
import { StorageIdInterceptor } from './interceptors/storage-id.interceptor';
import { EnvService } from './services/env.service';
import { LonestarService } from './services/lonestar.service';

@NgModule({
  declarations: [
    NavBarComponent,
    ManagerComponent,
    HomeComponent,
    PageNotFoundComponent,
    ManagerBarInfoComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, HttpClientModule, CoreRoutingModule, FormsModule, SharedModule],
  exports: [LayoutComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (envService: EnvService, lonestarService: LonestarService) => async () => {
        await lonestarService.hasMinotaurServices();
        await envService.init();
      },
      deps: [EnvService, LonestarService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StorageIdInterceptor,
      multi: true,
    },
    {
      provide: environment.contextProvider,
      useValue: environment.contextTaxone,
    },
  ],
})
export class CoreModule {}
