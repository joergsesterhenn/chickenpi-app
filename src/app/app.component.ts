import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
 import { AngularFireAuth } from 'angularfire2/auth';
 import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth]
})
export class AppComponent {
  title = 'Chickenpi App';
  description = 'Frontend to chickenpi coop management.';
  isCollapsed = true;

  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
