import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public af: AngularFireAuth) { }

  loginWithGoogle() {
    this.af.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.af.auth.signOut();
  }

}
