// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from 'src/app/pages/register-page/register-page.component';
import { LoginPageComponent } from './login-page.component';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { ProfilePageComponent } from '../profile-page/profile-page.component';
import { LeaderboardPageComponent } from '../leaderboard-page/leaderboard-page.component';
import { AuthGuard } from 'src/auth/auth-service/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: WelcomePageComponent },
      { path: 'leaderboard', component: LeaderboardPageComponent },
      { path: 'profile', component: ProfilePageComponent },
    ],
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LoginRouteModule {}
