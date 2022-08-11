import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EvenementListComponent} from "./evenementList/evenementList.component";
import {CreatEvenementComponent} from "./creat-evenement/creat-evenement.component";
import {EvenementComponent} from "./evenement/evenement.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {AuthGuardService} from "./Service/auth-guard.service";

export const EVENT_ROUTE = 'evenement';
export const CREAT_EVENT = 'creatEvenement';
export const MODIF_EVENT = 'evenement/modif/:id';
export const THIS_EVENT = 'evenement/:id';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'connexion' },
  { path: 'connexion', component: ConnexionComponent},
  {
    path: 'creatEvenement',
    loadChildren: () =>
      import('../app/creat-evenement/creat-evenement.component').then((c) => c.CreatEvenementComponent),
    canLoad: [AuthGuardService],
  },
  {
    path: 'evenement',
    loadChildren: () => import('../app/evenement/evenement.component').then((c) => c.EvenementComponent),
    canLoad: [AuthGuardService],
  },
  { path: EVENT_ROUTE, component: EvenementListComponent, canLoad:[AuthGuardService]},
  { path: CREAT_EVENT, component: CreatEvenementComponent, canLoad:[AuthGuardService]},
  { path: MODIF_EVENT, component: CreatEvenementComponent, canLoad:[AuthGuardService]},
  { path: THIS_EVENT, component: EvenementComponent, canLoad:[AuthGuardService]},
  { path: 'creatEvenement', loadChildren: () => import('../app/creat-evenement/creat-evenement.component').then(c => c.CreatEvenementComponent) },
  { path: 'evenement', loadChildren: () => import('../app/evenement/evenement.component').then(c => c.EvenementComponent) },

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
