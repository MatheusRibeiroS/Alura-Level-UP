import { randomUUID } from 'crypto';
import saveOnFile from '../../data/save-on-file.js';
import createAccountValidator from '../validator/create-account-validator.js';


export default async function createUser(name, email, password) {
  // user object
  const user = {
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
    await saveOnFile(user);
    console.log('account saved!\n');
  }

  return user;
}