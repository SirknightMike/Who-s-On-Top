import { Component } from '@angular/core';
import { RegisterUser } from '../interfaces/register-interfaces';
import { UserService } from 'src/Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  user: RegisterUser = { username: '',email: '', password: '' };

  constructor(private _userService: UserService, public dialog: MatDialog, public snackbar: MatSnackBar) {}

  onRegisterClick(): void {
    this._userService.registerUser(this.user).subscribe({
      next: () => this.openSuccessSnackbar('User has been successfully created'),
      error: () => this.openErrorSnackbar('Failed to register User'),
    })
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
      panelClass: "success-snackbar",
    });
  }

}
