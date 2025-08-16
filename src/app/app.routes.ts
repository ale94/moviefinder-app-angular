import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'movies',
    loadComponent: () => import('./pages/movie-page/movie-page'),
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/movie-search/movie-search'),
  },

  {
    path: '**',
    redirectTo: 'movies',
  },
];
