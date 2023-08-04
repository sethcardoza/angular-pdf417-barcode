import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Pdf417BarcodeComponent } from 'pdf417-barcode';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Pdf417BarcodeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
