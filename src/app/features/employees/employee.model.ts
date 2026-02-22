export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  role: 'ADMIN' | 'MANAGER' | 'USER';
  status: 'PRESENT' | 'SICK' | 'VACATION';
}
