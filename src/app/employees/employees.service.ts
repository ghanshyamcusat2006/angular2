import { Injectable } from '@angular/core';
import { IEmployee } from './IEmployee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class EmployeesService{ 
    constructor(private http: Http){
	
	}
	getEmployees() : Observable<IEmployee[]>{
		//without error
		//return this.http.get('./app/employees/employees.json')
		return this.http.get('./app/employees/employee.json')
        .map((resp: Response) => resp.json())
        .catch(this.errorHandling)		 
	}
	errorHandling(error: Response){
	console.error(error);
	throw Observable.throw(error);
	}
	
 }
