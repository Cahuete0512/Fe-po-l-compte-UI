import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Observable} from "rxjs";
import {URL_BACK} from "../Constantes/app.const";

@Injectable({
  providedIn: 'root'
})

export class GetEvenementService {

  private test:String = "";

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    let eveObs = this.getEvenements();
    eveObs.subscribe({
      next(value) {
        console.log(value);
      }
    });
  }

  getEvenements(): Observable<any> {
    return this.http.get(URL_BACK + '/evenement');
  }

  addEvenement(evenement: any, id:number){
    evenement.id = id;
    return this.http.post(URL_BACK + '/evenement', evenement);
  }
}
