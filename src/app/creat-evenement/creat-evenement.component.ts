import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {first, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {EVENT_ROUTE} from "../app-routing.module";
import {URL_BACK} from "../Constantes/app.const";
import {ParticipantModel} from "../modeles/Participant";

@Component({
  selector: 'app-creat-evenementList',
  templateUrl: './creat-evenement.component.html',
  styleUrls: ['./creat-evenement.component.css']
})

export class CreatEvenementComponent implements OnInit {
  @Input() apiEvenementList: any = [];
  titleAdd!: string;
  titleModify!: string;
  idEvenement!: string;
  isCreation!: boolean;
  evenement: any;
  evenementForm!: FormGroup;
  participants: ParticipantModel[] = [];
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
    userObs.subscribe(value => {
      console.log(value);
      this.participants = value;
    });

    this.idEvenement = this.route.snapshot.params['id'];
    this.isCreation = !this.idEvenement;
    this.titleAdd='Ajoutez votre évènement';
    this.titleModify='Modifiez l\'évènement';
    this.evenementForm = this.fb.group({
      id: [],
      name: [],
      date: [],
      place: [],
      participants:  new FormArray([],
      )
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

  onCheckboxChange(event: any) {
    const participants = (this.evenementForm.controls['participants'] as FormArray);
    if (event.target.checked) {
      participants.push(new FormControl(this.participants.find(p => p.id == event.target.value)));
    } else {
      const index = participants.controls
        .findIndex(x => x.value === event.target.value);
      participants.removeAt(index);
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
    this.router.navigate([(EVENT_ROUTE)]);
  }

  getParticipants(): Observable<any> {
    return this.http.get(URL_BACK + '/participants', {headers: this.headers});
  }

  isChecked(participant: ParticipantModel): boolean {
    return this.evenement != undefined && this.evenement.participants.map((p: ParticipantModel) => p.id).includes(participant.id);
  }
}
