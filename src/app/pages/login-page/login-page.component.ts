import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, Routes } from '@angular/router';
import { UserService } from 'src/Services/user/user.service';
import { User } from 'src/app/interfaces/User-interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  user: User = { email: '', password: '' };

  constructor(
    private router: Router,
    private _userService: UserService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('jwtToken');
  }

  onLoginClick(): void {
    this._userService
      .loginUser(this.user)
      .pipe()
      .subscribe({
        next: () => {
          this.openSuccessSnackbar('Login Successfully');
          this.router.navigate(['/']);
        },
        error: () => this.openErrorSnackbar('Failed to Login '),
      });
  }

  openErrorSnackbar(message: string): void {
    this.snackbar.open(message, 'Close', {
      duration: 3000,
      panelClass: 'error-snackbar',
    });
  }

  openSuccessSnackbar(message: string): void {
    this.snackbar.open(message, 'Close', {
      duration: 3000,
      panelClass: 'success-snackbar',
    });
  }
}
