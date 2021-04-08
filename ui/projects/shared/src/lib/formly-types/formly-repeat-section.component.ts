import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'lib-formly-repeat-section',
  styleUrls: [],
  template: `
  <div>
    <button (click)="add()">Add</button>
  </div>
  <div  *ngFor="let field of field.fieldGroup; let i = index" >
    <formly-field [field]="field"></formly-field>
    <button (click)="remove(i)">Close</button>
  </div>
  `
})
export class FormlyRepeatSectionComponent extends FieldArrayType {


}
