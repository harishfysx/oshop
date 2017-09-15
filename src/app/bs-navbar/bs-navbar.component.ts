import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent  {
user$: Observable<firebase.User>;

  constructor( private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}