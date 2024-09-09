import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../components/sidenav/sidenav-menu.component').then(
        m => m.SideNavMenuComponent
      ),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../components/dashboard/dashboard/dashboard.component').then(
            m => m.DashboardComponent
          ),
      },
      {
        path: 'category',
        loadComponent: () =>
          import('../components/dashboard/category/category.component').then(
            m => m.CategoryComponent
          ),
      },
      {
        path: 'posts',
        loadComponent: () =>
          import('../components/dashboard/posts/posts.component').then(
            m => m.PostsComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('../components/dashboard/users/users.component').then(
            m => m.UsersComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingRoutingModule {}
