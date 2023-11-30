import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent{
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.showCustomSnackbar('Custom Snackbar Message');
  }

  private showCustomSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['custom-snackbar'], // Add the custom class for the snackbar
    });
  }
}
