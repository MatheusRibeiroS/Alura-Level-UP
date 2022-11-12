import CreateUser from '../../use-cases/create-user.js';
import AccountRepository from '../../repository/account.repository.js';
import DatabaseConnection from '../../infra/database-connection.js';

const mongoDB_database = process.env.MONGODB_DATABASE;
const mongoDB_URL = process.env.MONGODB_URL;

const database = await DatabaseConnection.createConnection({
  url: mongoDB_URL,
  database: mongoDB_database,
});

// to test the user creation, use the following command: node src\test\use-cases\account.repository.test.js

const repository = new AccountRepository(database);

const createUserTest = new CreateUser(repository);

await createUserTest.execute({name:'Matheus dos Santos Ribeiro Silva', email: 'matheusribeiro@gmail.com', password: '12345678'});

await createUserTest.execute({name:'Maria da Silva', email: 'maria@gmail.com', password: '12345678'});

// user 3 should return some errors if you uncomment

// expected errors: 
// 1. the name field cannot be empty
// 2. Email address is invalid (because '@' and '.' are missing)
// 3. Password must have at least 8 characters

// await createUserTest.execute({name:'', email: 'joaopaulogmailcom', password: '1234567'}, repository);


