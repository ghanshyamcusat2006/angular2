import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: `app/home/home.component.html`
})
export class HomeComponent  { 
    constructor(private _router:Router){}

    goToEmployee() : void{

        this._router.navigate(['/employee']);
    }
	
}
