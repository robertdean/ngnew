import { NgModule } from '@angular/core';
import { materialModules } from './material.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { components } from './components';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    ...materialModules
  ],
  exports: [
    ...materialModules,
    ...components
  ]
})
export class SharedModule { }
