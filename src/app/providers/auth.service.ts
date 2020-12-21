import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  async loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }

  async logout() {
    await this.afAuth.auth.signOut();
  }
}
