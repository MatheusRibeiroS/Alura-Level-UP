import {
  describe, expect, it,
} from '@jest/globals';
import DatabaseConnection from '../../infra/database-connection';
import accountRepository from '../../repository/account.repository';


import createAccountValidator from '../../validator/create-account-validator';

describe("should test the account creation validator", () => {

  const url = process.env.MONGODB_URL;
  const database = process.env.MONGODB_DATABASE;


  it("should return the validation object with no errors", async () => {

    const connection = await DatabaseConnection.createConnection({ url, database });

    const repository = new accountRepository(connection);

    const validator = new createAccountValidator();

    const userValidationLog = await validator.execute({
      name: "Matheus Ribeiro",
      email: "matheusribeiros@gmail.com",
      password: "12345678"
    }, repository);

    expect(userValidationLog).toStrictEqual({
      hasErrors: false,
      errors: [],
      data: {
        name: "Matheus Ribeiro",
        email: "matheusribeiros@gmail.com",
        password: "12345678"
      }
    })
  })

  it("should return the validation object with errors", async () => {

    const connection = await DatabaseConnection.createConnection({ url, database });

    const repository = new accountRepository(connection);

    const validator = new createAccountValidator();

    const userValidationLog = await validator.execute({
      name: "",
      email: "",
      password: "123456"
    }, repository);

    expect(userValidationLog).toStrictEqual({
      hasErrors: true,
        errors: [
          { field: 'name', message: 'the name field cannot be empty' },
          {
            field: 'password',
            message: 'Password must have at least 8 characters'
          },
          { field: 'email', message: 'Email is required' }
        ],
        data: { name: '', email: '', password: '123456' }
    })
  })
})