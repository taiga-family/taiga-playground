import type {ApplicationConfig} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(),
        provideAnimations(),
        NG_EVENT_PLUGINS,
        {
            provide: 'Pythons',
            useValue: [
                'John Cleese',
                'Eric Idle',
                'Michael Palin',
                'Graham Chapman',
                'Terry Gilliam',
                'Terry Jones',
            ],
        },
    ],
};
