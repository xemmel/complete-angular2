import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './Components/Pages/HomeComponent';
import { AddComponent } from './Components/Pages/AddComponent';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/home', terminal: true },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
