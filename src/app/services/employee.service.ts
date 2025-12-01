import { Injectable, input } from '@angular/core';
import { Employee } from '../models/employee-model';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private mainUrl = "http://localhost:3030/spring-test-proj/api/failover/"
  private apiUrl = this.mainUrl+'getAllEmployees';
  private addEmployeeUrl = this.mainUrl+'addEmployee';
  
  constructor(private http: HttpClient) { }

  /*
  getEmployees(): Observable<ApiResponse> {
    const httpOptions = new HttpHeaders({
      // 2. Define headers as key-value pairs
      'Content-Type': 'application/json',
      'X-Custom-Header': 'my-custom-value',
      'Authorization': 'Bearer YOUR_AUTH_TOKEN_HERE' // Example for authentication
    });

    return (this.http.get<ApiResponse>(this.apiUrl, {headers: httpOptions}))
    //return of(this.employees);
  }
  */
  getEmployees(): Observable<ApiResponse> {
      const httpOptions = new HttpHeaders({
        // 2. Define headers as key-value pairs
        'Content-Type': 'application/json',
        'X-Custom-Header': 'my-custom-value',
        'Authorization': 'Bearer YOUR_AUTH_TOKEN_HERE' // Example for authentication
      });

      return (this.http.get<ApiResponse>(this.apiUrl, {headers: httpOptions}))
      //return of(this.employees);
    }

  addEmployee(newEmployee: Employee): string {
    const httpOptions = new HttpHeaders({
      // 2. Define headers as key-value pairs
      'Content-Type': 'application/json',
      'X-Custom-Header': 'my-custom-value',
      'Authorization': 'Bearer YOUR_AUTH_TOKEN_HERE' // Example for authentication
    });
    console.log(`form before submitting: ${JSON.stringify(newEmployee)}`);
    /*
    (this.http.post<ApiResponse>(this.addEmployeeUrl, newEmployee, {headers: httpOptions})).subscribe(
        response => {
          console.log('POST request successful:', response);
          return response.status;
        },
        error => {
          console.error('POST request failed:', error);
          return 'Employee cannot be added';
        }
      );
      */
    var respStatus = '';
    (this.http.post<ApiResponse>(this.addEmployeeUrl, newEmployee, {headers: httpOptions})) // The Observable returned by http.post()
    .subscribe({
        // 1. Success Callback
        next: (response) => {
            // This runs when the server returns a successful response (2xx status code).
            // 'response' contains the data returned by the server (e.g., the newly created object, often with an ID).
            console.log('Post created successfully:', response);
            respStatus = response.status;
        },
        // 2. Error Callback
        error: (err) => {
            // This runs if the request fails (e.g., 4xx or 5xx status codes, or a network error).
            console.error('Error during post request:', err);
            respStatus = 'Employee cannot be added';
        },
        // 3. Completion Callback (Optional)
        complete: () => {
            // This runs after the 'next' or 'error' functions have finished, signaling the Observable stream is closed.
            console.log('Post request observable finished.');
        }
    });
    return respStatus;
  }
}
