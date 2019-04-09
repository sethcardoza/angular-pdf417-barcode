import { Component, Input, ViewChild, AfterViewInit, OnChanges } from '@angular/core';

import { PDF417 } from './pdf417';

@Component({
  selector: 'pdf417barcode',
  template: `<div #container></div>`
})
export class Pdf417BarcodeComponent implements AfterViewInit, OnChanges {

  @Input() text: string = '';
  @Input() opts: any = {};
  @ViewChild('container') container: any;

  private pdf417 = PDF417;

  private update (): void {

    let aspectratio     : number = this.opts.aspect   || 4;
    let errorcorrection : number = this.opts.errlvl   || -1;
    let pixelheight     : number = this.opts.pxh      || 1;
    let pixelwidth      : number = this.opts.pxw      || 1

    /* update the barcode class */
    this.pdf417.init(this.text, errorcorrection, aspectratio);
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
        if (barcode['bcode'][r][c] == 1 && drawing != null) {
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