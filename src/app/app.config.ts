import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(MatNativeDateModule), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-13051","appId":"1:256937678624:web:5358c5be121811d14ee945","storageBucket":"simple-crm-13051.firebasestorage.app","apiKey":"AIzaSyDAQjXX_AhxNDysW_HwT1UuMedz704PCeo","authDomain":"simple-crm-13051.firebaseapp.com","messagingSenderId":"256937678624"})), provideFirestore(() => getFirestore())],
  
};
