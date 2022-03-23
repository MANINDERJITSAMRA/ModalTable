import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalHelperService } from './modal-helper.service';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { ModalCompaniesComponent } from './modal-companies/modal-companies.component';
import { ModalCarsComponent } from './modal-cars/modal-cars.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ ModalHelperService],
  declarations: [
    AppComponent,
    ModalCompaniesComponent,
    ModalCarsComponent
  ],
  entryComponents: [
    ModalCompaniesComponent,
    ModalCarsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
