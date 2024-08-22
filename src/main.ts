import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#00ff0d',
  bgsOpacity: 0.5,
  bgsPosition: 'top-center',
  bgsSize: 140,
  bgsType: 'three-strings',
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: '#0013ff',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'three-bounce',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'red',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: 'Carregando',
  textColor: '#ff0000',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300,
};

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)),
    provideAnimations(),
  ],
});
