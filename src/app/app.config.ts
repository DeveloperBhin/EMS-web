import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

// ✅ SIMPLE FACTORY LOADER (NO CLASS, NO DI ISSUES)
export function httpLoaderFactory(http: HttpClient) {
  const base = document.querySelector('base')?.getAttribute('href') || '/';

  return {
    getTranslation: (lang: string) =>
      http.get(`${base}assets/i18n/${lang}.json`)
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),

    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
};