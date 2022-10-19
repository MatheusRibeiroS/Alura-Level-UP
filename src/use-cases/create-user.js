import { randomUUID } from 'crypto';


export function createUser( name, email, password) {

  // user object
  let user = {
    name,
    email,
    password,
    creation_date: new Date().toISOString().substring(0,10),
  }

  // generate user id and add to user object
  user['id'] = randomUUID();

  return user;
}