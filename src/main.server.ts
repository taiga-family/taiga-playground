import type {ApplicationRef} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

import {config} from './app/app.config.server';
import {Root} from './root';

const bootstrap = async (): Promise<ApplicationRef> => bootstrapApplication(Root, config);

export default bootstrap;
