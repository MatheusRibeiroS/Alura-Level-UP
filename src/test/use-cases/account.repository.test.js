import createUser from '../../use-cases/create-user.js';

// to test the user creation, use the following command: node src\test\use-cases\account.repository.test.js

await createUser( 'Matheus dos Santos Ribeiro Silva', 'matheusribeiro@gmail.com', '12345678');

await createUser( 'Maria da Silva', 'maria@gmail.com', '12345678');

// user 3 should return some errors if you uncomment

// expected errors: 
// 1. the name field cannot be empty
// 2. Email address is invalid (because '@' and '.' are missing)
// 3. Password must have at least 8 characters

// await createUser( '','joaopaulogmailcom', '1234567');


