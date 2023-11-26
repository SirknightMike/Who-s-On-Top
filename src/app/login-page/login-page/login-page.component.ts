import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { RegisterPageComponent } from 'src/app/register-page/register-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private router: Router) { }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
