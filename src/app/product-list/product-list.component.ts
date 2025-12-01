import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeFormComponent } from '../components/employee-form/employee-form.component';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';

import { products } from '../products';
import { VendorListComponent } from '../vendor-list/vendor-list.component';

@Component({
  imports: [
    ProductAlertsComponent,
    EmployeeFormComponent,
    VendorListComponent,
    CommonModule
  ],
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  ngOnInit() {
    console.log(`ProductListComponent is initialized..`);
  }

  ngOnDestroy() {
    console.log(`ProductListComponent is destroyed..`);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
      window.alert('You will be notified when the product goes on sale');
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
