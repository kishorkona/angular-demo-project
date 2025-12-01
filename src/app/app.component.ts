import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TopBarComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  ngOnInit(): void {
    console.log(`AppComponent is initialized..`);       
  }

  ngOnDestroy(): void {
    console.log(`AppComponent is destroyed..`);       
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
