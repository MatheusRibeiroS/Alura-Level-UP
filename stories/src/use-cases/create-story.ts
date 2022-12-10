import { StoryInterface } from "../interfaces/interfaces.js";
import { CreateStoryDTO } from "../dtos/create-story-dto.js";

export default class CreateStory {

  constructor(private storyRepository: any) {}

  async create(story: CreateStoryDTO) : Promise<StoryInterface> {
    return await this.storyRepository.save({ ...story });
  }

  async update(storyId: string, data: Partial<StoryInterface>) {
    return await this.storyRepository.update(storyId, data);
  }

  async delete(storyId: string): Promise<void> {
    await this.storyRepository.delete(storyId);
  }

  async getAll(): Promise<StoryInterface[]> {
    return await this.storyRepository.getAll();
  }

  async findOne(storyId: string): Promise<StoryInterface> {
    return await this.storyRepository.findOne(storyId);
  }
}