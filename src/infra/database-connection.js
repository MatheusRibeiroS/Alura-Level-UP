import { MongoClient } from "mongodb";

export default class DatabaseConnection {
  static #instance;

  static async createConnection({ url, database }) {
    DatabaseConnection.#instance = new MongoClient(url);
    await DatabaseConnection.#instance.connect();
    const db = DatabaseConnection.#instance.db(database)
    return db;
  }

  static async closeConnection() {
    await DatabaseConnection.#instance.close()
  }
}