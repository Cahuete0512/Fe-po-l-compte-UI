import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from  './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementListComponent } from './evenementList/evenementList.component';
import {HttpClientModule} from "@angular/common/http";
import { CreatEvenementComponent } from './creat-evenement/creat-evenement.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EvenementComponent } from './evenement/evenement.component';
import { ConnexionComponent } from './connexion/connexion.component';
@NgModule({
  declarations: [
    AppComponent,
    EvenementListComponent,
    CreatEvenementComponent,
    EvenementComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
