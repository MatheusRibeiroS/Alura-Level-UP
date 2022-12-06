export default class StoryRepository {
  constructor(private _database: any) {}

  async create(story: Object) {
    return await this._database.Stories.create(story);
  }

  async update(storyId: string, data: any) {
    const updatedStory = await this._database.Stories.update(...data, {
      where: { id: storyId },
    });
    return updatedStory;
  }

  async save(account: Object) {
    await this._database.insertOne(account);
    return account;
  }

  async getAll() {
    return await this._database.Stories.findAll();
  }

  async findOne(storyId: string) {
    return await this._database.findOne({ where: { id: storyId } });
  }

  async delete(storyId: string) {
    await this._database.Stories.destroy({ where: { id: storyId } });
  }
}
