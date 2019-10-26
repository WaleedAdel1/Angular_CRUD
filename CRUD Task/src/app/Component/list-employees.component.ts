import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../Services/employee.service';
import { Employee } from './../Shared/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];

  filterdEmployees: Employee[];

  private searchEmp: string;

  get searchTerm(): string {
    return this.searchEmp;
  }

  set searchTerm(value: string) {
    this.searchEmp = value;
    this.filterdEmployees = this.functionFilterEmployee(value);
  }

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute
              ) {
    this.employees = this.route.snapshot.data.employeesList;
    if (this.route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this.route.snapshot.queryParamMap.get('searchTerm');
    } else {
      this.filterdEmployees = this.employees;
    }
  }

  functionFilterEmployee(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1);
  }

  onDeleteNotification(id: number) {
    const i = this.filterdEmployees.findIndex(e => e.id === id);
    if (i !== -1) {
      this.filterdEmployees.splice(i, 1);
    }
  }
  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.filterdEmployees = this.employees;
  }

}
