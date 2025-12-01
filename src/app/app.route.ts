import {Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';


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
      path: 'vendorList',
      component: VendorListComponent,
      title: 'Default Page',
    },
    {
      path: 'submitEmployee',
      component: EmployeeFormComponent,
      title: 'Default Page',
    },
];