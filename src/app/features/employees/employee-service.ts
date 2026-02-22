import { computed, Injectable, signal } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
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

  presentCount = computed(() => this.employeeList().filter((e) => e.status === 'PRESENT').length);
  sickCount = computed(() => this.employeeList().filter((e) => e.status === 'SICK').length);
  vacationCount = computed(() => this.employeeList().filter((e) => e.status === 'VACATION').length);

  addEmployee(newEmployeeData: Omit<Employee, 'id'>) {
    const newId = Math.floor(Math.random() * 10000);

    const employeeToSave: Employee = {
      ...newEmployeeData,
      id: newId,
    };
    this.employeeList.update((currentList) => [...currentList, employeeToSave]);
  }
}
