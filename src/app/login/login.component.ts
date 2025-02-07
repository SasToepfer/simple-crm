import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isRegister = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private auth: AuthService, private router: Router) {}

  toggleMode() {
    this.isRegister = !this.isRegister;
  }

  async onSubmit() {
    const email = this.loginForm.value.email ?? '';
    const password = this.loginForm.value.password ?? '';

    try {
      if (this.isRegister) {
        await this.auth.register(email, password);
      } else {
        await this.auth.login(email, password);
      }
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error(error);
    }
  }

  async onGuestLogin() {
    try {
      await this.auth.loginGuest();
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Guest Login Error:', error);
    }
  }
}
