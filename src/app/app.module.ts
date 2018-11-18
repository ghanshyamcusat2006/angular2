import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { SampleComponent }  from './sample/sample.component';
import { MyColorDirective }  from './directives/my.color.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, SampleComponent, MyColorDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
