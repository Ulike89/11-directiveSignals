import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products/product',
        loadComponent: () => import('./products/pages/product-page/product-page.component')
    },
    {
        path: 'signals',
        loadComponent: () => import('./signals/layout/signals-layout.component'),
        children: [
          {
            path: 'counter',
            loadComponent: () => import('./signals/pages/counter-page/counter-page.component')
          },
          {
            path: 'user-info',
            loadComponent: () => import('./signals/pages/user-info-page/user-info-page.component')
          },
          {
            path: 'properties',
            loadComponent: () => import('./signals/pages/properties-page/properties-page.component')
          },
          {
            path: '**',
            redirectTo: 'counter'
          },
        ]
    },
    {
        path: '**',
        redirectTo: 'products/product'
    }
];