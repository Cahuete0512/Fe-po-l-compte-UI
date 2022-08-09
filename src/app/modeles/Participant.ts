export class ParticipantModel{
  id: Number
  surname: String
  forename: String
  email: String


  constructor(id: Number, surname: String, forename: String, email: String) {
    this.id = id;
    this.surname = surname;
    this.forename = forename;
    this.email = email;
  }
}
