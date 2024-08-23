import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
