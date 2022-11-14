import CreatePublication from '../../use-cases/create-publication.js';
import PublicationRepository from '../../repository/publication.repository.js';
import DatabaseConnection from '../../infra/database-connection.js';

const mongoDB_database = process.env.MONGODB_DATABASE;
const mongoDB_URL = process.env.MONGODB_URL;

const database = await DatabaseConnection.createConnection({
  url: mongoDB_URL,
  database: mongoDB_database,
});

// to test the user creation, use the following command: node src\test\use-cases\account.repository.test.js

const repository = new PublicationRepository(database);

const createPublicationTest = new CreatePublication(repository);

await createPublicationTest.execute({title:'The best book ever', author: 'Matheus Ribeiro', content: 'This is the best book ever written in the history of mankind. It is a must read for everyone.'});
await createPublicationTest.execute({title:'The best book ever', author: '', content: ''});