import { Component, OnInit } from '@angular/core';
import {GetParticipantService} from "../Service/GetParticipant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {URL_BACK} from "../Constantes/app.const";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  email: string = '';
  password!: string;

  constructor(private getParticipantService: GetParticipantService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    this.getParticipantService.getParticipants().subscribe((result)=> {
      //TODO : Il faut vérifier que le participant existe bien en base. Sinon, interdire l'accès
      this.router.navigate(['/evenement']);
    });
  }
}
