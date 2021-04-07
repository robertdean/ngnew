import { NgModule } from '@angular/core';
import { materialModules } from './material.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { components } from './components';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserAnimationsModule,
    ...materialModules
  ],
  exports: [
    ...materialModules,
    ...components
  ]
})
export class SharedModule { }
