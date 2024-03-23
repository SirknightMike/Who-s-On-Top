// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from 'src/app/pages/register-page/register-page.component';
import { LoginPageComponent } from './login-page.component';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';


const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'welcome', component: LayoutComponent, children: [
      {path: '', component: WelcomePageComponent}
    ]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LoginRouteModule {
  
}
