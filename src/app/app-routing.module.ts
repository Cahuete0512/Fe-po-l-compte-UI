import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EvenementComponent} from "./evenement/evenement.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'evenement' },
  { path: 'evenement', component: EvenementComponent },
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
