import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BentoModule } from '@bento/bento-ng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BentoD3Module } from '@bento/bento-ng-d3';
import { BentoD3DataMapModule } from '@bento/bento-ng-datamap';
import { BentoTransferboxModule } from '@bento/bento-ng-transferbox';
import { BentoFlexGridControlModule } from '@bento/bento-ng-flexgrid-control';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjGridGrouppanelModule } from '@grapecity/wijmo.angular2.grid.grouppanel';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BentoModule,
    NgbModule,
    BentoD3Module,
    BentoD3DataMapModule,
    BentoTransferboxModule,
    BentoFlexGridControlModule,
    WjGridModule,
    WjInputModule,
    WjGridFilterModule,
    WjGridGrouppanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
