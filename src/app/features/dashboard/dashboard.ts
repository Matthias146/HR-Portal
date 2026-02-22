import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employees/employee-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  employeeService = inject(EmployeeService);
}
