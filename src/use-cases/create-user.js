import { randomUUID } from 'crypto';
import createAccountValidator from '../validator/create-account-validator.js';
import AccountEntity from '../entities/account.entity.js';

export default class CreateUser {

  constructor(AccountRepository) {
    this.repository = AccountRepository;
  }

  async execute({ name, email, password }) {
    const validator = new createAccountValidator();
    const userValidationLog  = await validator.execute({ name, email, password }, this.repository);

    console.log(userValidationLog);
    if (userValidationLog.temErro) {
      return userValidationLog.data;
    } else {

      const account = new AccountEntity({
        // generate user id and add to user object
        id: randomUUID(),
        name,
        email,
        password,
        creation_date: new Date().toISOString().substring(0, 10)
      });

      await this.repository.save(account);
      return account;
    }
  }
}