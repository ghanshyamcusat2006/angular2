import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeesComponent }  from './employees/employees.component';
import { EmployeesSalaryPipe }  from './employees/employeesSalary.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EmployeesComponent, EmployeesSalaryPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
