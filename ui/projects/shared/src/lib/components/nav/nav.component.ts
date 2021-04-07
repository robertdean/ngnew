import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Route } from '@angular/router';


const getRoutesForSidebar = (route: Route) => (route['data'] && route['data']['onSideBar']) ?? false;

@Component({
  selector: 'lib-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  routesForSidebar:Route[] = [];
  private _routes: Route[] = [];

  @Input()
  public get routes(): Route[] {
    return this._routes;
  }
  public set routes(value: Route[]) {
    this.routesForSidebar = value.filter(getRoutesForSidebar);
    this._routes = value;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
