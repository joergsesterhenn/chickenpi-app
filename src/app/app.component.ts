import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { AuthService } from './providers/auth.service';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AuthGuard } from 'app/providers/authGuard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, AuthGuard]
})
export class AppComponent {
  title = 'Chickenpi App';
  description = 'Frontend to chickenpi coop management.';
  isCollapsed = true;
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, private router: Router) {
  this.authService.af.auth.onAuthStateChanged(
    (auth) => {
      if (auth == null) {
        console.log('Logged out');
        this.isLoggedIn = false;
        this.user_displayName = '';
        this.user_email = '';
        this.router.navigate(['login']);
      } else {
        this.isLoggedIn = true;
        this.user_displayName = auth.displayName;
        this.user_email = auth.email;
        console.log('Logged in');
        this.router.navigate(['']);
      }
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
