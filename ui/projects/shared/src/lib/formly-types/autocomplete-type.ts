import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { FieldType } from '@ngx-formly/material';
import { Observable } from 'rxjs';
import { switchMap,startWith } from 'rxjs/operators';

@Component({
  selector: 'formly-autocomplete-type',
  template: `
  <input
    matInput
    [matAutocomplete]="auto"
    [formControl]="formControl"
    [formlyAttributes]="field"
    [errorStateMatcher]="errorStateMatcher">
    <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn.bind(this)">
      <mat-option *ngFor="let value of filter | async" [value]="value">
        {{displayFn(value)}}
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
    (<any>this.autocomplete)._formField = this.formField;
  }

  valueFn(opt:any){
    if(opt){
      return opt[this.to.valueProp];
    }
    return null;
  }

  displayFn(opt:any){
    if(opt){
      return opt[this.to.displayProp];
    }
    return null;
  }
}
