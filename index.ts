import { Component, Input, ViewChild, AfterViewInit, OnChanges } from '@angular/core';

const pdf417 = require('./pdf417');

const pixelwidth: number = 1;
const pixelheight: number = 1;

@Component({
  selector: 'pdf417barcode',
  template: `<div #container></div>`
})
export class PDF417BarcodeComponent implements AfterViewInit, OnChanges {

  @Input() text: string = undefined;
  @ViewChild('container') container;

  private pdf417 = pdf417;

  private update (): void {

    /* update the barcode class */
    this.pdf417.init(this.text, null, 8);
    const barcode = this.pdf417.getBarcodeArray();

    /* create a new canvas and get drawing context */
    const newcanvas   = document.createElement('canvas');
    newcanvas.width   = pixelwidth  * barcode['num_cols'];
    newcanvas.height  = pixelheight * barcode['num_rows'];
    const drawing = newcanvas.getContext('2d');

    /* print barcode pixels */
    var y = 0;
    /* for each row */
    for (var r = 0; r < barcode['num_rows']; ++r) {
      var x = 0;
      /* for each column */
      for (var c = 0; c < barcode['num_cols']; ++c) {
        if (barcode['bcode'][r][c] == 1) {
          drawing.fillRect(x, y, pixelwidth, pixelheight);
        }
        x += pixelwidth;
      }
      y += pixelheight;
    }

    /* replace canvas in container */
    const el: HTMLCanvasElement = this.container.nativeElement;
    if (el.firstChild) el.removeChild(el.firstChild);
    el.appendChild(newcanvas);

  }

  /* handle init and changes of input data */
  ngAfterViewInit() { this.update(); }
  ngOnChanges() { this.update(); }

}

/* export a component for easier import too */
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ PDF417BarcodeComponent ],
  exports:      [ PDF417BarcodeComponent ]
})
export class PDF417BarcodeModule { }

