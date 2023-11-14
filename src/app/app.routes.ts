import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./template/pages/principal-template/principal-template.component').then(m => m.PrincipalTemplateComponent),
    children: [
      { path: '', redirectTo: 'gifs', pathMatch: 'full' },
      { path: 'gifs', loadChildren: () => import('./gifs/gifs.routing').then(m => m.routes) },
      { path: '**', redirectTo: 'gifs'},
    ],
  },
  { path: '**', redirectTo: '' },
];
