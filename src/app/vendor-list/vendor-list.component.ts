import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { Employee } from '../models/employee-model';
import { EmployeeService } from '../services/employee.service';
import { ApiResponse } from '../models/api-response';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { GridReadyEvent, GridApi, GridOptions } from 'ag-grid-community';
import { last } from 'rxjs';
import moment from 'moment';

@Component({
  selector: 'app-vendor-list',
  standalone: true,
  imports: [
    AgGridAngular    
  ],
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css'
})
export class VendorListComponent implements OnInit{
  
  constructor(private employeeService: EmployeeService) {}

  public gridOptions!: GridOptions;
  private gridApi!: GridApi;    
  public isGridInitialized: boolean = false;

  
  dataMap: Employee[] = [];
  employees: any[] = [];
  loading: boolean = true;
  title = 'Employees';

  rowData: any[] = [];

  defaultColDef: ColDef = {
    flex: 1,
  };

  columnDefs: ColDef[] = [
    { field: 'employeeId', hide: false},
    { field: 'firstName', hide: false},
    { field: 'lastName', hide: false},
    { field: 'email', hide: false, minWidth:40,maxWidth:300},
    { field: 'phoneNumber', hide: false},
    { field: 'hireDate', hide: false, cellDataType: 'date',valueFormatter: params => {
      if (params.value) {
          const date = new Date(params.value); // Assuming params.value is a string or Date object
          //console.log(`params.value: ${params.value}`);
          return moment(params.value).format('YYYY-MM-DD');
      }
      return '';
  }},
    { field: 'age', hide: false},
    { field: 'jobId', hide: false},
    { field: 'salary', hide: false},
    { field: 'commissionPct', hide: false},
    { field: 'managerId', hide: false},
    { field: 'departmentId', hide: false}
  ];

  ngOnInit(): void {
      console.log('ngOnInit called..');
      this.gridOptions = {
        autoSizeStrategy: {
          type: 'fitCellContents', // Sizes columns to fit cell content
        },        
        // ... other grid options
        onGridReady: (params: GridReadyEvent) => {
          this.gridApi = params.api;
          this.gridApi.autoSizeAllColumns();
        }
      };     
  }

  onGridReady(params: GridReadyEvent) {
    console.log('OnGridReady...');
    this.gridApi = params.api;
    //this.gridApi.setColumnsVisible(['make','model','price','electric'], true);    
    // this.gridColumnApi = params;
    //this.isGridInitialized = true; // Set flag to true when grid is ready
    // this.rowData = data;
    console.log('AG Grid is initialized!');
    // You can perform API calls or other setup here
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.loading = true;
    this.employeeService.getEmployees()
    .subscribe({
      next: (apiResponse: ApiResponse) => {
          this.dataMap = apiResponse.listData;          
          const employees: Employee[] = apiResponse.listData.map(item => ({            
            employeeId: item.employeeId,
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
            phoneNumber: item.phoneNumber,
            hireDate: item.hireDate,
            age: item.age,
            jobId: item.jobId,
            salary: item.salary,
            commissionPct: item.commissionPct,
            managerId: item.managerId,
            departmentId: item.departmentId,            
          }));          
          apiResponse.listData.forEach(item => {
            this.addObject(item.employeeId,item.firstName,item.lastName,item.email,
              item.phoneNumber,item.hireDate,item.age,item.jobId,item.salary,
              item.commissionPct,item.managerId,item.departmentId);
          });
          this.rowData = employees;
          console.log("rowData: " + JSON.stringify(this.rowData)); 
          this.isGridInitialized = true;
          },

        error: (err) => {
          console.error('Error fetching employees:', err);
          this.loading = false;
        }
    })    
  }

    addObject(employeeId: number, firstName: string, lastName: string, 
      email: string, phoneNumber: string, hireDate: Date, age: number, 
      jobId: string, salary: number, commissionPct: number,
      managerId: number, departmentId: number) {
    const newObject = { 
      employeeId: employeeId, 
      firstName: firstName, 
      lastName: lastName, 
      email: email, 
      phoneNumber: phoneNumber, 
      hireDate: hireDate, 
      age: age,
      jobId: jobId,
      salary: salary,
      commissionPct: commissionPct,
      managerId: managerId,
      departmentId: departmentId};
    this.rowData.push(newObject);
  }

  printConsoleLog() {
    //console.log(`apiResponse: ${apiResponse}`);
    //console.log(`this.dataMap: ${this.dataMap}`);
    //console.log(`entries: ${this.dataMap.entries}`);
    //console.log(`dataMap: ${apiResponse.data.toString()}`);
          //console.log("String data printing="+JSON.stringify(apiResponse.data));
          //console.log(`resp: ${apiResponse.data.get('abc')}`)
          //console.log(`values: ${this.dataMap.values}`)
          //console.log(`keys: ${this.dataMap.keys}`)
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
          // apiResponse.data.forEach(employee => {
          //   const emp = employee;
          //   // console.log(`employee: ${employee}, !! ${emp}.employeeId`);            
          // });
  }
}
