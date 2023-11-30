import { Component } from '@angular/core';
import { RegisterUser } from '../interfaces/register-interfaces';
import { UserService } from 'src/Services/user.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  user: RegisterUser = {Username: '',Email: '', Password: ''};

  constructor(private _userService: UserService,public dialog: MatDialog,private snackbar: MatSnackBar) {
    
  }

  register() {
    this._userService.registerUser(this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        this.openSuccessSnackbar('User registered successfully');
      },
      (error) => {
        console.error('Failed to register user', error);
        this.openErrorSnackbar('Failed to register user');
      }
    );
  }

  openErrorSnackbar(message: string): void {
    this.snackbar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['mat-simple-snackbar'], // Add the custom class to the Snackbar
    });
  }

  openSuccessSnackbar(message: string): void {
    this.snackbar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['mat-simple-snackbar'], // Add the custom class to the Snackbar
    });
  }

}
