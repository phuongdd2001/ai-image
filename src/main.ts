import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app/app.routes';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { CORE_PROVIDERS } from './app/@core/core';

registerLocaleData(en);

bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes, withPreloading(PreloadAllModules)),
        importProvidersFrom(BrowserModule, FormsModule),
        { provide: NZ_I18N, useValue: en_US },
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        CORE_PROVIDERS
    ]
})
  .catch(err => console.error(err));
