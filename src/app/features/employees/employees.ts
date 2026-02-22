import { Component, inject, signal } from '@angular/core';
import { Employee } from './employee.model';
import { StatusBadge } from '../../shared/status-badge/status-badge';
import { EmployeeService } from './employee-service';

@Component({
  selector: 'app-employees',
  imports: [StatusBadge],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {
  employeeService = inject(EmployeeService);
}
