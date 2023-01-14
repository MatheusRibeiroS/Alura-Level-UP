import { Router } from 'express';
import DatabaseConnection from '../../infra/database-connection.js';
import AccountRepository from '../../repository/account.repository.js';
import CreateUserRequest from '../create-user.request.js';
import RemoveAccountRequest from '../remove-account.request.js';
import FindUserRequest from '../find-user.request.js';
import FindAllUsersRequest from '../find-all-users.request.js';

const url = process.env.MONGODB_URL;
const database = process.env.MONGODB_DATABASE;

const accountRoutes = new Router();

const connection = await DatabaseConnection.createConnection({ url, database });
const accountRepository = new AccountRepository(connection);

const createUserRequest = new CreateUserRequest(accountRepository);

const findUserRequest = new FindUserRequest(accountRepository);

const findAllUsersRequest = new FindAllUsersRequest(accountRepository);

const removeAccountRequest = new RemoveAccountRequest(accountRepository);

accountRoutes.post('/account', createUserRequest.execute.bind(createUserRequest));
accountRoutes.get('/account/:id', findUserRequest.execute.bind(findUserRequest));
accountRoutes.get('/accounts', findAllUsersRequest.execute.bind(findAllUsersRequest));
accountRoutes.delete('/account/:id', removeAccountRequest.execute.bind(removeAccountRequest));

export { accountRoutes };