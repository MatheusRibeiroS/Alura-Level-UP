import { StoryInterface } from "../interfaces/interfaces.js";
import StoryRepository from "../API/repository/story.repository.js";

export class FindOneStory {
  constructor(private readonly storyRepository: StoryRepository) {}

  async findOne(storyId: string): Promise<StoryInterface> {
    return await this.storyRepository.findOne(storyId);
  }
}