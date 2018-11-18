import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[my-color]'
})


export class MyColorDirective  { 
    constructor(ref: ElementRef){
	    ref.nativeElement.style.color = 'green';
	}
	
}
