import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements  CanActivate {
  constructor(private auth: AuthService,
              private router: Router
  ) { }
  canActivate(route, state: RouterStateSnapshot) {
    // To understand why we added map instead of subscribing directly see Mosh's 292 Lecture
   return this.auth.user$.map(user => {
      if (user) { return true; }
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    });
  }
}
