import { StoryInterface } from "../interfaces/interfaces.js";
import { CreateStoryDTO } from "../module/stories/dtos/create-story.dto.js";
import StoryRepository from "../API/repository/story.repository.js";

export class CreateStory {
  constructor(private readonly storyRepository: StoryRepository) {}

  async create(story: CreateStoryDTO) : Promise<StoryInterface> {
    return await this.storyRepository.create(story);
  }
}
