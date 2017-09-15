import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firbase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor( private afAuth: AngularFireAuth,
               private route: ActivatedRoute,
               private router: Router) {
    this.user$ = afAuth.authState;
  }
  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firbase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
