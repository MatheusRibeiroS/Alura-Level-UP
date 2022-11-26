import 'dotenv/config'; // import environment variables (it needs to be the first import)

export default class PublicationRepository {
  #database;

  constructor(database) {
    this.#database = database;
  }

  async save(publication) {
    const db = this.#database;
    await db.insertOne(publication);
    return publication;
  }
}