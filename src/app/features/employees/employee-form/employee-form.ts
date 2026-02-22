import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Employee } from '../employee.model';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm {
  employeeService = inject(EmployeeService);
  router = inject(Router);

  employeeForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    department: new FormControl(''),
    role: new FormControl('USER', [Validators.required]),
    status: new FormControl('PRESENT', [Validators.required]),
  });

  onSubmit() {
    if (this.employeeForm.valid) {
      const formValues = this.employeeForm.value;

      const employee: Omit<Employee, 'id'> = {
        firstName: formValues.firstName as string,
        lastName: formValues.lastName as string,
        department: formValues.department as string,
        role: formValues.role as 'ADMIN' | 'MANAGER' | 'USER',
        status: formValues.status as 'PRESENT' | 'SICK' | 'VACATION',
      };
      this.employeeService.addEmployee(employee);
      this.router.navigate(['employees']);
    }
  }
}
