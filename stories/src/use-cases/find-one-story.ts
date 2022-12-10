import { StoryInterface } from "../interfaces/interfaces.js";
import { CreateStoryDTO } from "../dtos/create-story.dto.js";

export class FindOneStory {
  constructor(private readonly storyRepository: any) {}

  async findOne(storyId: string): Promise<StoryInterface> {
    return await this.storyRepository.findOne(storyId);
  }
}