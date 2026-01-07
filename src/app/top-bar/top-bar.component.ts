import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-top-bar',
  imports: [
    RouterModule
],
  standalone: true,
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  ngOnInit() {
    console.log(`TopBarComponent is initialized..`);
  }

  ngOnDestroy() {
    console.log(`TopBarComponent is destroyed..`);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
