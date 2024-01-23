import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./cat/cat-list/cat-list.component').then(
        (m) => m.CatListComponent,
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./cat/cat-form/cat-form.component').then(
        (m) => m.CatFormComponent,
      ),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./cat/cat-details/cat-details.component').then(
        (m) => m.CatDetailsComponent,
      ),
  },
];
