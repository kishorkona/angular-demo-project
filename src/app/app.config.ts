import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routeConfig } from './app.route';
import { provideClientHydration } from '@angular/platform-browser';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([ AllCommunityModule ]);

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routeConfig), 
      //provideClientHydration(),
      provideHttpClient()
  ],  
};