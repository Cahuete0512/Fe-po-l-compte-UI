import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Observable} from "rxjs";
import {URL_BACK} from "../Constantes/app.const";

@Injectable({
  providedIn: 'root'
})

export class GetParticipantService {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    let eveObs = this.getParticipants();
    eveObs.subscribe({
      next(value) {
        console.log(value);
      }
    });
  }

  getParticipants(): Observable<any> {
    return this.http.get(URL_BACK + '/participants');
  }
}
