import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products/product',
        loadComponent: () => import('./products/pages/product-page/product-page.component').then(c => c.ProductPageComponent)
    },
    {
        path: 'signals',
        loadComponent: () => import('./signals/layout/signals-layout.component').then(c => c.SignalsLayoutComponent),
        children: [
          {
            path: 'counter',
            loadComponent: () => import('./signals/pages/counter-page/counter-page.component').then(c => c.CounterPageComponent)
          },
          {
            path: 'user-info',
            loadComponent: () => import('./signals/pages/user-info-page/user-info-page.component').then(c => c.UserInfoPageComponent)
          },
          {
            path: 'properties',
            loadComponent: () => import('./signals/pages/properties-page/properties-page.component').then(c => c.PropertiesPageComponent)
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