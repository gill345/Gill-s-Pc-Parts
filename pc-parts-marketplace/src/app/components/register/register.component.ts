import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterRequest } from '../../models/register-request.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule]
})
export class RegisterComponent {

  registerData: RegisterRequest = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.register(this.registerData).subscribe({
      next: () => console.log('Account created'),
      error: err => console.error('Register failed', err)
    });
  }
}