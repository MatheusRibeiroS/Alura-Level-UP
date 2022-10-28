import { randomUUID } from 'crypto';
import saveOnFile from '../repository/save-on-file.js';
import createAccountValidator from '../validator/create-account-validator.js';
import AccountEntity from '../entities/account.entity.js';

export default async function createUser(name, email, password) {

  const userValidationLog = await createAccountValidator({ name, email, password });
  console.log(userValidationLog);

  if (userValidationLog.temErro) {
    console.log(userValidationLog.data);
  } else if (!userValidationLog.temErro) {

    console.log('valid account:', userValidationLog.data);
    console.log(userValidationLog);

    const account = new AccountEntity({
      // generate user id and add to user object
      id: randomUUID(),
      name,
      email,
      password,
      creation_date: new Date()
    });

    await saveOnFile(account);
    console.log('account saved!\n');
    return account;
  }
}