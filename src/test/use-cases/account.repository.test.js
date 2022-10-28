import createUser from '../../use-cases/create-user.js';
import AccountRepository from '../../repository/account.repository.js';

// to test the user creation, use the following command: node src\test\use-cases\account.repository.test.js

const repository = new AccountRepository();

const createUserTest = new createUser(repository);

await createUserTest.execute({name:'Matheus dos Santos Ribeiro Silva', email: 'matheusribeiro@gmail.com', password: '12345678'});

await createUserTest.execute({name:'Maria da Silva', email: 'maria@gmail.com', password: '12345678'});

// user 3 should return some errors if you uncomment

// expected errors: 
// 1. the name field cannot be empty
// 2. Email address is invalid (because '@' and '.' are missing)
// 3. Password must have at least 8 characters

await createUserTest.execute({name:'', email: 'joaopaulogmailcom', password: '1234567'});


