import { StoryEntity } from "../entities/story.entity.js";
import { CreateStoryDTO } from "../dtos/create-story.dto.js";
import StoryRepository from "../API/repository/story.repository.js";

export class CreateStory {
  constructor(private readonly storyRepository: StoryRepository) {}

  async create(story: CreateStoryDTO) : Promise<StoryEntity> {
    return await this.storyRepository.create(story);
  }
}
