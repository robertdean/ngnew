import {FormlyMatToggleModule} from '@ngx-formly/material/toggle';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { NgModule } from '@angular/core';
import { materialModules } from './material.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { components } from './components';
import { formlyTypes } from './formly-types';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyRepeatSectionComponent } from './formly-types/formly-repeat-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutTypeComponent } from './formly-types/flex-layout-type';
import { AutoCompleteTypeComponent } from './formly-types/autocomplete-type';

@NgModule({
  declarations: [
    ...components,
    ...formlyTypes,
  ],
  imports: [
    ...materialModules,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormlyMaterialModule,
    FormlyMatToggleModule,
    FormlyMatDatepickerModule,
    FormlyModule.forRoot({
      types:[
        { name: 'repeat', component: FormlyRepeatSectionComponent },
        { name: 'autocomplete', component: AutoCompleteTypeComponent },
        { name: 'flex-layout', component: FlexLayoutTypeComponent },
      ]
    })
  ],
  exports: [
    ...materialModules,
    ...components,
    ...formlyTypes,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormlyModule,
    FormlyMaterialModule,
  ]
})
export class SharedModule { }
