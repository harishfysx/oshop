import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor( private auth: AuthService,
               private router: Router) {
    auth.user$.subscribe((user) => {
      this.router.navigateByUrl(localStorage.getItem('returnUrl'));
    });
  }
}
