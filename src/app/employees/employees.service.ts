import { Injectable } from '@angular/core';
import { IEmployee } from './IEmployee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService{ 
    constructor(private http: Http){
	
	}
	getEmployees() : Observable<IEmployee[]>{
		return this.http.get('./app/employees/employees.json')
        .map((resp: Response) => resp.json());		
	}
	
 }
