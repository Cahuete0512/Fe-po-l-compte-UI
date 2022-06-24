import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from  './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementComponent } from './evenement/evenement.component';
import {HttpClientModule} from "@angular/common/http";
import {GetEvenementService} from "./Service/GetEvenement.service";

@NgModule({
  declarations: [
    AppComponent,
    EvenementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
