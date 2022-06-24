import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})

export class EvenementComponent implements OnInit {

  private url = 'http://localhost:8080';
  private headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  apiEvenementList: any = [];

  constructor(private http: HttpClient) {

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
    return this.http.get(this.url + '/evenement', {headers: this.headers});
  }
}
