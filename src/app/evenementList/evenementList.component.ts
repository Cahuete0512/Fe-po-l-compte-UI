import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {URL_BACK} from "../Constantes/app.const";
import {CREAT_EVENT, EVENT_ROUTE} from "../app-routing.module";

@Component({
  selector: 'app-evenementList',
  templateUrl: './evenementList.component.html',
  styleUrls: ['./evenementList.component.css']
})

export class EvenementListComponent implements OnInit {

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
  redirectToAddEvent(){
    this.router.navigate([(CREAT_EVENT)])
  }
}
