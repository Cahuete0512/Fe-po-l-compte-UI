import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EvenementComponent} from "./evenement/evenement.component";
import {CreatEvenementComponent} from "./creat-evenement/creat-evenement.component";

export const EVENT_ROUTE = 'evenement';
export const CREAT_EVENT = 'creatEvenement';
export const MODIF_EVENT = 'evenement/modifEvenement/:id';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'evenement' },
  { path: EVENT_ROUTE, component: EvenementComponent },
  { path: CREAT_EVENT, component: CreatEvenementComponent},
  { path: MODIF_EVENT, component: CreatEvenementComponent}
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
