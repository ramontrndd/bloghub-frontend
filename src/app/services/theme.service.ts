import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeSignal = signal<string>('');

  constructor() {
    this.detectTheme();
  }
  setTheme(theme: 'light' | 'dark' | 'system') {
    this.themeSignal.set(theme);
    if (theme === 'system') {
      this.detectTheme();
    } else {
      this.applyTheme(theme);
    }
  }
  updateTheme() {
    const currentTheme = this.themeSignal();
    if (currentTheme === 'light') {
      this.setTheme('dark');
    } else if (currentTheme === 'dark') {
      this.setTheme('light');
    } else {
      this.setTheme('light');
    }
  }
  private detectTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

    prefersDarkScheme.addEventListener('change', event => {
      this.setTheme(event.matches ? 'dark' : 'light');
    });
  }

  private applyTheme(theme: 'dark' | 'light') {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }
}
