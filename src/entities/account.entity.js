export default class AccountEntity {
  constructor({id, name, email, password, creation_date}) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.creation_date = creation_date;
  }
}