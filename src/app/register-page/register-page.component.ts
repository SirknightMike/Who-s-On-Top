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
  user: RegisterUser = { Username: '',Email: '', Password: '' };

  constructor(private _userService: UserService,public dialog: MatDialog,private snackbar: MatSnackBar) {
    
  }

  registerClick(): void {
    this._userService.registerUser(this.user).subscribe({
      next: () => this.openSuccessSnackbar('User has been successfully created'),
      error: () => this.openErrorSnackbar('Failed to register User'),
    })
  }



  openErrorSnackbar(message: string): void {
    this.snackbar.open(message, 'Close', {
      duration: 100000,
      panelClass: ['mat-error-snackbar'] 
    });
  }

  openSuccessSnackbar(message: string): void {
    this.snackbar.open(message, 'Close', {
      duration: 100000,
      panelClass: "mat-success-snackbar"
    });
  }

}
