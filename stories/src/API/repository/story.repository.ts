export default class StoryRepository {
  constructor(private database: any) {}

  async create(story: Object) {
    return await this.database.Stories.create(story);
  }

  async update(storyId: string, data: any) {
    const updatedStory = await this.database.Stories.update(...data, {
      where: { id: storyId },
    });
    return updatedStory;
  }

  async save(account: Object) {
    await this.database.Stories.insertOne(account);
    return account;
  }

  async getAll() {
    return await this.database.Stories.findAll();
  }

  async findOne(storyId: string) {
    return await this.database.Stories.findOne({ where: { id: storyId } });
  }

  async delete(storyId: string) {
    await this.database.Stories.destroy({ where: { id: storyId } });
  }
}
