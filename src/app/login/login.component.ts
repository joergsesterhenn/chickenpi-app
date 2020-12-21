import { Component, OnInit } from "@angular/core";
import { AuthService } from "../providers/auth.service";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AuthService, AngularFireAuth],
})
export class LoginComponent implements OnInit {
  public loggedIn: boolean;
  public user_displayName: string;
  constructor(public authService: AuthService, private router: Router) {
    this.authService.afAuth.auth.onAuthStateChanged((auth) => {
      if (auth == null) {
        this.loggedIn = false;
        this.user_displayName = "";
      } else {
        this.loggedIn = true;
        this.user_displayName = auth.displayName;
      }
    });
  }
  login() {
    this.authService.loginWithGoogle();
    this.router.navigate([""]);
  }
  logout() {
    this.authService.logout();
  }

  ngOnInit() {}
}
