import { Component } from '@angular/core';
import { vendor } from '../shared/models/vendors';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-vendor-list',
  standalone: true,
  imports: [BrowserModule],
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css'
})
export class VendorListComponent {
  //x = 'kona';
  vendorList = [
    new vendor(10, "Kishor", 48, "Male"),
    new vendor(11, "Vijay", 47, "Male"),
    new vendor(12, "Anish", 12, "Male"),
    new vendor(13, "Ishant", 9, "Male"),
  ];
  title = 'My vendor List';
}
