import { Router } from 'express';
import DatabaseConnection from '../../infra/database-connection.js';
import AccountRepository from '../../repository/account.repository.js';
import CreateUserRequest from '../create-user.request.js';
import RemoveAccountRequest from '../remove-account.request.js';

const url = process.env.MONGODB_URL;
const database = process.env.MONGODB_DATABASE;

const accountRoutes = new Router();

const connection = await DatabaseConnection.createConnection({ url, database });
const accountRepository = new AccountRepository(connection);

const createUserRequest = new CreateUserRequest(accountRepository);

const removeAccountRequest = new RemoveAccountRequest();

accountRoutes.post('/account', createUserRequest.execute.bind(createUserRequest));
accountRoutes.delete('/account/:id', removeAccountRequest.execute.bind(removeAccountRequest));

export { accountRoutes };