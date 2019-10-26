import { EmployeeService } from './../Services/employee.service';
import { Employee } from './../Shared/employee';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {

@Input() employee: Employee;
@Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
@Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private router: Router,
              private employeeSevice: EmployeeService) { }

  ngOnInit() {
  }


  editEmployee() {
    this.router.navigate(['/edit', this.employee.id]);
  }
  deleteEmployee() {
    this.employeeSevice.deleteEmployee(this.employee.id);
    this.notifyDelete.emit(this.employee.id);
  }
}
