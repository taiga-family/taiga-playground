import {bootstrapApplication} from '@angular/platform-browser';

import {appConfig} from './app/app.config';
import {Root} from './root';

bootstrapApplication(Root, appConfig).catch((err: unknown) => console.error(err));
