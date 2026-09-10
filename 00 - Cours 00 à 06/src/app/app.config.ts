// Import de la configuration zoneless (sans Zone.js)
// provideZonelessChangeDetection() remplace provideZoneChangeDetection()
// Angular détecte les changements via les signaux et les événements, sans Zone.js
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZonelessChangeDetection(), provideRouter(routes)]
};
