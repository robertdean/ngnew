import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { defaultRoutes} from 'projects/shared/src/public-api';

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
  exports: [RouterModule],
})
export class AppRoutingModule {}
