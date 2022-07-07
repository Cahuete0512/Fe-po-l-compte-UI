import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL_BACK} from "../Constantes/app.const";
import {ActivatedRoute, Router} from "@angular/router";
import {EVENT_ROUTE, MODIF_EVENT} from "../app-routing.module";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  private headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  private idEvenement: any;
  evenement: any = {};

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private  router: Router)
  {}


  ngOnInit(): void {
    this.idEvenement = this.route.snapshot.params['id'];
    let evenObs = this.getEvenement();
    let evenement = this.evenement;
    evenObs.subscribe((value => {
      console.log(value);
      this.evenement = value;
    }));
  }

  setEvent(event:any): void {
    this.evenement=event;
  }

  getEvenement(): Observable<any> {
    return this.http.get(URL_BACK + '/evenement/' + this.idEvenement, {headers: this.headers});
  }



  modifEvenement(){
    this.router.navigate(['evenement/modif/',this.idEvenement]);
  }

  suppEvenement(){
    let evenement = this.evenement;
    let id = this.idEvenement;
    console.log('suppression ' + this.idEvenement);
    this.http.delete(URL_BACK + '/evenement/suppEvenement/'+this.idEvenement)
      .subscribe({
        next(value) {
          console.log("suppression OK");
          evenement.splice(evenement.indexOf(id), 1);
        }
      });
    this.redirectApresClique();
  }

  redirectApresClique(){
    this.router.navigate([(EVENT_ROUTE)])
  }
}
