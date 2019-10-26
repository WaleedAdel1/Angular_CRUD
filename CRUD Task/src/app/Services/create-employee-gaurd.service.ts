import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from '../Component/create-employee.component';

@Injectable()
export class CreateEmployeeGaurdService implements CanDeactivate<CreateEmployeeComponent> {

  canDeactivate( Component: CreateEmployeeComponent): boolean {
    if (Component.createEmployeeForm.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }
}
