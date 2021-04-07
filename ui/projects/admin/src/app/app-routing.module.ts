import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import * as sharedComponents from 'projects/shared/src/public-api';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home', onSideBar: true },
  },

  {
    path: '403',
    component: sharedComponents.AccessDeniedComponent,
    data: { title: '403 Access Denied' },
  },
  {
    path: '404',
    component: sharedComponents.PageNotFoundComponent,
    data: { title: '404 Page Not Found' },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: sharedComponents.PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
