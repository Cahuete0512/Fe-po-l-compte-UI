import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {URL_BACK} from "../Constantes/app.const";
import {MODIF_EVENT} from "../app-routing.module";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})

export class EvenementComponent implements OnInit {

  private headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  apiEvenementList: any = [];

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    let truc = this.apiEvenementList;
    let eveObs = this.getEvenements();
    eveObs.subscribe({
      next(value) {
        console.log(value);
        for (let i = 0; i < value.length; i++) {
          console.log(value[i]);
          truc.push(value[i]);
        }
      }
    });
  }

  getEvenements(): Observable<any> {
    return this.http.get(URL_BACK + '/evenement', {headers: this.headers});
  }
}
