import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GetEvenementService {
  private url = 'http://localhost:8080';

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
    return this.http.get(this.url + '/evenement');
  }

  addEvenement(evenement: any, id:number){
    evenement.id = id;
    return this.http.post(this.url + '/evenement', evenement);
  }
}
