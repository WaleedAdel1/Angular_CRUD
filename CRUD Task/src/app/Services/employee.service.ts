import { Injectable } from '@angular/core';
import { Employee } from '../Shared/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private listEmployees: Employee[] = [

    {
      id: 1,
      name: 'Mary',
      gender: 'Female',
      phoneNumber: '01221515042',
      contactPerference: 'phone',
      department: '2',
      dateOfBirth: new Date ('1/1/1990'),
      isActive: false,
      photoPath: '../../assets/images/woman2.jpg',
      email: 'marian@gmail.com',
    },
    {
      id: 2,
      name: 'Waleed',
      gender: 'Male',
      phoneNumber: '01273133019',
      contactPerference: 'phone',
      department: '4',
      dateOfBirth: new Date ('1/1/1990'),
      isActive: false,
      photoPath: '../../assets/images/man2.jpg',
      email: 'example@ovi.com',
    },
    {
      id: 3,
      name: 'Adel',
      gender: 'Male',
      phoneNumber: '01000540158',
      contactPerference: 'phone',
      department: '1',
      dateOfBirth: new Date ('10/1/2005'),
      isActive: false,
      photoPath: '../../assets/images/man2.jpg',
      email: 'wl@gmail.com',
    }
  ];

  getEmployees(): Employee[] {
   return this.listEmployees;
  }

  getEmployeeById(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
   }

  save(employee: Employee) {
    if (employee.id === null) {
      const maxId = this.listEmployees.reduce((e1, e2) => {
        return (e1.id > e2.id) ? e1 : e2;
      }).id;
      employee.id = maxId + 1;
      this.listEmployees.push(employee);
    } else {
      const foundIndex = this.listEmployees.findIndex( e => e.id === employee.id);
      this.listEmployees[foundIndex] = employee;
    }
  }

  deleteEmployee(id: number) {
    const i = this.listEmployees.findIndex(e => e.id === id);
    if (i !== -1) {
      this.listEmployees.splice(i, 1);
    }
  }
  constructor() { }
}
