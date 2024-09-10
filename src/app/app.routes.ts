import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RouteguardService } from './services/routeguard.service';

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
      import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
    canActivate: [RouteguardService],
    data: { expectedRole: ['user', 'admin'] },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
