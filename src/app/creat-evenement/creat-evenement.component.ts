import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, FormBuilder} from "@angular/forms";
import {HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import {first, Observable} from "rxjs";
import {ActivatedRoute, provideRoutes, Router} from "@angular/router";
import {EVENT_ROUTE} from "../app-routing.module";
import {URL_BACK} from "../Constantes/app.const";

@Component({
  selector: 'app-creat-evenement',
  templateUrl: './creat-evenement.component.html',
  styleUrls: ['./creat-evenement.component.css']
})

export class CreatEvenementComponent implements OnInit {


  idEvenement!: string;
  isCreation!: boolean;
  evenementForm!: FormGroup;
  private headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(
          private fb: FormBuilder,
          private http: HttpClient,
          private route: ActivatedRoute,
          private  router: Router) { }

  ngOnInit(): void {
    this.idEvenement = this.route.snapshot.params['id'];
    this.isCreation = !this.idEvenement;


    this.evenementForm = this.fb.group({
      libelle: [],
      date_creation: [],
      lieu: [],
    });

    if(!this.isCreation) {

      this.http.get(URL_BACK + '/evenement/'+this.idEvenement, {headers: this.headers})
        .pipe(first())
        .subscribe(ev => this.evenementForm.patchValue(ev));

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
    this.redirectApresValid();
  }

  postEvenements(): Observable<any> {
    return this.http.post(URL_BACK + '/evenement', this.evenementForm.value, {headers: this.headers});
  }

  putEvenement(): Observable<any> {
    return this.http.put(URL_BACK + '/evenement/'+this.idEvenement, this.evenementForm.value, {headers: this.headers});
  }

  redirectApresValid(){
    this.router.navigate([(EVENT_ROUTE)])
  }
}
