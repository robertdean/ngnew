import { Component } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'ui-tests-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-tests';
  routesForSidenav = routes

}
