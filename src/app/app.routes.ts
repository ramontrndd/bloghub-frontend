import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'bloghub',
    loadChildren: () =>
      import('./admin/admin-routing/admin-routing.module').then(
        m => m.AdminRoutingModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin/admin-routing/admin-routing.module').then(
        m => m.AdminRoutingModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
