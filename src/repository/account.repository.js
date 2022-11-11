import 'dotenv/config'; // import environment variables (it needs to be the first import)
import AccountEntity from "../entities/account.entity.js";

export default class AccountRepository {
  #database;

  constructor(database) {
    this.#database = database;
  }

  async save(account) {
    const db = this.#database;
    await db.insertOne(account);
    this.list();
    return account;
  }

  async list() {
    const users = await this.#database.find().toArray();
      return users.map((account) => new AccountEntity(account));
  }
}