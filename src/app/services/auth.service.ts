import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private route: Router = inject(Router);
  private cookie: CookieService = inject(CookieService);

  public isAuthenticated(): boolean {
    const token = this.cookie.get('token');
    if (!token) {
      this.route.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
