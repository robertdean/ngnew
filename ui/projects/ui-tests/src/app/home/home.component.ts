import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as investments from './model';
import { fields } from './model';

@Component({
  selector: 'ui-tests-home',
  styleUrls: [],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Sample Form</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <formly-form
            [model]="model"
            [fields]="fields"
            [options]="options"
            [form]="form"
          ></formly-form>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button type="submit" [disabled]="!form.valid">
            Submit
          </button>
          <button mat-button type="button" >
            Cancel
          </button>

        </mat-card-actions>
      </mat-card>
    </form>
  `,
})
export class HomeComponent implements OnInit {
  model = investments.model;
  options = investments.options;
  fields = investments.fields;

  form = new FormGroup({});
  constructor() {}

  submit() {
    console.log(this.model);
  }
  ngOnInit(): void {}
}
