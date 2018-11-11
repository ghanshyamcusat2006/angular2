import { Component } from '@angular/core';
import { EmployeesService } from './employees.service'

@Component({
  selector: 'employees',
  templateUrl: `app/employees/employees.component.html`,
  providers: [EmployeesService]
})
export class EmployeesComponent  { 
    employees: any[] = null;
    constructor(private empService: EmployeesService){
	    this.employees = this.empService.getEmployees();
	}
}
