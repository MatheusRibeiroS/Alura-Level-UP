import AccountRepository from "../repository/account.repository.js";
import DatabaseConnection from "../infra/database-connection.js";

const url = process.env.MONGODB_URL;
const database = process.env.MONGODB_DATABASE;

export default class RemoveAccountRequest {

  async execute(request, response) {
    try {
    const id = request.params.id;
    const connection = await DatabaseConnection.createConnection({ url, database });
    const accountRepository = new AccountRepository(connection);
    await accountRepository.delete(id);
    return response.status(200).send({ message: `Account with id: ${id} removed`});
    } catch (error) {
      console.log(error);
      return response.status(500).send({ message: error.message });
    }
  }
}