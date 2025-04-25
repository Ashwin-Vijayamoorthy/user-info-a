// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


// import '@angular/localize/init';
// import {importProvidersFrom} from '@angular/core';
// import {bootstrapApplication} from '@angular/platform-browser';
// import {provideHttpClient} from '@angular/common/http';
// import {provideAnimations} from '@angular/platform-browser/animations';
// import {VERSION as CDK_VERSION} from '@angular/cdk';
// import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';
// import {TableFlexBasicExample} from './app/app.component';

// /* eslint-disable no-console */
// console.info('Angular CDK version', CDK_VERSION.full);
// console.info('Angular Material version', MAT_VERSION.full);

// bootstrapApplication(TableFlexBasicExample, {
//   providers: [
//     provideAnimations(),
//     provideHttpClient(),
//     importProvidersFrom(MatNativeDateModule)
//   ]
// }).catch(err => console.error(err));



import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
