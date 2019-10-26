import { TestBed } from '@angular/core/testing';

import { CreateEmployeeGaurdService } from './create-employee-gaurd.service';

describe('CreateEmployeeGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateEmployeeGaurdService = TestBed.get(CreateEmployeeGaurdService);
    expect(service).toBeTruthy();
  });
});
