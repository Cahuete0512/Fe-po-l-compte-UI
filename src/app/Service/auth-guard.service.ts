import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad{
  constructor(private router: Router) { }

  canLoad(route: Route): boolean {
    let urlPath: string | undefined = route.path;
      if (urlPath === 'evenement') {
        alert('unauthorised the page');
        return false;
      }else if (urlPath === 'creatEvenement'){
        alert('unauthorised the page');
        return false;
      }
      return true;
    }
  }
