export default class AccountEntity {
  constructor({ name, email, password, creation_date}) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.creation_date = creation_date;
  }
}