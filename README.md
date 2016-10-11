# Angular2 PDF417 Barcode

_PDF417 barcode generator Module for Angular 2_

An Angular2 component/module that creates a canvas with a PDF417 barcode from any string input.

## pdf417-js

This package uses PDF417-js, which is a direct port of parts of the [TCPDF PHP library].
The original library is licensed under the [LGPL], which also applies to this derivative work.

[TCPDF PHP library]: https://www.tcpdf.org/ "TCPDF project homepage"
[LGPL]: LICENSE

The version used for porting is `tcpdf_6_2_11` or more specific PDF417 class version `1.0.005`.

Original port is available on GitHub: [bkuzmic/pdf417-js]
[bkuzmic/pdf417-js]: https://github.com/bkuzmic/pdf417-js

## Angular 2

This package is for use in the [Angular 2] framework.
[Angular 2]: https://angular.io/

# Usage

In a parent / shared module, import the PDF417BarcodeComponent,
either by exporting the Component as a Directive or simply re-export the provided module:

```typescript
/* angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

/* third-party */
import { PDF417BarcodeModule } from 'pdf417-module';
...

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    PDF417BarcodeModule,
  ]
}) export class SharedModule { }
```

Then use it in your component's template:

```html
...
<div class="barcode">
  <h5>Scan me:</h5>
  <pdf417barcode [text]="'Hello, World!'"></pdf417barcode>
</div>
```
![barcode](https://cloud.githubusercontent.com/assets/11139925/19278474/9c18d700-8fdd-11e6-91c2-84727749e9b4.png)
