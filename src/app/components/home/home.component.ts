import { Component, inject } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngxUiLoader: NgxUiLoaderService = inject(NgxUiLoaderService);

  showLoader() {
    this.ngxUiLoader.start();

    setInterval(() => {
      this.ngxUiLoader.stop();
    }, 5000);
  }
}
