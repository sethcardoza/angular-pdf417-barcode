import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        ansemjo/angular-pdf417-barcode demo
      </h1>
      <span>
        Enter your text:
        <input [(ngModel)]="text">
      </span>
      <pdf417barcode [text]="text" [opts]="{ pxw: 2, pxh: 2 }"></pdf417barcode>
    </div>
  `,
  styles: []
})
export class AppComponent {
  public text = 'Hello, World!'
}
