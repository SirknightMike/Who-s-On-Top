// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from 'src/app/register-page/register-page.component';
import { LoginPageComponent } from './login-page.component';
import { LayoutComponent } from 'src/app/layout/layout.component';


const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'home', component: LayoutComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LoginRouteModule {
  
}
