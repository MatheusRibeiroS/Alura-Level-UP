import { StoryInterface } from "../interfaces/interfaces.js";
import { CreateStoryDTO } from "../dtos/create-story.dto.js";

export class FindAllStories {
  constructor(private readonly storyRepository: any) {}

  async getAll(): Promise<StoryInterface[]> {
    return await this.storyRepository.getAll();
  }
}