import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'lib-formly-repeat-section',
  styleUrls: [],
  template: `
  <div fxLayout="row" fxLayoutAlign="end">
    <button mat-mini-fab (click)="add()">
      <mat-icon>add</mat-icon>
    </button>
  </div>

  <div class="fields" fxLayout="row" fxFlexLayoutGap="10px" fxLayout.xs="column"  *ngFor="let field of field.fieldGroup; let i = index" >
    <formly-field [field]="field"></formly-field>
    <span>
        <button mat-button color="warn" fxFlex (click)="remove(i)">
          <mat-icon>close</mat-icon>
        </button>
    </span>
  </div>
  `
})
export class FormlyRepeatSectionComponent extends FieldArrayType {


}
