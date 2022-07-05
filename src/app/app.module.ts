import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from  './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementListComponent } from './evenementList/evenementList.component';
import {HttpClientModule} from "@angular/common/http";
import { CreatEvenementComponent } from './creat-evenement/creat-evenement.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EvenementComponent } from './evenement/evenement.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenementListComponent,
    CreatEvenementComponent,
    EvenementComponent
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
