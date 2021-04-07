import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { JLayoutComponent } from './containers';



const APP_CONTAINERS = [
  JLayoutComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    APP_CONTAINERS,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
