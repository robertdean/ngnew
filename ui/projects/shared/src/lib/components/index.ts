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
