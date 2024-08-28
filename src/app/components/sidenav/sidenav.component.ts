import { Component, computed, Input, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../../shared/Model/MenuItem';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, RouterLink, MatIconModule],
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
      state: 'DashBoard',
      route: 'dashboard',
      role: '',
    },
  ]);
}
