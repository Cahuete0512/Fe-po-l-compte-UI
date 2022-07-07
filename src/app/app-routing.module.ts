import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EvenementListComponent} from "./evenementList/evenementList.component";
import {CreatEvenementComponent} from "./creat-evenement/creat-evenement.component";
import {EvenementComponent} from "./evenement/evenement.component";

export const EVENT_ROUTE = 'evenement';
export const CREAT_EVENT = 'creatEvenement';
export const MODIF_EVENT = 'evenement/modif/:id';
export const THIS_EVENT = 'evenement/:id';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'evenement' },
  { path: EVENT_ROUTE, component: EvenementListComponent },
  { path: CREAT_EVENT, component: CreatEvenementComponent},
  { path: MODIF_EVENT, component: CreatEvenementComponent},
  { path: THIS_EVENT, component: EvenementComponent},

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
