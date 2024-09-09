import { Component, computed, Input, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuItem } from '../../../shared/Model/MenuItem';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterLink,
    MatIconModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  sideNavCollpsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sideNavCollpsed.set(val);
  }

  profilePicSize = computed(() => (this.sideNavCollpsed() ? '32' : '100'));

  menuItems = signal<MenuItem>([
    {
      icon: 'dashboard',
      state: 'Dashboard',
      route: 'dashboard',
      role: '',
    },
    {
      icon: 'category',
      state: 'Category',
      route: 'category',
      role: '',
    },
    {
      icon: 'app_registration',
      state: 'articles',
      route: 'posts',
      role: '',
    },
    {
      icon: 'people',
      state: 'Users',
      route: 'users',
      role: '',
    },
  ]);
}
