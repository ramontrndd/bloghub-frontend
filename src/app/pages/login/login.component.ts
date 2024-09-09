import { SnackbarService } from './../../services/snackbar.service';
import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CookieService } from 'ngx-cookie-service';

import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from '../../services/user.service';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { GlobalConstants } from '../../../shared/global-constants';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    RouterLink,
    MatTooltipModule,
    HeaderComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  responseMessage: any;

  private ngxUiLoader: NgxUiLoaderService = inject(NgxUiLoaderService);
  private router: Router = inject(Router);
  private userService: UserService = inject(UserService);
  private snackBarService: SnackbarService = inject(SnackbarService);
  private userApp: UserService = inject(UserService);
  private cookieService: CookieService = inject(CookieService);
  private formBuilder: FormBuilder = inject(FormBuilder);

  @HostListener('document:keydown.enter', ['handleSubmit()'])
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        null,
        [Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
    });
  }
  handleSubmit() {
    this.ngxUiLoader.start();
    const formData = this.loginForm.value;
    const data = {
      email: formData.email,
      password: formData.password,
    };
    this.userApp.login(data).subscribe(
      (response: any) => {
        this.ngxUiLoader.stop();
        this.cookieService.set('token', response.token);
        this.router.navigate(['/bloghub']);
        this.snackBarService.openSnackBar(response.message, 'success');
      },
      error => {
        this.ngxUiLoader.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackBarService.openSnackBar(this.responseMessage, 'error');
      }
    );
  }
}
