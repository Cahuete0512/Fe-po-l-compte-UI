export class ParticipantModel{
  id: Number
  nom: String
  prenom: String
  email: String


  constructor(id: Number, nom: String, prenom: String, email: String) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
  }
}
