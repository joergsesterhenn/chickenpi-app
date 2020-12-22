import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public afauth: AngularFireAuth
  ) { }

  async login() {
    await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  ngOnInit() {
  }

}
