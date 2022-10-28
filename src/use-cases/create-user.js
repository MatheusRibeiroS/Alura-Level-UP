import { randomUUID } from 'crypto';
import createAccountValidator from '../validator/create-account-validator.js';
import AccountEntity from '../entities/account.entity.js';

export default class createUser {

  constructor(AccountRepository) {
    this.repository = AccountRepository;
  }

  async execute({ name, email, password }) {
    const userValidationLog = await createAccountValidator({ name, email, password });
    console.log(userValidationLog);

    if (userValidationLog.temErro) {
      console.log(userValidationLog.data);
      
    } else if (!userValidationLog.temErro) {
      console.log('valid account:', userValidationLog.data, '\n');

      const account = new AccountEntity({
        // generate user id and add to user object
        id: randomUUID(),
        name,
        email,
        password,
        creation_date: new Date()
      });

      await this.repository.save(account);
      console.log('account saved!\n');
      return account;
    }
  }
}