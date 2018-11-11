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
clr:string = "blue";
bgclr:string = "yellow";
showDetails:boolean = false;
btnTxt:string = "Show Details"

empName(): string{
     return this.firstName + ' ' + this.lastName;
   }
   
   displayDetails(): void{
       this.showDetails = !this.showDetails;
	   this.btnTxt = this.showDetails == true?"Hide Details":"Show Details";
   }
 }
