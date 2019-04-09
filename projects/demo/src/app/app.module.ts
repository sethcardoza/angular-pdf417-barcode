import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Pdf417BarcodeModule } from "pdf417-barcode";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Pdf417BarcodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
