import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

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
    return this.http.get(this.url + '/evenement', {headers: this.headers});
  }
  //
  // modifEvenement(){
  //   this.router.navigate(['/evenement/modifEvenement/']);
  // }

  suppEvenement(evenement: any){
    let apiEvenementList = this.apiEvenementList;
    console.log('suppression ' + evenement.id);
    this.http.delete(this.url + '/evenement/suppEvenement/'+evenement.id).subscribe({
      next(value) {
        console.log("suppression OK");
        apiEvenementList.splice(apiEvenementList.indexOf(evenement), 1);
      }
    });
  }
}
