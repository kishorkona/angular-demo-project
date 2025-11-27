import { Component, OnInit } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { Employee } from '../models/employee-model';
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
  dataMap: Employee[] = [];
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
          this.dataMap = apiResponse.data;
          //console.log(`apiResponse: ${apiResponse}`);
          //console.log(`this.dataMap: ${this.dataMap}`);
          //console.log(`entries: ${this.dataMap.entries}`);
          console.log("this.dataMap stringify: " + JSON.stringify(this.dataMap));
          //console.log(`dataMap: ${apiResponse.data.toString()}`);
          //console.log("String data printing="+JSON.stringify(apiResponse.data));
          //console.log(`resp: ${apiResponse.data.get('abc')}`)
          console.log(`values: ${this.dataMap.values}`)
          console.log(`keys: ${this.dataMap.keys}`)
          //console.log(`has resp: ${this.dataMap.has('abc')}`)
          // const x = apiResponse.data.forEach(emp => {
          //   if(emp === undefined) {
          //     console.log(`key is undefined`)
          //   } else {
          //     console.log(`key is not undefined`)
          //   }
          // });
          // console.log(`x: = ${x}`);
         //this.dataMap = apiResponse.data;
          //console.log("Final Map 1="+JSON.stringify(this.dataMap));
          //console.log("Final Map 2="+this.dataMap.v);          
          //this.dataMap.forEach(element => {
           //console.log(`element: ${element}`);
          //});
          apiResponse.data.forEach(employee => {
            const emp = employee;
            // console.log(`employee: ${employee}, !! ${emp}.employeeId`);            
          });
          const newList: Employee[] = apiResponse.data.map(item => ({
            employeeId: item.employeeId,
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
          }));
          console.log("newList: " + JSON.stringify(newList)); 
          this.employees = newList;

          const allValues: object[] = Array.from(apiResponse.data.values());
            //console.log("vijay:"+allValues);
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
