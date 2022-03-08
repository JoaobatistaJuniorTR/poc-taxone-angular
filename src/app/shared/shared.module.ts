import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BentoModule, BentoNgZoneWatcherModule } from '@bento/bento-ng';
import { BentoD3Module } from '@bento/bento-ng-d3';
import { BentoD3DataMapModule } from '@bento/bento-ng-datamap';
import { BentoFlexGridControlModule } from '@bento/bento-ng-flexgrid-control';
import { BentoTransferboxModule } from '@bento/bento-ng-transferbox';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjGridGrouppanelModule } from '@grapecity/wijmo.angular2.grid.grouppanel';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComboboxComponent } from './components/combobox/combobox.component';

@NgModule({
  declarations: [ComboboxComponent],
  imports: [
    CommonModule,
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
    BentoNgZoneWatcherModule,
  ],
  exports: [
    ComboboxComponent,
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
    BentoNgZoneWatcherModule,
  ],
})
export class SharedModule {}
