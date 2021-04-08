import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { FieldType } from '@ngx-formly/material';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/internal/operators/startWith';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'formly-autocomplete-type',
  template: `
  test
  <input
    matInput
    [matAutocomplete]="auto"
    [formControl]="formControl"
    [formlyAttributes]="field"
    [errorStateMatcher]="errorStateMatcher">
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let value of filter | async" [value]="value">
        {{value}}
      </mat-option>
    </mat-autocomplete>
  `
})
export class AutoCompleteTypeComponent extends FieldType implements OnInit, AfterViewInit{
  @ViewChild(MatInput) formFieldControl!: MatInput;
  @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;
  formControl!: FormControl;
  filter!: Observable<any>

  ngOnInit(){
    super.ngOnInit();
    this.filter = this.formControl.valueChanges
      .pipe(
        startWith(''),
        switchMap(term=>this.to.filter(term)),
      );
  }

  ngAfterViewInit(){
    super.ngAfterViewInit();
    (<any>this.autocomplete)._formField = this.formFieldControl;
  }
}
