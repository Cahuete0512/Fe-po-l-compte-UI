import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from  './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementListComponent } from './evenementList/evenementList.component';
import {HttpClientModule} from "@angular/common/http";
import { CreatEvenementComponent } from './creat-evenement/creat-evenement.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EvenementListComponent,
    CreatEvenementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
