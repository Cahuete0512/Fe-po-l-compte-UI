import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from  './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementComponent } from './evenement/evenement.component';
import {HttpClientModule} from "@angular/common/http";
import {GetEvenementService} from "./Service/GetEvenement.service";
import { CreatEvenementComponent } from './creat-evenement/creat-evenement.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ModifEvenementComponent } from './modif-evenement/modif-evenement.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenementComponent,
    CreatEvenementComponent,
    ModifEvenementComponent
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
