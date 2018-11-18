import { Component } from '@angular/core';
import { OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sample',
  templateUrl: `app/sample/sample.component.html`,
})
export class SampleComponent  implements OnInit, OnDestroy, AfterContentInit, AfterViewInit { 
    constructor(){
        console.log('Contructor');
    }
    ngOnInit(){
        console.log('OnInit');
    }
    ngOnDestroy(){
        console.log('OnDestroy');
    }
    ngAfterContentInit(){
        console.log('AfterContentInit');
    }
    ngAfterViewInit(){
        console.log('AfterViewtInit');
    }

 }
