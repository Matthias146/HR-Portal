import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  presentEmployees = signal(42);
  sickEmployees = signal(3);
  onVacation = signal(5);
}
