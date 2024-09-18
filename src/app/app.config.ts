import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig } from '@angular/core';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideAnimations(), NG_EVENT_PLUGINS],
};
