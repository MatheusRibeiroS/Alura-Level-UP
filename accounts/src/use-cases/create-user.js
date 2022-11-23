import createAccountValidator from '../validator/create-account-validator.js';
import AccountEntity from '../entities/account.entity.js';
import { BadRequestError } from '../http/errors/bad-request.error.js';
import { randomUUID } from 'crypto';

export default class CreateUser {

  constructor(AccountRepository) {
    this.repository = AccountRepository;
  }

  async execute({ name, email, password }) {
    const validator = new createAccountValidator();
    const userValidationLog = await validator.execute({ name, email, password }, this.repository);

    console.log(userValidationLog);

    if (userValidationLog.hasErrors) {
      throw new BadRequestError('Bad Request', userValidationLog.errors);
    } else {

      const account = new AccountEntity({
        // generate user id and add to user object
        id: randomUUID(),
        name,
        email,
        password,
        creation_date: new Date().toISOString().substring(0, 10)
      });

      await this.repository.save({_id: account.id, name, email, password, creation_date: account.creation_date});

      return {
        id: account.id,
        name: account.name,
        email: account.email,
        creation_date: account.creation_date
      };
    }
  }
}