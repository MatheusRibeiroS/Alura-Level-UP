import { MongoClient } from "mongodb";

export default class DatabaseConnection {
  static #connection = {};

  static async createConnection({ url, database, collection }) {
    const client = new MongoClient(url);
    try {
    this.#connection[url] = await client.connect();
    console.log('Connected successfully to server');
    return this.#connection[url].db(database).collection(collection);;
    } catch (error) {
      throw new Error("Error connecting to the specified database");
    }
  }
}