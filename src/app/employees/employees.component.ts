import { Component } from '@angular/core';

@Component({
  selector: 'employees',
  templateUrl: `app/employees/employees.component.html`
})
export class EmployeesComponent  { 
    employees: any[] = [
        {id:101, firstName: 'Ghanshyam', lastName: 'Kumar', salary: 5000, dob: '02/23/1988'},
        {id:102, firstName: 'Rajesh', lastName: 'Dubey', salary: 10000, dob: '07/22/1989'},
		{id:103, firstName: 'Suresh', lastName: 'Srivastava', salary: 7000, dob: '04/25/1985'},
		{id:104, firstName: 'Mahesh', lastName: 'Sharma', salary: 4000, dob: '05/26/1990'},
		{id:105, firstName: 'Ganesh', lastName: 'Singh', salary: 8000, dob: '03/24/1991'},
		{id:106, firstName: 'Ramesh', lastName: 'Yadav', salary: 6000, dob: '12/29/1992'}
    ];
 }
