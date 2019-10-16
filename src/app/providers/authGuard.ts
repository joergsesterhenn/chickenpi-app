import { tap, map, take } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { NgZone } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private zone: NgZone) {
    this.zone = zone;
  }

  canActivate(): Observable<boolean> {
    return this.auth.afAuth.authState.pipe(
      take(1),
      map(authState => !!authState),
      tap(loggedIn => {
        if (!loggedIn) {
          this.zone.run(() => console.log('access denied'));
          this.router.navigate(['/login']);
        }
      }));
  }
}

