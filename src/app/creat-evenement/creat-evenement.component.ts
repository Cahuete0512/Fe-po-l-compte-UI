import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, FormBuilder} from "@angular/forms";
import {HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-creat-evenement',
  templateUrl: './creat-evenement.component.html',
  styleUrls: ['./creat-evenement.component.css']
})

export class CreatEvenementComponent implements OnInit {
  evenementForm: FormGroup | any;
  private urlPost = 'http://localhost:8080';
  private headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  apiPostEvenementList: any = [];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.evenementForm = this.fb.group({
      libelle: [],
      date_creation: [],
      lieu: [],
    });
  }

  creatEvenement(){
    console.log('Données du formulaire : ', this.evenementForm.value);
    this.postEvenements().subscribe({
      next(value) {
        console.log(value);
      }
    });
  }

  postEvenements(): Observable<any> {
    return this.http.post(this.urlPost + '/evenement', this.evenementForm.value, {headers: this.headers});
  }
}
