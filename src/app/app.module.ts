import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import { EmployeeComponent }  from './employee/employee.component';
import { PnfComponent }  from './misc/pnf.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
	{path: 'employee', component: EmployeeComponent},
	{path: 'employee/:id', component: EmployeeComponent},
	{path: '', redirectTo: '/home',pathMatch: 'full'},
	{path: '**', component: PnfComponent}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HomeComponent, EmployeeComponent, PnfComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
