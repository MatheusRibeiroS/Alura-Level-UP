import database from "../../database/models";

export class StoryRepository {
  #database;

  constructor() {
    this.#database = database;
  }

  async create(story) {
    return await this.#database.Stories.create(story);
  }

  async update(storyId, data) {
    const updatedStory = await database.Stories.update(...data, {
      where: { id: storyId },
    });
    return updatedStory;
  }

  async save(account) {
    await this.#database.insertOne(account);
    this.getAll();
    return account;
  }

  async getAll() {
    return await this.#database.Stories.findAll();
  }

  async findOne(storyId) {
    return await this.#database.findOne({ where: { id: storyId } });
  }

  async delete(storyId) {
    await database.Stories.destroy({ where: { id: storyId } });
  }
}
