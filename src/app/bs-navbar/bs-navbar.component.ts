import { Component,  } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent  {

  constructor( public auth: AuthService) {
  }
  logout() {
    this.auth.logout();
  }

}
