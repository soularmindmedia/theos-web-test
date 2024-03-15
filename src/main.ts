import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppContainer } from './app/container/app.component';

bootstrapApplication(AppContainer, appConfig)
  .catch((err) => console.error(err));
