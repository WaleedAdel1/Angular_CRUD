import { EmployeeService } from './../Services/employee.service';
import { Employee } from './../Shared/employee';
import { Department } from './../Shared/department';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  formTitle: string;
  datePickerConfig: Partial<BsDatepickerConfig>;
  @ViewChild('employeeForm', {static: false}) public createEmployeeForm: NgForm;
employee: Employee;
  constructor(private employeeService: EmployeeService,
              private router: Router,
              private toastr: ToastrService,
              private activatedRoute: ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY'
      });
   }
departments: Department[] = [
  {id: 1, name: 'Manager'},
  {id: 2, name: 'Team Leader'},
  {id: 3, name: 'Senior'},
  {id: 4, name: 'Junior'}
];

togglePhotoPreview() {
  this.previewPhoto = ! this.previewPhoto;
}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(parameteMap => {
      const id = + parameteMap.get('id');
      this.getEmployee(id);
    });
  }


  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        email: '',
        phoneNumber: null,
        contactPerference: null,
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null,
      };
      this.formTitle = 'Create Employee';
    } else {
      this.formTitle = 'Edit Employee';

      this.employee = Object.assign({}, this.employeeService.getEmployeeById(id));
    }
  }
  saveEmployee(): void {
    const newEmployee: Employee = Object.assign({}, this.employee);
    this.toastr.success('Operation done successfully');
    this.employeeService.save(newEmployee);
    this.createEmployeeForm.reset();
    this.router.navigate(['list']);
  }
}
