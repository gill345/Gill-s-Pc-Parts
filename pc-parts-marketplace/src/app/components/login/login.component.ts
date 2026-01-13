import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule]
})
export class LoginComponent {

  loginData: LoginRequest = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.loginData).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        console.log('Logged in');
      },
      error: err => {
        console.error('Login failed', err);
      }
    });
  }
}
