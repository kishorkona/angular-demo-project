import { Injectable, input } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    {employeeId: 10, firstName: 'kishor', lastName: '58', email: 'Male'},
    {employeeId: 11, firstName: 'vijay', lastName: '58', email: 'Male'},
    {employeeId: 12, firstName: 'anish', lastName: '10', email: 'Male'},
    {employeeId: 13, firstName: 'ishant', lastName: '9', email: 'Male'}
  ];
  //private apiUrl = 'http://localhost:3030/spring-test-proj/api/failover/newGetAllEmployees';
  private apiUrl = 'http://localhost:3030/spring-test-proj/api/failover/getAllEmployees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      // 2. Define headers as key-value pairs
      'Content-Type': 'application/json',
      'X-Custom-Header': 'my-custom-value',
      'Authorization': 'Bearer YOUR_AUTH_TOKEN_HERE' // Example for authentication
    });

    return (this.http.get<ApiResponse>(this.apiUrl, {headers: headers}))
    //return of(this.employees);
  }

  private mapEmployeeData(input: any) {
    //apiResponse = new ap
  }
}
