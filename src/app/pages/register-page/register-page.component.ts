import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterUser } from '../../interfaces/User-interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/Services/user/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  user: RegisterUser = { username: '', email: '', password: '' };

  confirmPassword: string = '';

  constructor(
    private _userService: UserService,
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('jwtToken');
  }

  get passwordsMatch(): boolean {
    return this.confirmPassword === this.user.password;
  }

  onRegisterClick(form?: NgForm): void {
    if (form && form.invalid) {
      form.control.markAllAsTouched();
      this.openErrorSnackbar('Please fix the form errors.');
      return;
    }

    if (!this.passwordsMatch) {
      this.openErrorSnackbar('Password does not match each other.');
    } else {
      this._userService.registerUser(this.user).subscribe({
        next: () =>
          this.openSuccessSnackbar('User has been successfully created'),
        error: () => this.openErrorSnackbar('Failed to register User'),
      });
    }
  }

  openErrorSnackbar(message: string): void {
    this.snackbar.open(message, 'Close', {
      duration: 100000,
      panelClass: 'error-snackbar',
    });
  }

  openSuccessSnackbar(message: string): void {
    this.snackbar.open(message, 'Close', {
      duration: 100000,
      panelClass: 'success-snackbar',
    });
  }
}
