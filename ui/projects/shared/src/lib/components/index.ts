import { Route } from '@angular/router';
import { SharedComponent } from '../shared.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// start:ng42.barrel
export * from './access-denied/access-denied.component';
export * from './nav/nav.component';
export * from './page-not-found/page-not-found.component';
// end:ng42.barrels

export const components = [
  SharedComponent,
  PageNotFoundComponent,
  AccessDeniedComponent,
  NavComponent
];

export const defaultRoutes: Route[] = [
  {
    path: '403',
    component: AccessDeniedComponent,
    data: { title: '403 Access Denied' },
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    data: { title: '404 Page Not Found' },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  ]

