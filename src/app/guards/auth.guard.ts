import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  AuthService } from '../services/auth.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    return this.auth.user$.pipe(
      map(user => {
        if (user) {
          this.router.navigate(['/dashboard']);
          return false;
        }
        return true;
      })
    );
  }
}