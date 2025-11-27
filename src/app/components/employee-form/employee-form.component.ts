import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup; 

  constructor(private employeeService: EmployeeService){}
  
  ngOnInit(): void {
    // 2. Initialize the FormGroup and its child FormControl elements
    this.employeeForm = new FormGroup({
      // Define the first text box control (with a required validator)
      'employeeId': new FormControl(null, Validators.required), 
      // Define the second text box control (with a minimum length validator)
      'firstName': new FormControl(null, [Validators.required]),
    });
  }

  // 3. Method to handle the form submission
    onSubmit(): void {
      if (this.employeeForm.valid) {
        console.log('Form Submitted!', this.employeeForm.value);
        var status = this.employeeService.addEmployee(this.employeeForm.value);
        this.employeeForm.reset();
      } else {
        console.log('Form is invalid. Cannot submit.');
      }
    }
}
