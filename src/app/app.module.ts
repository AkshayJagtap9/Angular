import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mycomponant1Component } from './mycomponant1/mycomponant1.component';
import { Mycomponent2Component } from './mycomponent2/mycomponent2.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    Mycomponant1Component,
    Mycomponent2Component,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
