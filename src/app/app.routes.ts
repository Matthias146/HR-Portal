import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { Dashboard } from './features/dashboard/dashboard';
import { Employees } from './features/employees/employees';
import { EmployeeForm } from './features/employees/employee-form/employee-form';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'employees/new', component: EmployeeForm },
      {
        path: 'employees',
        component: Employees,
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
