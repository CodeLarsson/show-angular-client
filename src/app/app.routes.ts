import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./blog/blog-list/blog-list.component').then(
        (m) => m.BlogListComponent,
      ),
  },
  {
    path: 'cats/list',
    loadComponent: () =>
      import('./cat/cat-list/cat-list.component').then(
        (m) => m.CatListComponent,
      ),
  },
  {
    path: 'cats/register',
    loadComponent: () =>
      import('./cat/cat-form/cat-form.component').then(
        (m) => m.CatFormComponent,
      ),
  },
  {
    path: 'cats/details/:id',
    loadComponent: () =>
      import('./cat/cat-details/cat-details.component').then(
        (m) => m.CatDetailsComponent,
      ),
  },
];
