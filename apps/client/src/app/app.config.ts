import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { API_URL } from '@youtube-app/client/core/http-client';
import { environment } from '@env/environment';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideRouter(appRoutes), provideHttpClient(withFetch()), { provide: API_URL, useValue: environment.API_URL }],
};
