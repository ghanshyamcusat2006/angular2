import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: `app/employee/employee.component.html`,
  styleUrls: [`app/employee/employee.component.css`]
})
export class EmployeeComponent  { 
firstName:string = 'Ghanshyam';
lastName:string = 'Kumar';
salary:number = '5000';
department:string = 'Training';

empName(): string{
     return this.firstName + ' ' + this.lastName;
   }
 }
