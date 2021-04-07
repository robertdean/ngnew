import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { defaultRoutes } from 'projects/shared/src/public-api';
import { HomeComponent } from './home/home.component';
export const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home', onSideBar: true },
  },
  ...defaultRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
