import { CreateEmployeeGaurdService } from './Services/create-employee-gaurd.service';
import { EmployeeService } from './Services/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './Component/list-employees.component';
import { CreateEmployeeComponent } from './Component/create-employee.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SelectRequiredValidatorDirective} from './Shared/select-required-validator.directive';
import { DisplayEmployeeComponent } from './Component/display-employee.component';
import { DialogEmployeeDetailsComponent } from './Component/dialog-employee-details/dialog-employee-details.component';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from './Component/page-not-found.component';
import { DeleteDialogComponent } from './Component/delete-dialog/delete-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    DisplayEmployeeComponent,
    DialogEmployeeDetailsComponent,
    PageNotFoundComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    //  ToastrModule added
    ToastrModule.forRoot({
    timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true, }),
  ],
  providers: [EmployeeService, CreateEmployeeGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
