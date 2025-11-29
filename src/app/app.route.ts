import {Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';


export const routeConfig: Routes = [
    {
        path: 'list',
        component: ProductListComponent,
        title: 'Home page',
    },
    {
        path: 'alerts',
        component: ProductAlertsComponent,
        title: 'Details Page',
    },
    {
      path: '',
      component: ProductAlertsComponent,
      title: 'Default Page',
  },
];