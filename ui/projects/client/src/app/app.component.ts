import { Component } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  routesForSidenav = routes
}
