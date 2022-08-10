import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  surname: any = '';
  forename: any = '';
  email: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  login() {

  }
}
