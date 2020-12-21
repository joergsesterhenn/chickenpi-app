import { Component } from "@angular/core";
import { AuthService } from "./providers/auth.service";
import { Router } from "@angular/router";
import { AuthGuard } from "./providers/authGuard";
import { NgZone } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AuthService, AuthGuard],
})
export class AppComponent {
  title = "Chickenpi App";
  description = "Frontend to chickenpi coop management.";
  isCollapsed = true;

  constructor(
    public authService: AuthService,
    private router: Router,
    private zone: NgZone
  ) {
    this.authService.afAuth.auth.onAuthStateChanged((auth) => {
      if (auth == null) {
        zone.run(() => console.log("Logged out"));
        this.router.navigate(["login"]);
      } else {
        zone.run(() => console.log("Logged in"));
        this.router.navigate([""]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
