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
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types:[
        {name: 'repeat', component: FormlyRepeatSectionComponent}
      ]
    })
  ],
  exports: [
    ...materialModules,
    ...components,
    ...formlyTypes,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
  ]
})
export class SharedModule { }
