import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {first, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {EVENT_ROUTE} from "../app-routing.module";
import {URL_BACK} from "../Constantes/app.const";

@Component({
  selector: 'app-creat-evenementList',
  templateUrl: './creat-evenement.component.html',
  styleUrls: ['./creat-evenement.component.css']
})

export class CreatEvenementComponent implements OnInit {
  @Input() apiEvenementList: any = [];
  idEvenement!: string;
  isCreation!: boolean;
  evenement: any;
  evenementForm!: FormGroup;
  participants: any = [];
  private headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(
          private fb: FormBuilder,
          private http: HttpClient,
          private route: ActivatedRoute,
          private  router: Router) { }

  ngOnInit(): void {
    let userObs = this.getParticipants();
    let participants = this.participants;
    userObs.subscribe((value => {
      console.log(value);
      this.participants = value;
    }));

    this.idEvenement = this.route.snapshot.params['id'];
    this.isCreation = !this.idEvenement;


    this.evenementForm = this.fb.group({
      id: [],
      name: [],
      date: [],
      place: [],
    });

    if(!this.isCreation) {

      this.http.get(URL_BACK+'/evenement/'+this.idEvenement, {headers: this.headers})
        .pipe(first())
        .subscribe(ev => {
          this.evenementForm.patchValue(ev);
          this.evenement = ev;
        });

    }
  }

  submitEvenement(){
    console.log('Données du formulaire : ', this.evenementForm.value);
    if(this.isCreation) {
      this.postEvenements().subscribe({
        next(value) {
          console.log("creation ok : " + value);
        }
      });
    }else {
      this.putEvenement().subscribe({
        next(value) {
          console.log("modification ok : " + value);
        }
      });
    }
    this.redirectApresClique();
  }

  postEvenements(): Observable<any> {
    return this.http.post(URL_BACK + '/evenement/create', this.evenementForm.value, {headers: this.headers});
  }

  putEvenement(): Observable<any> {
    return this.http.put(URL_BACK + '/evenement/', this.evenementForm.value, {headers: this.headers});
  }

  redirectApresClique(){
    this.router.navigate([(EVENT_ROUTE)])
  }

  getParticipants(): Observable<any> {
    return this.http.get(URL_BACK + '/participants', {headers: this.headers});
  }
}
