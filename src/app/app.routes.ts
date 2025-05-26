import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./pages/auth/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./pages/auth/register.page').then((m) => m.RegisterPage),
  },
  
  // {
  //   path: 'dashboard',
  //   loadComponent: () =>
  //     import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  // },
];

 

