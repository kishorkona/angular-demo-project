import { Component, OnInit } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
//import { Vendor } from '../models/vendors';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { ApiResponse } from '../models/api-response';

@Component({
  selector: 'app-vendor-list',
  standalone: true, 
  imports: [BrowserModule],
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css'
})
export class VendorListComponent implements OnInit{
  //x = 'kona';
  //dataMap: Map<string, any> | undefined=new Map();
  employees: any[] = [];
  loading: boolean = true;
  title = 'My vendor List';

  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
      this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.loading = true;

    this.employeeService.getEmployees()
    .subscribe({
      next: (apiResponse: ApiResponse) => {
          // 2. Use forEach on the received 'employees' array
          console.log(`apiResponse: ${apiResponse}`);
          //console.log(`dataMap: ${apiResponse.data.toString()}`);
          console.log("String data printing="+JSON.stringify(apiResponse.data));
          //const x = apiResponse.data.get('resp');
         //this.dataMap = apiResponse.data;
          //console.log("Final Map 1="+JSON.stringify(this.dataMap));
          //console.log("Final Map 2="+this.dataMap.v);
          
          //this.dataMap.forEach(element => {
           //console.log(`element: ${element}`);
          //});
          //apiResponse.data.forEach(any => {
          //  console.log(`Key: ${any}`);
          //});
          const allValues: object[] = Array.from(apiResponse.data.values());
          console.log("vijay:"+allValues);
          //console.log(`kishor: ${apiResponse.data.entries}`);
          //apiResponse.data.forEach((key, value) => {
          //  console.log(`Key: ${key}, Value: ${value}`);
          //});
        },
        error: (err) => {
          console.error('Error fetching employees:', err);
          this.loading = false;
        }
    })
    
  }
}
