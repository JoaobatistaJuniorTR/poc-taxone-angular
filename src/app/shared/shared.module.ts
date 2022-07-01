/* eslint-disable max-len */
import { CommonModule } from '@angular/common';
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
import { BfmModule } from '@bento/bfm-ng';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { AlertComponent } from './components/alert/alert.component';
import { NumberInputComponent } from './components/number-input/number-input.component';

@NgModule({
  declarations: [
    ComboboxComponent,
    AutocompleteComponent,
    ModalComponent,
    ModalConfirmationComponent,
    DatePickerComponent,
    AlertComponent,
    NumberInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
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
    BfmModule,
  ],
  exports: [
    ComboboxComponent,
    AutocompleteComponent,
    ModalComponent,
    ModalConfirmationComponent,
    DatePickerComponent,
    AlertComponent,
    NumberInputComponent,
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
    BfmModule,
  ],
})
export class SharedModule {}
