import { randomUUID } from 'crypto';
import { save } from '../../data/account.repository.js';
import createAccountValidator from '../validator/create-account-validator.js';


export default async function createUser(name, email, password) {
  // user object
  let user = {
    name,
    email,
    password,
    creation_date: new Date().toISOString().substring(0, 10),
  }

  // generate user id and add to user object
  user['id'] = randomUUID();

  const userValidationLog = await createAccountValidator(user);

  if (userValidationLog.temErro) {
    console.log(userValidationLog);
  } else if (!userValidationLog.temErro) {
    console.log('valid account:', userValidationLog.data);
    console.log(userValidationLog);
    await save(user);
    console.log('account saved!\n');
  }

  return user;
}