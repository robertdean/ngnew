import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as investments from './model'

@Component({
  selector: 'ui-tests-home',
  styleUrls: [],
  template:`
  hello world
    <formly-form
      [model]="model"
      [fields]="fields"
      [options]="options"
      [form]="form"></formly-form>
  `
})
export class HomeComponent implements OnInit {
  model = investments.model;
  options = investments.options;
  fields = investments.fields;
  form = new FormGroup({});
  constructor() { }

  onSubmit(){
    console.log(this.model);
  }
  ngOnInit(): void {
  }

}
