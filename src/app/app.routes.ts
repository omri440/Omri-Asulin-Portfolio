import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [{ 
    path: '', 
    loadComponent: () => import('../app/components/home/home.component').then(m => m.HomeComponent)
  },
  ];

  bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)],
  }).catch(err => console.error(err));