import StoryRepository from "../API/repository/story.repository.js";
import { StoryEntity } from "../entities/story.entity.js";

export class FindAllStories {
  constructor(private readonly storyRepository: StoryRepository) {}

  async getAll(): Promise<StoryEntity[]> {
    return await this.storyRepository.getAll();
  }
}