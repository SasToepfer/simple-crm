import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  AuthService } from '../services/auth.service';
import { combineLatest, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  // canActivate() {
  //   return this.authService.user$.pipe(
  //     map((user) => {
  //       if (user) {
  //         return true;
  //       } else {
  //         this.router.navigate(['/login']);
  //         return false;
  //       }
  //     })
  //   );
  // }

  canActivate() {
    return combineLatest([
      this.authService.authInitialized,  // Observable<boolean>
      this.authService.user$
    ]).pipe(
      filter(([initialized, _]) => initialized), // erst weitermachen, wenn initialisiert
      map(([_, user]) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}