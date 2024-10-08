import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  templateUrl: './theme-menu.component.html',
  styleUrl: './theme-menu.component.scss',
})
export class ThemeMenuComponent {
  themeService: ThemeService = inject(ThemeService);

  setTheme(theme: 'light' | 'dark' | 'system') {
    this.themeService.setTheme(theme);
  }
  get currentTheme() {
    return this.themeService.themeSignal();
  }
}
