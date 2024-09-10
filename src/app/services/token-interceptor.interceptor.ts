import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class tokenInterceptorInterceptor implements HttpInterceptor {
  private router: Router = inject(Router);
  private cookie: CookieService = inject(CookieService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.cookie.get('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          console.log(err.url);
          if (err.status === 401 || err.status === 403) {
            if (this.router.url === '/login') {
            } else {
              this.cookie.delete('token');
              this.router.navigate(['/']);
            }
          }
        }
        return throwError(err);
      })
    );
  }
}
