import 'dotenv/config'; // import environment variables (it needs to be the first import)
import AccountEntity from "../entities/account.entity.js";

export default class AccountRepository {
  #accountCollection;

  constructor(connection) {
    this.#accountCollection = connection.collection('Users');
  }

  async save(account) {
    await this.#accountCollection.insertOne(account);
    this.list();
    return account;
  }

  async list() {
    const users = await this.#accountCollection.find().toArray();
    return users.map((account) => new AccountEntity(account));
  }

  async findOne(id) {
    const account = await this.#accountCollection.findOne({
      _id: id
    });
    return new AccountEntity(account);
  }

  async delete(id) {
    await this.#accountCollection.deleteOne({ _id: id });
  }
}