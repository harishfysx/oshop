import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( private auth: AuthService,
               private route: ActivatedRoute) {
  }
  login() {
    this.auth.login();
  }
}
