import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { IEmployee } from './IEmployee';

@Component({
  selector: 'employees',
  templateUrl: `app/employees/employees.component.html`,
  providers: [EmployeesService]
})
export class EmployeesComponent  implements OnInit { 
    employees: IEmployee[] = null;
    constructor(private empService: EmployeesService){
    //this.employees = this.empService.getEmployees();
	}
	
	   ngOnInit(){
	   this.empService.getEmployees().subscribe((empData) => this.employees = empData);
   }
}
