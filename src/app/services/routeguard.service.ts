import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { GlobalConstants } from '../../shared/global-constants';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RouteguardService {
  private snackbarService: SnackbarService = inject(SnackbarService);
  private cookie: CookieService = inject(CookieService);
  public router: Router = inject(Router);
  private auth: AuthService = inject(AuthService); // Add this line

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let expectedRoleArray = route.data;
    expectedRoleArray = expectedRoleArray['expectedRole'];

    const token: any = this.cookie.get('token');
    var tokenPayload: any;

    try {
      tokenPayload = jwtDecode(token);
    } catch {
      this.cookie.delete(token);
      this.router.navigate(['/']);
    }
    let checkRole = false;

    for (let i = 0; i < expectedRoleArray['length']; i++) {
      if (expectedRoleArray[i] == tokenPayload.role) {
        checkRole = true;
      }
    }
    if (tokenPayload.role == 'user' || tokenPayload.role == 'admin') {
      if (this.auth.isAuthenticated() && checkRole) {
        return true;
      }

      this.snackbarService.openSnackBar(
        GlobalConstants.unauthroized,
        GlobalConstants.error
      );

      this.router.navigate(['/bloghub/dashboard']);
      return false;
    } else {
      this.router.navigate(['/']);
      this.cookie.delete('token');
      return false;
    }
  }
}
