import { StoryInterface } from "../interfaces/interfaces";

export default class CreateStory {

  constructor(private _StoryRepository: any) {}

  async create(story: StoryInterface) {
    return await this._StoryRepository.save({ ...story });
  }

  async update(storyId: string, data: any) {
    return await this._StoryRepository.update(storyId, data);;
  }

  async delete(storyId: string) {
    await this._StoryRepository.delete(storyId);
  }

  async getAll() {
    return await this._StoryRepository.getAll();
  }

  async findOne(storyId: string) {
    return await this._StoryRepository.findOne(storyId);
  }
}