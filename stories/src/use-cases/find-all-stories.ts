import StoryRepository from "../API/repository/story.repository.js";
import { StoryInterface } from "../interfaces/interfaces.js";

export class FindAllStories {
  constructor(private readonly storyRepository: StoryRepository) {}

  async getAll(): Promise<StoryInterface[]> {
    return await this.storyRepository.getAll();
  }
}