export * from './browser-directives';
export * from './browser-pipes';
export * from './browser-providers';

import { DIRECTIVES } from './browser-directives';
import { PIPES } from './browser-pipes';
import { PROVIDERS } from './browser-providers';
import { HTTP_PROVIDERS } from '@angular/http';


export const PLATFORM_PROVIDERS = [
  ...PROVIDERS,
  ...DIRECTIVES,
  ...PIPES,
  HTTP_PROVIDERS
];
