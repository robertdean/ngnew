import { Component } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'admin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admin';

  routesForSidenav = routes
}
