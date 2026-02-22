import { Component, signal } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {
  employeeList = signal<Employee[]>([
    {
      id: 1001,
      firstName: 'Max',
      lastName: 'Mustermann',
      department: 'IT',
      role: 'MANAGER',
      status: 'PRESENT',
    },
    {
      id: 1002,
      firstName: 'Peter',
      lastName: 'Lustig',
      department: 'Personal',
      role: 'ADMIN',
      status: 'PRESENT',
    },
    {
      id: 1003,
      firstName: 'Sebastian',
      lastName: 'Seeberger',
      department: 'Lager',
      role: 'USER',
      status: 'PRESENT',
    },
  ]);
}
