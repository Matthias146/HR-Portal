import { Component, computed, inject, signal } from '@angular/core';
import { Employee } from './employee.model';
import { StatusBadge } from '../../shared/status-badge/status-badge';
import { EmployeeService } from './employee-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [StatusBadge, RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {
  employeeService = inject(EmployeeService);

  searchTerm = signal('');

  filteredEmployees = computed(() => {
    const term = this.searchTerm().toLowerCase();

    const allEmployees = this.employeeService.employeeList();

    if (!term) {
      return allEmployees;
    }

    return allEmployees.filter((employee) => {
      return (
        employee.firstName.toLowerCase().includes(term) ||
        employee.lastName.toLowerCase().includes(term)
      );
    });
  });
}
