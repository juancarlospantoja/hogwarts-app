import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JLayoutComponent } from './containers';
import { ServicesModule } from './app-core/services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



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
    AppRoutingModule,    
    BrowserAnimationsModule,
    HttpClientModule,
    ServicesModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



