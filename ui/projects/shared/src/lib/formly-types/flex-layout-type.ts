import { Component, OnInit } from '@angular/core';
import {  FieldType } from '@ngx-formly/core';

@Component({
  selector: 'lib-flex-layout-type',
  styleUrls: [],
  template: `
    <div
     class="content"
     [fxLayout]="to.fxLayout"
     [fxLayoutAlign]="to.fxLayoutAlign"
     fxLayout.xs="column"
     fxFlexFill
     >
     <formly-field *ngFor="let f of field.fieldGroup" [field]="f">
     </formly-field>
    </div>
  `
})
export class FlexLayoutTypeComponent extends FieldType {


}
